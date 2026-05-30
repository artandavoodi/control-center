import http from 'node:http';
import { readFile, writeFile, mkdir, rm, rename, stat, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const controlCenterRoot = path.dirname(fileURLToPath(import.meta.url));
const neuroartanRoot = path.resolve(controlCenterRoot, '..');
const port = Number(process.env.PORT || process.env.CONTROL_CENTER_PORT || 8894);

const contentTypes = new Map([
  ['.html', 'text/html; charset=utf-8'],
  ['.css', 'text/css; charset=utf-8'],
  ['.js', 'text/javascript; charset=utf-8'],
  ['.json', 'application/json; charset=utf-8'],
  ['.svg', 'image/svg+xml'],
  ['.png', 'image/png'],
  ['.jpg', 'image/jpeg'],
  ['.jpeg', 'image/jpeg'],
  ['.webp', 'image/webp']
]);

function send(response, status, payload, type = 'application/json; charset=utf-8') {
  response.writeHead(status, { 'Content-Type': type, 'Cache-Control': 'no-store' });
  response.end(type.startsWith('application/json') && !Buffer.isBuffer(payload) ? JSON.stringify(payload) : payload);
}

function readBody(request) {
  return new Promise((resolve, reject) => {
    let body = '';
    request.on('data', (chunk) => { body += chunk; });
    request.on('end', () => {
      try { resolve(body ? JSON.parse(body) : {}); }
      catch (error) { reject(error); }
    });
    request.on('error', reject);
  });
}

function safePath(inputPath = '') {
  const clean = String(inputPath || '').replace(/^\/+/, '');
  const target = path.resolve(neuroartanRoot, clean);
  if (!target.startsWith(neuroartanRoot + path.sep) && target !== neuroartanRoot) {
    throw new Error('Path is outside the Neuroartan root.');
  }
  return target;
}

function slugify(value = 'document') {
  return String(value || 'document').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'document';
}

function buildDocumentPayload(documentItem) {
  const metadata = documentItem.metadata || {};
  const fields = ['document_id', 'classification', 'department', 'office', 'owner', 'status', 'template_lock', 'publication_target'];
  const frontmatter = fields.map((field) => `${field}: ${JSON.stringify(metadata[field] || documentItem[field] || '')}`).join('\n');
  return `---\n${frontmatter}\n---\n\n${documentItem.body || ''}`;
}

async function listTree(rootPath, depth = 2) {
  const target = safePath(rootPath);
  async function readNode(current, level) {
    const currentStat = await stat(current);
    if (!currentStat.isDirectory()) {
      return { type:'document', label:path.basename(current), path:path.relative(neuroartanRoot, current) };
    }
    const entries = level <= 0 ? [] : await readdir(current, { withFileTypes:true });
    const children = [];
    for (const entry of entries.filter((item) => !item.name.startsWith('.')).slice(0, 200)) {
      children.push(await readNode(path.join(current, entry.name), level - 1));
    }
    return { type:'folder', label:path.basename(current), path:path.relative(neuroartanRoot, current), children };
  }
  return readNode(target, depth);
}

async function handleApi(request, response, url) {
  if (url.pathname === '/api/control-center/status') {
    send(response, 200, { ok:true, root:neuroartanRoot, controlCenter:controlCenterRoot });
    return;
  }

  if (url.pathname === '/api/control-center/tree') {
    const rootPath = url.searchParams.get('root') || 'I';
    const depth = Number(url.searchParams.get('depth') || 2);
    send(response, 200, await listTree(rootPath, depth));
    return;
  }

  if (url.pathname === '/api/control-center/document/write' && request.method === 'POST') {
    const documentItem = await readBody(request);
    const format = documentItem.format || 'md';
    const basePath = String(documentItem.path || 'control-center/workspace').replace(/\.[A-Za-z0-9]+$/, '');
    const target = safePath(`${basePath}/${slugify(documentItem.title)}.${format}`);
    await mkdir(path.dirname(target), { recursive:true });
    await writeFile(target, buildDocumentPayload(documentItem), 'utf8');
    send(response, 200, { ok:true, path:path.relative(neuroartanRoot, target) });
    return;
  }

  if (url.pathname === '/api/control-center/document/delete' && request.method === 'POST') {
    const payload = await readBody(request);
    const target = safePath(payload.path || '');
    await rm(target, { force:true, recursive:false });
    send(response, 200, { ok:true });
    return;
  }

  if (url.pathname === '/api/control-center/document/move' && request.method === 'POST') {
    const payload = await readBody(request);
    const from = safePath(payload.from || '');
    const to = safePath(payload.to || '');
    await mkdir(path.dirname(to), { recursive:true });
    await rename(from, to);
    send(response, 200, { ok:true, path:path.relative(neuroartanRoot, to) });
    return;
  }

  send(response, 404, { ok:false, error:'Unknown Control Center API route.' });
}

async function serveStatic(request, response, url) {
  const requested = decodeURIComponent(url.pathname === '/' ? '/index.html' : url.pathname);
  const target = path.resolve(controlCenterRoot, requested.replace(/^\/+/, ''));
  if (!target.startsWith(controlCenterRoot + path.sep) && target !== controlCenterRoot) {
    send(response, 403, 'Forbidden', 'text/plain; charset=utf-8');
    return;
  }
  try {
    const file = await readFile(target);
    send(response, 200, file, contentTypes.get(path.extname(target)) || 'application/octet-stream');
  } catch {
    send(response, 404, 'Not found', 'text/plain; charset=utf-8');
  }
}

const server = http.createServer(async (request, response) => {
  const url = new URL(request.url || '/', `http://${request.headers.host || '127.0.0.1'}`);
  try {
    if (url.pathname.startsWith('/api/control-center/')) {
      await handleApi(request, response, url);
      return;
    }
    await serveStatic(request, response, url);
  } catch (error) {
    send(response, 500, { ok:false, error:error.message });
  }
});

server.listen(port, '127.0.0.1', () => {
  console.log(`Neuroartan Control Center listening on http://127.0.0.1:${port}/`);
});
