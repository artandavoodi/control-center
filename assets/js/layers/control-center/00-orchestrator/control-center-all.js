const REGISTRY_URL = "/assets/data/control-center/index.json";
const DOCUMENT_STORE_KEY = "neuroartan.controlCenter.documents";
const VERIFICATION_STORE_KEY = "neuroartan.controlCenter.verification";
const BROWSER_DB_NAME = "neuroartan.controlCenter";
const BROWSER_DB_STORE = "records";

const state = {
  registry:null,
  activePanel:"overview",
  documents:[],
  activeDocumentId:"",
  verificationRequests:[],
  verificationStatusFilter:"submitted",
  verificationSearchQuery:"",
  verificationLoadState:"loading",
  verificationRefreshTimer:null,
  memoryStore:new Map(),
  workspaceHandle:null,
  workspaceLabel:"Browser store"
};

function normalizeString(value = "") {
  return String(value || "").trim();
}

function escapeHtml(value = "") {
  return normalizeString(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function slugify(value = "document") {
  return normalizeString(value).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "document";
}

function getRoot() {
  return document.querySelector("[data-control-center-root]");
}

function readJsonStore(key, fallback) {
  try {
    const storage = window.localStorage;
    const stored = storage ? storage.getItem(key) : state.memoryStore.get(key);
    return stored ? JSON.parse(stored) : fallback;
  } catch {
    return fallback;
  }
}

function writeJsonStore(key, value) {
  const payload = JSON.stringify(value);
  try {
    if (window.localStorage) {
      window.localStorage.setItem(key, payload);
      return;
    }
  } catch {
    state.memoryStore.set(key, payload);
    return;
  }
  state.memoryStore.set(key, payload);
}

function openBrowserStore() {
  return new Promise((resolve, reject) => {
    if (!window.indexedDB) {
      reject(new Error("IndexedDB unavailable"));
      return;
    }

    const request = window.indexedDB.open(BROWSER_DB_NAME, 1);
    request.onupgradeneeded = () => {
      request.result.createObjectStore(BROWSER_DB_STORE);
    };
    request.onerror = () => reject(request.error || new Error("IndexedDB open failed"));
    request.onsuccess = () => resolve(request.result);
  });
}

async function readBrowserStore(key) {
  const db = await openBrowserStore();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(BROWSER_DB_STORE, "readonly");
    const store = transaction.objectStore(BROWSER_DB_STORE);
    const request = store.get(key);
    request.onerror = () => reject(request.error || new Error("IndexedDB read failed"));
    request.onsuccess = () => resolve(request.result || "");
    transaction.oncomplete = () => db.close();
  });
}

async function writeBrowserStore(key, payload) {
  const db = await openBrowserStore();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(BROWSER_DB_STORE, "readwrite");
    const store = transaction.objectStore(BROWSER_DB_STORE);
    const request = store.put(payload, key);
    request.onerror = () => reject(request.error || new Error("IndexedDB write failed"));
    request.onsuccess = () => resolve();
    transaction.oncomplete = () => db.close();
  });
}

async function readJsonStoreAsync(key, fallback) {
  const synchronous = readJsonStore(key, null);
  if (synchronous) return synchronous;

  try {
    const stored = await readBrowserStore(key);
    return stored ? JSON.parse(stored) : fallback;
  } catch {
    return fallback;
  }
}

async function writeJsonStoreAsync(key, value) {
  const payload = JSON.stringify(value);
  writeJsonStore(key, value);

  try {
    await writeBrowserStore(key, payload);
  } catch {
    state.memoryStore.set(key, payload);
  }
}

async function loadJson(url) {
  const response = await fetch(url, { cache:"no-store" });
  if (!response.ok) throw new Error('Unable to load ' + url);
  return response.json();
}


function getSupabaseConfig() {
  let storedUrl = "";
  let storedKey = "";
  try {
    storedUrl = window.localStorage?.getItem("neuroartan.supabase.url") || "";
    storedKey = window.localStorage?.getItem("neuroartan.supabase.anon") || "";
  } catch {
    storedUrl = "";
    storedKey = "";
  }
  return {
    url:normalizeString(window.__NEUROARTAN_SUPABASE_URL__ || storedUrl),
    key:normalizeString(window.__NEUROARTAN_SUPABASE_ANON_KEY__ || storedKey)
  };
}

function hasUsableSupabaseConfig(config = getSupabaseConfig()) {
  const url = normalizeString(config.url);
  const key = normalizeString(config.key);

  if (!url || !key) return false;
  if (url.includes("YOUR_SUPABASE_PROJECT_URL")) return false;
  if (key.includes("YOUR_SUPABASE_ANON_KEY")) return false;
  if (!/^https:\/\/[^/]+\.supabase\.co$/i.test(url)) return false;

  return true;
}

async function supabaseRest(path, options = {}) {
  const config = getSupabaseConfig();
  if (!hasUsableSupabaseConfig(config)) throw new Error("Supabase credentials missing or invalid");
  const response = await fetch(config.url.replace(/\/$/, "") + "/rest/v1/" + path, {
    ...options,
    headers:{
      apikey:config.key,
      Authorization:"Bearer " + config.key,
      "Content-Type":"application/json",
      Prefer:"return=representation",
      ...(options.headers || {})
    }
  });
  if (!response.ok) {
    const detail = await response.text();
    throw new Error(detail || response.statusText);
  }
  return response.status === 204 ? null : response.json();
}

function iconMarkup(src = "", label = "") {
  if (!src) return "";
  return `<img class="control-center-nav__icon" src="${escapeHtml(src)}" alt="" aria-hidden="true" data-icon-label="${escapeHtml(label)}">`;
}

function actionMarkup(label, options = {}) {
  const icon = options.icon ? `<img class="control-center-action__icon" src="${escapeHtml(options.icon)}" alt="" aria-hidden="true">` : "";
  return `<button class="control-center-action${options.primary ? " control-center-action--primary" : ""}" type="button" data-action="${escapeHtml(options.action || "")}" ${options.id ? `data-id="${escapeHtml(options.id)}"` : ""}>${icon}<span>${escapeHtml(label)}</span></button>`;
}

function chipMarkup(label, stateName = "") {
  return `<span class="control-center-chip" data-state="${escapeHtml(stateName)}">${escapeHtml(label)}</span>`;
}

function formatTimestamp(value = "") {
  if (!value) return "Unknown";
  try {
    return new Intl.DateTimeFormat("en-US", { dateStyle:"medium", timeStyle:"short" }).format(new Date(value));
  } catch {
    return normalizeString(value) || "Unknown";
  }
}

function formatVerificationType(value = "") {
  return normalizeString(value || "profile_identity")
    .replaceAll("_", " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function normalizeVerificationStatus(value = "") {
  const status = normalizeString(value || "submitted").toLowerCase();
  if (status === "declined") return "rejected";
  if (status === "verified") return "approved";
  return status || "submitted";
}

function getVerificationAvatar(request = {}) {
  return normalizeString(
    request.public_avatar_url ||
    request.avatar_url ||
    request.photo_url ||
    request.profiles?.public_avatar_url ||
    request.profiles?.avatar_url ||
    request.profiles?.photo_url ||
    ""
  );
}

function getVerificationInitials(request = {}) {
  const source = normalizeString(request.display_name || request.username || "User");
  return source
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function getVerificationStatusCount(status = "") {
  if (status === "all") return state.verificationRequests.length;
  return state.verificationRequests.filter((request) => normalizeVerificationStatus(request.request_status) === status).length;
}

function getVisibleVerificationRequests() {
  const query = normalizeString(state.verificationSearchQuery).toLowerCase();
  return state.verificationRequests.filter((request) => {
    const status = normalizeVerificationStatus(request.request_status);
    const statusMatches = state.verificationStatusFilter === "all" || status === state.verificationStatusFilter;
    if (!statusMatches) return false;
    if (!query) return true;
    return [
      request.id,
      request.profile_id,
      request.auth_user_id,
      request.username,
      request.display_name,
      request.email,
      request.request_note,
      request.verification_type,
      request.request_status
    ].map(normalizeString).join(" ").toLowerCase().includes(query);
  });
}

function verificationAvatarMarkup(request = {}) {
  const avatar = getVerificationAvatar(request);
  if (avatar) {
    return `<figure class="control-center-request__avatar"><img src="${escapeHtml(avatar)}" alt="" loading="lazy"></figure>`;
  }
  return `<figure class="control-center-request__avatar" data-empty="true"><span>${escapeHtml(getVerificationInitials(request))}</span></figure>`;
}

function renderShell() {
  const root = getRoot();
  const registry = state.registry;
  if (!root || !registry) return;
  root.innerHTML = `
    <section class="control-center-shell" data-control-center-shell>
      <aside class="control-center-shell__rail" aria-label="Control Center navigation">
        <header class="control-center-brand">
          <h1 class="control-center-brand__title">${escapeHtml(registry.shell.title)}</h1>
          <p class="control-center-brand__intro">${escapeHtml(registry.shell.intro)}</p>
        </header>
        <nav class="control-center-nav" data-control-center-nav>
          ${registry.navigation.map((item) => `
            <button class="control-center-nav__button" type="button" data-panel="${escapeHtml(item.id)}" aria-selected="${item.id === state.activePanel ? "true" : "false"}">
              ${iconMarkup(item.icon, item.label)}<span>${escapeHtml(item.label)}</span>
            </button>
          `).join("")}
        </nav>
      </aside>
      <main class="control-center-shell__main" data-control-center-panel-host></main>
    </section>`;
  renderActivePanel();
}

function getPanelHost() {
  return document.querySelector("[data-control-center-panel-host]");
}

function renderActivePanel() {
  const host = getPanelHost();
  if (!host) return;
  const renderers = { overview:renderOverview, documents:renderDocuments, verification:renderVerification, tokens:renderTokens, icons:renderIcons, staff:renderStaff, office:renderOffice };
  host.innerHTML = `<div class="control-center-panel-host">${(renderers[state.activePanel] || renderOverview)()}</div>`;
}

function renderOverview() {
  const overview = state.registry.overview;
  return `
    <section class="control-center-panel">
      <h2 class="control-center-panel__title">Operational overview</h2>
      <div class="control-center-grid">
        ${overview.metrics.map((item) => `<article class="control-center-card"><p class="control-center-card__title">${escapeHtml(item.label)}</p><p class="control-center-card__value">${escapeHtml(item.value)}</p><p class="control-center-card__copy">${escapeHtml(item.detail)}</p></article>`).join("")}
      </div>
    </section>
    <section class="control-center-panel">
      <h2 class="control-center-panel__title">Institutional systems</h2>
      <div class="control-center-grid">
        ${overview.systems.map((item) => `<article class="control-center-card"><div class="control-center-card__row"><p class="control-center-card__title">${escapeHtml(item.name)}</p>${chipMarkup(item.state, item.state)}</div><p class="control-center-card__copy">${escapeHtml(item.detail)}</p></article>`).join("")}
      </div>
    </section>`;
}

function getActiveDocument() {
  return state.documents.find((documentItem) => documentItem.id === state.activeDocumentId) || state.documents[0];
}

function getFormat(extension) {
  return state.registry.documents.formats.find((item) => item.id === extension) || state.registry.documents.formats[0];
}

function renderTreeNode(node) {
  if (node.type === "folder") {
    return `<div class="control-center-tree__folder"><div class="control-center-tree__label">${escapeHtml(node.label)}</div>${(node.children || []).map(renderTreeNode).join("")}</div>`;
  }
  return `<button class="control-center-tree__document" type="button" data-document-id="${escapeHtml(node.id)}" aria-selected="${node.id === state.activeDocumentId ? "true" : "false"}">${escapeHtml(node.label)}</button>`;
}

function renderMetadataFields(documentItem) {
  const metadata = documentItem.metadata || {};
  return state.registry.documents.metadataTemplate.fields.map((field) => `
    <label class="control-center-field">
      <span>${escapeHtml(field.label)}</span>
      <input class="control-center-editor__field" value="${escapeHtml(metadata[field.id] || documentItem[field.id] || "")}" placeholder="${escapeHtml(field.placeholder || "")}" data-document-metadata="${escapeHtml(field.id)}">
    </label>
  `).join("");
}

function renderDocuments() {
  const documentItem = getActiveDocument();
  if (!documentItem) return `<section class="control-center-panel"><p class="control-center-panel__copy">No documents configured.</p></section>`;
  const format = getFormat(documentItem.format || "md");
  return `
    <section class="control-center-workspace">
      <section class="control-center-panel control-center-workspace__sidebar">
        <h2 class="control-center-panel__title">Vault</h2>
        <p class="control-center-panel__copy">${escapeHtml(state.workspaceLabel)} · ${escapeHtml(state.registry.documents.workspace.root)}</p>
        <div class="control-center-actions">
          ${actionMarkup("Choose folder", { action:"choose-workspace" })}
          ${actionMarkup("Create", { action:"create-document", primary:true })}
        </div>
        <label class="control-center-field">
          <span>Format</span>
          <select class="control-center-select" data-new-document-format>
            ${state.registry.documents.formats.map((item) => `<option value="${escapeHtml(item.id)}" ${item.id === format.id ? "selected" : ""}>${escapeHtml(item.label)}</option>`).join("")}
          </select>
        </label>
        <div class="control-center-tree">${state.registry.documents.tree.map(renderTreeNode).join("")}</div>
      </section>
      <section class="control-center-editor">
        <div class="control-center-editor__toolbar">
          <input class="control-center-editor__field" value="${escapeHtml(documentItem.title)}" data-document-title aria-label="Document title">
          <select class="control-center-select" data-document-format aria-label="Document format">
            ${state.registry.documents.formats.map((item) => `<option value="${escapeHtml(item.id)}" ${item.id === format.id ? "selected" : ""}>${escapeHtml(item.extension)}</option>`).join("")}
          </select>
        </div>
        <label class="control-center-field">
          <span>Path</span>
          <input class="control-center-editor__field" value="${escapeHtml(documentItem.path)}" data-document-path aria-label="Document path">
        </label>
        <p class="control-center-meta">${escapeHtml(documentItem.status)} · ${escapeHtml(format.label)}</p>
        <div class="control-center-metadata">${renderMetadataFields(documentItem)}</div>
        <textarea class="control-center-editor__textarea" data-document-body aria-label="Document body">${escapeHtml(documentItem.body)}</textarea>
        <div class="control-center-actions">
          ${actionMarkup("Save draft", { action:"save-document", primary:true })}
          ${actionMarkup("Submit", { action:"submit-document" })}
          ${actionMarkup("Publish", { action:"publish-document" })}
          ${actionMarkup("Move", { action:"move-document" })}
          ${actionMarkup("Delete", { action:"delete-document" })}
        </div>
      </section>
    </section>
    <section class="control-center-panel">
      <h2 class="control-center-panel__title">Publishing standards</h2>
      <div class="control-center-grid">
        ${state.registry.documents.standards.map((item) => `<article class="control-center-card"><p class="control-center-card__title">${escapeHtml(item.label)}</p><p class="control-center-card__copy">${escapeHtml(item.path)}</p></article>`).join("")}
      </div>
    </section>`;
}

function renderVerification() {
  const requests = getVisibleVerificationRequests();
  const filters = [
    { id:"submitted", label:"Requested" },
    { id:"approved", label:"Approved" },
    { id:"rejected", label:"Declined" },
    { id:"all", label:"All" }
  ];
  const notice = state.verificationLoadState === "error"
    ? "Verification data could not be loaded from Supabase. Check table access or request policy."
    : "No verification requests found in this view.";

  return `
    <section class="control-center-panel control-center-verification-console">
      <header class="control-center-verification-console__header">
        <div>
          <p class="control-center-panel__eyebrow">Identity governance</p>
          <h2 class="control-center-panel__title">Verification requests</h2>
          <p class="control-center-panel__copy">Review identity requests, approve public verification state, and preserve an auditable review queue.</p>
        </div>
        ${chipMarkup(state.verificationLoadState === "live" ? "Live Supabase" : "Supabase unavailable", state.verificationLoadState === "live" ? "connected" : "rejected")}
      </header>

      <section class="control-center-verification-console__tools" aria-label="Verification review tools">
        <label class="control-center-field control-center-verification-search">
          <span>Search</span>
          <input class="control-center-editor__field" value="${escapeHtml(state.verificationSearchQuery)}" placeholder="Search name, handle, profile ID, auth ID, note" data-verification-search>
        </label>
        <nav class="control-center-actions control-center-verification-filters" aria-label="Verification status filters">
          ${filters.map((filter) => `<button class="control-center-action" type="button" data-verification-filter="${escapeHtml(filter.id)}" aria-pressed="${filter.id === state.verificationStatusFilter ? "true" : "false"}"><span>${escapeHtml(filter.label)}</span><strong>${getVerificationStatusCount(filter.id)}</strong></button>`).join("")}
        </nav>
      </section>

      <div class="control-center-verification" data-verification-list>
        ${requests.length ? requests.map(renderVerificationRequest).join("") : `<div class="control-center-notice">${escapeHtml(notice)}</div>`}
      </div>
    </section>`;
}

function renderVerificationRequest(request) {
  const status = normalizeVerificationStatus(request.request_status || "submitted");
  const canReview = status === "submitted" || status === "under_review";
  return `
    <article class="control-center-request" data-request-id="${escapeHtml(request.id)}" data-status="${escapeHtml(status)}">
      ${verificationAvatarMarkup(request)}
      <div class="control-center-request__body">
        <header class="control-center-request__header">
          <div>
            <h3 class="control-center-card__title">${escapeHtml(request.display_name || "Unknown user")}</h3>
            <p class="control-center-meta">@${escapeHtml(request.username || "unknown")}</p>
          </div>
          ${chipMarkup(status, status)}
        </header>
        <dl class="control-center-request__meta">
          <div><dt>Type</dt><dd>${escapeHtml(formatVerificationType(request.verification_type))}</dd></div>
          <div><dt>Requested</dt><dd>${escapeHtml(formatTimestamp(request.created_at))}</dd></div>
          <div><dt>Reviewed</dt><dd>${escapeHtml(formatTimestamp(request.reviewed_at))}</dd></div>
        </dl>
        <p class="control-center-card__copy">${escapeHtml(request.request_note || "No note provided.")}</p>
        <div class="control-center-request__ids">
          <span>Profile ${escapeHtml(request.profile_id || "missing")}</span>
          <span>Auth ${escapeHtml(request.auth_user_id || "missing")}</span>
        </div>
      </div>
      <div class="control-center-actions" ${canReview ? "" : "hidden"}>
        ${actionMarkup("Approve", { action:"approve-verification", id:request.id, primary:true })}
        ${actionMarkup("Decline", { action:"decline-verification", id:request.id })}
      </div>
    </article>`;
}

function renderTokens() {
  const tokens = state.registry.tokens;
  return renderRegistryPanel("Token control", tokens.source, tokens.manifest, tokens.actions);
}

function renderIcons() {
  const icons = state.registry.icons;
  return renderRegistryPanel("Icon control", icons.source, icons.manifest, icons.actions);
}

function renderRegistryPanel(title, source, manifest, actions) {
  return `<section class="control-center-panel"><h2 class="control-center-panel__title">${escapeHtml(title)}</h2><div class="control-center-grid"><article class="control-center-card"><p class="control-center-card__title">Source</p><p class="control-center-card__value">${escapeHtml(source)}</p></article><article class="control-center-card"><p class="control-center-card__title">Manifest</p><p class="control-center-card__value">${escapeHtml(manifest)}</p></article></div><div class="control-center-grid">${actions.map((action) => `<article class="control-center-card"><p class="control-center-card__title">${escapeHtml(action)}</p><p class="control-center-card__copy">Governed by the registry source of truth.</p></article>`).join("")}</div></section>`;
}

function renderStaff() {
  const staff = state.registry.staff;
  return `<section class="control-center-panel"><h2 class="control-center-panel__title">Staff credentials</h2><p class="control-center-panel__copy">Credential pattern: ${escapeHtml(staff.credentialPattern)}</p><div class="control-center-grid">${staff.records.map((record) => `<article class="control-center-card"><div class="control-center-card__row"><p class="control-center-card__title">${escapeHtml(record.name)}</p>${chipMarkup(record.state, record.state)}</div><p class="control-center-card__value">${escapeHtml(record.id)}</p><p class="control-center-card__copy">${escapeHtml(record.role)} · ${escapeHtml(record.scope)}</p></article>`).join("")}</div><section class="control-center-card"><p class="control-center-card__title">Permission scopes</p><div class="control-center-actions">${staff.permissions.map((permission) => chipMarkup(permission, "permission")).join("")}</div></section></section>`;
}

function renderOffice() {
  const office = state.registry.office;
  return `<section class="control-center-panel"><h2 class="control-center-panel__title">Office layer</h2><p class="control-center-panel__copy">${escapeHtml(office.domain)}</p><div class="control-center-grid">${office.routes.map((route) => `<article class="control-center-card"><p class="control-center-card__title">${escapeHtml(route.label)}</p><p class="control-center-card__value">${escapeHtml(route.route)}</p><p class="control-center-card__copy">${escapeHtml(route.state)}</p></article>`).join("")}</div></section><section class="control-center-panel"><h2 class="control-center-panel__title">Office registry</h2><div class="control-center-list">${office.offices.map((item) => `<article class="control-center-list__item"><span>${escapeHtml(item.code)}</span><strong>${escapeHtml(item.name)}</strong><em>${escapeHtml(item.department)}</em></article>`).join("")}</div></section>`;
}

function collectActiveDocument(status) {
  const active = getActiveDocument();
  if (!active) return null;
  const title = document.querySelector("[data-document-title]");
  const body = document.querySelector("[data-document-body]");
  const pathField = document.querySelector("[data-document-path]");
  const formatField = document.querySelector("[data-document-format]");
  const metadata = {};
  document.querySelectorAll("[data-document-metadata]").forEach((field) => { metadata[field.dataset.documentMetadata] = normalizeString(field.value); });
  active.title = normalizeString(title?.value) || active.title;
  active.body = body?.value || "";
  active.path = normalizeString(pathField?.value) || active.path;
  active.format = normalizeString(formatField?.value) || active.format || "md";
  active.metadata = metadata;
  active.status = status || active.status;
  return active;
}

function buildDocumentPayload(documentItem) {
  const metadata = documentItem.metadata || {};
  const fields = state.registry.documents.metadataTemplate.fields;
  const frontmatter = fields.map((field) => `${field.id}: ${JSON.stringify(metadata[field.id] || documentItem[field.id] || "")}`).join("\n");
  return `---\n${frontmatter}\n---\n\n${documentItem.body || ""}`;
}

async function controlCenterApi(route, options = {}) {
  const response = await fetch(`/api/control-center/${route}`, {
    ...options,
    headers:{
      "Content-Type":"application/json",
      ...(options.headers || {})
    }
  });
  if (!response.ok) throw new Error(await response.text());
  return response.json();
}

async function writeActiveDocumentToBackend(documentItem) {
  const result = await controlCenterApi("document/write", {
    method:"POST",
    body:JSON.stringify(documentItem)
  });
  documentItem.path = result.path || documentItem.path;
  return true;
}

async function writeActiveDocumentToWorkspace(documentItem) {
  if (!state.workspaceHandle) return false;
  const format = getFormat(documentItem.format || "md");
  const cleanPath = normalizeString(documentItem.path).split("/").filter(Boolean);
  const fileName = `${slugify(documentItem.title)}.${format.extension}`;
  let directory = state.workspaceHandle;
  for (const segment of cleanPath.slice(0, -1)) {
    directory = await directory.getDirectoryHandle(segment, { create:true });
  }
  const handle = await directory.getFileHandle(fileName, { create:true });
  const writable = await handle.createWritable();
  await writable.write(buildDocumentPayload(documentItem));
  await writable.close();
  return true;
}

async function saveActiveDocument(status) {
  const active = collectActiveDocument(status);
  if (!active) return;
  await writeJsonStoreAsync(DOCUMENT_STORE_KEY, state.documents);
  try {
    await writeActiveDocumentToBackend(active);
  } catch (backendError) {
    try {
      await writeActiveDocumentToWorkspace(active);
    } catch (workspaceError) {
      console.warn("[control-center] Workspace write unavailable.", workspaceError || backendError);
    }
  }
  renderActivePanel();
}

async function createDocument() {
  const nextIndex = state.documents.length + 1;
  const format = normalizeString(document.querySelector("[data-new-document-format]")?.value) || "md";
  const documentItem = {
    id:`local-document-${Date.now()}`,
    title:`New document ${nextIndex}`,
    path:"Control Center/Drafts",
    status:"draft",
    format,
    metadata:{ classification:"Internal", owner:"Founder / CEO (Public: ARTAN)", status:"Draft", template_lock:state.registry.documents.metadataTemplate.template_lock },
    body:""
  };
  state.documents = [...state.documents, documentItem];
  state.activeDocumentId = documentItem.id;
  await writeJsonStoreAsync(DOCUMENT_STORE_KEY, state.documents);
  renderActivePanel();
}

async function deleteActiveDocument() {
  const active = getActiveDocument();
  if (!active) return;
  state.documents = state.documents.filter((item) => item.id !== active.id);
  state.activeDocumentId = state.documents[0]?.id || "";
  await writeJsonStoreAsync(DOCUMENT_STORE_KEY, state.documents);
  renderActivePanel();
}

async function moveActiveDocument() {
  const active = collectActiveDocument("moved");
  if (!active) return;
  active.path = normalizeString(active.path) || "Control Center/Moved";
  await writeJsonStoreAsync(DOCUMENT_STORE_KEY, state.documents);
  renderActivePanel();
}

async function chooseWorkspace() {
  if (!window.showDirectoryPicker) {
    state.workspaceLabel = "Browser store";
    renderActivePanel();
    return;
  }
  state.workspaceHandle = await window.showDirectoryPicker({ mode:"readwrite" });
  state.workspaceLabel = state.workspaceHandle.name || "Local folder";
  renderActivePanel();
}

async function loadVerificationRequests({ render = false } = {}) {
  state.verificationLoadState = "loading";

  try {
    const result = await controlCenterApi("verification/queue");
    state.verificationRequests = Array.isArray(result.requests) ? result.requests : [];
    state.verificationLoadState = "live";
  } catch (error) {
    console.warn("[control-center] Verification queue backend load failed.", error);
    state.verificationRequests = [];
    state.verificationLoadState = "error";
  }

  if (render && state.activePanel === "verification") renderActivePanel();
}

async function updateVerification(id, status) {
  const request = state.verificationRequests.find((item) => String(item.id) === String(id));
  if (!request) return;
  const normalizedStatus = status === "approved" ? "approved" : "rejected";

  try {
    await controlCenterApi("verification/review", {
      method:"POST",
      body:JSON.stringify({ id, status:normalizedStatus })
    });
    await loadVerificationRequests();
  } catch (error) {
    console.warn("[control-center] Verification backend update failed.", error);
    state.verificationLoadState = "error";
  }

  renderActivePanel();
}

function startVerificationRefresh() {
  if (state.verificationRefreshTimer) window.clearInterval(state.verificationRefreshTimer);
  state.verificationRefreshTimer = window.setInterval(() => {
    if (state.activePanel === "verification") loadVerificationRequests({ render:true });
  }, 4000);
}

function bindEvents() {
  document.addEventListener("click", async (event) => {
    const panelButton = event.target.closest("[data-panel]");
    if (panelButton) {
      state.activePanel = panelButton.dataset.panel;
      history.replaceState(null, "", `#${state.activePanel}`);
      if (state.activePanel === "verification") await loadVerificationRequests();
      renderShell();
      return;
    }
    const verificationFilter = event.target.closest("[data-verification-filter]");
    if (verificationFilter) {
      state.verificationStatusFilter = normalizeVerificationStatus(verificationFilter.dataset.verificationFilter || "submitted");
      renderActivePanel();
      return;
    }
    const documentButton = event.target.closest("[data-document-id]");
    if (documentButton) {
      state.activeDocumentId = documentButton.dataset.documentId;
      renderActivePanel();
      return;
    }
    const action = event.target.closest("[data-action]");
    if (!action) return;
    const actionName = action.dataset.action;
    if (actionName === "choose-workspace") await chooseWorkspace();
    if (actionName === "save-document") await saveActiveDocument("draft");
    if (actionName === "submit-document") await saveActiveDocument("submitted");
    if (actionName === "publish-document") await saveActiveDocument("published");
    if (actionName === "create-document") await createDocument();
    if (actionName === "delete-document") await deleteActiveDocument();
    if (actionName === "move-document") await moveActiveDocument();
    if (actionName === "approve-verification") await updateVerification(action.dataset.id, "approved");
    if (actionName === "decline-verification") await updateVerification(action.dataset.id, "rejected");
  });
  document.addEventListener("input", (event) => {
    const search = event.target.closest("[data-verification-search]");
    if (!search) return;
    state.verificationSearchQuery = normalizeString(search.value);
    renderActivePanel();
    const nextSearch = document.querySelector("[data-verification-search]");
    if (nextSearch) {
      nextSearch.focus();
      nextSearch.setSelectionRange(nextSearch.value.length, nextSearch.value.length);
    }
  });
}

async function init() {
  state.registry = await loadJson(REGISTRY_URL);
  const requestedPanel = normalizeString(location.hash).replace(/^#/, "");
  if (state.registry.navigation.some((item) => item.id === requestedPanel)) state.activePanel = requestedPanel;
  state.documents = await readJsonStoreAsync(DOCUMENT_STORE_KEY, state.registry.documents.documents);
  state.activeDocumentId = state.documents[0]?.id || "";
  await loadVerificationRequests();
  startVerificationRefresh();
  renderShell();
  bindEvents();
}

init().catch((error) => {
  const root = getRoot();
  if (root) root.innerHTML = `<main class="control-center-shell"><section class="control-center-panel"><h1 class="control-center-panel__title">Control Center failed to load</h1><p class="control-center-panel__copy">${escapeHtml(error.message)}</p></section></main>`;
  console.error("[control-center] initialization failed", error);
});
