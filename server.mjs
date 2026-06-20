import http from 'node:http';
import { readFile, writeFile, mkdir, rm, rename, stat, readdir } from 'node:fs/promises';
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const controlCenterRoot = path.dirname(fileURLToPath(import.meta.url));
const neuroartanRoot = path.resolve(controlCenterRoot, '..');
const port = Number(process.env.PORT || process.env.CONTROL_CENTER_PORT || 8894);

const localEnvPath = path.join(controlCenterRoot, '.env.local');

function applyLocalEnv() {
  if (!existsSync(localEnvPath)) return;
  try {
    const content = readFileSync(localEnvPath, 'utf8');
    for (const line of content.split(/\r?\n/)) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#') || !trimmed.includes('=')) continue;
      const index = trimmed.indexOf('=');
      const key = trimmed.slice(0, index).trim();
      const value = trimmed.slice(index + 1).trim().replace(/^['"]|['"]$/g, '');
      if (key && process.env[key] === undefined) process.env[key] = value;
    }
  } catch (error) {
    console.warn(`Unable to load ${localEnvPath}: ${error.message}`);
  }
}

applyLocalEnv();

const supabaseUrl = process.env.NEUROARTAN_SUPABASE_URL || process.env.SUPABASE_URL || '';
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEUROARTAN_SUPABASE_SERVICE_ROLE_KEY || '';

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

function assertSupabaseServiceConfig() {
  if (!supabaseUrl || !supabaseServiceRoleKey) {
    const missing = [
      supabaseUrl ? null : 'NEUROARTAN_SUPABASE_URL',
      supabaseServiceRoleKey ? null : 'SUPABASE_SERVICE_ROLE_KEY'
    ].filter(Boolean);
    const error = new Error(`Missing Control Center Supabase service configuration: ${missing.join(', ')}`);
    error.status = 500;
    throw error;
  }
}

async function supabaseServiceFetch(route, options = {}) {
  assertSupabaseServiceConfig();
  const endpoint = `${supabaseUrl.replace(/\/+$/, '')}/rest/v1/${route.replace(/^\/+/, '')}`;
  const response = await fetch(endpoint, {
    ...options,
    headers: {
      apikey: supabaseServiceRoleKey,
      Authorization: `Bearer ${supabaseServiceRoleKey}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Prefer: 'return=representation',
      ...(options.headers || {})
    }
  });
  const text = await response.text();
  let payload = null;
  try { payload = text ? JSON.parse(text) : null; }
  catch { payload = text; }
  if (!response.ok) {
    const error = new Error(typeof payload === 'object' && payload?.message ? payload.message : `Supabase service request failed with ${response.status}`);
    error.status = response.status;
    error.details = payload;
    throw error;
  }
  return payload;
}

async function readVerificationQueue() {
  const requestRows = await supabaseServiceFetch('profile_verification_requests?select=id,profile_id,auth_user_id,request_status,verification_type,request_note,created_at,reviewed_at,updated_at&order=created_at.desc');
  const profileIds = Array.isArray(requestRows) ? requestRows.map((row) => row.profile_id).filter(Boolean) : [];
  const uniqueProfileIds = [...new Set(profileIds)];
  let profilesById = new Map();

  if (uniqueProfileIds.length) {
    const profiles = await supabaseServiceFetch(`profiles?select=id,auth_user_id,username,display_name,email,avatar_url,public_avatar_url,photo_url,verification_status,public_verification_status,profile_verified,verified_at,profile_verified_at,updated_at&id=in.(${uniqueProfileIds.map(encodeURIComponent).join(',')})`);
    profilesById = new Map((Array.isArray(profiles) ? profiles : []).map((profile) => [String(profile.id), profile]));
  }

  return (Array.isArray(requestRows) ? requestRows : []).map((row) => {
    const profile = profilesById.get(String(row.profile_id)) || {};
    return {
      ...row,
      username: profile.username || '',
      display_name: profile.display_name || '',
      email: profile.email || '',
      avatar_url: profile.avatar_url || '',
      public_avatar_url: profile.public_avatar_url || '',
      photo_url: profile.photo_url || ''
    };
  });
}

async function updateVerificationReview(payload) {
  const id = String(payload.id || '');
  const status = payload.status === 'approved' ? 'approved' : payload.status === 'rejected' ? 'rejected' : '';
  if (!id || !status) {
    const error = new Error('Verification review requires id and approved/rejected status.');
    error.status = 400;
    throw error;
  }

  const reviewedAt = new Date().toISOString();
  const updatedRows = await supabaseServiceFetch(`profile_verification_requests?id=eq.${encodeURIComponent(id)}`, {
    method: 'PATCH',
    body: JSON.stringify({ request_status: status, reviewed_at: reviewedAt, updated_at: reviewedAt })
  });
  const requestRow = Array.isArray(updatedRows) ? updatedRows[0] : null;
  if (!requestRow?.profile_id) {
    const error = new Error('Verification request was not found.');
    error.status = 404;
    throw error;
  }

  const profilePatch = status === 'approved'
    ? {
        verification_status: 'verified',
        public_verification_status: 'verified',
        profile_verified: true,
        verified_at: reviewedAt,
        profile_verified_at: reviewedAt,
        updated_at: reviewedAt
      }
    : {
        verification_status: 'rejected',
        public_verification_status: 'unverified',
        profile_verified: false,
        verified_at: null,
        profile_verified_at: null,
        updated_at: reviewedAt
      };

  await supabaseServiceFetch(`profiles?id=eq.${encodeURIComponent(requestRow.profile_id)}`, {
    method: 'PATCH',
    body: JSON.stringify(profilePatch)
  });

  return { ok: true, request: requestRow, status };
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

  if (url.pathname === '/api/control-center/verification/queue') {
    send(response, 200, { ok:true, requests: await readVerificationQueue() });
    return;
  }

  if (url.pathname === '/api/control-center/verification/review' && request.method === 'POST') {
    send(response, 200, await updateVerificationReview(await readBody(request)));
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
    send(response, error.status || 500, { ok:false, error:error.message, details:error.details || null });
  }
});

server.listen(port, '127.0.0.1', () => {
  console.log(`Neuroartan Control Center listening on http://127.0.0.1:${port}/`);
});
