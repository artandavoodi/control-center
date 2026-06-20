/* =============================================================================
   01) MODULE IMPORTS
============================================================================= */

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

/* =============================================================================
   02) SUPABASE CONFIG
============================================================================= */

const SUPABASE_URL =
  window.__NEUROARTAN_SUPABASE_URL__ ||
  localStorage.getItem('neuroartan.supabase.url') ||
  '';

const SUPABASE_ANON_KEY =
  window.__NEUROARTAN_SUPABASE_ANON_KEY__ ||
  localStorage.getItem('neuroartan.supabase.anon') ||
  '';

const supabase =
  SUPABASE_URL && SUPABASE_ANON_KEY
    ? createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
    : null;

/* =============================================================================
   03) DOM REFERENCES
============================================================================= */

let QUEUE_ROOT = null;

/* =============================================================================
   04) STATE
============================================================================= */

const STORE = {
  requests:[],
  statusFilter:'submitted',
  searchQuery:''
};

const STATUS_FILTERS = Object.freeze([
  { id:'submitted', label:'Requested' },
  { id:'approved', label:'Approved' },
  { id:'rejected', label:'Declined' },
  { id:'all', label:'All' }
]);

/* =============================================================================
   05) HELPERS
============================================================================= */

function normalizeString(value = '') {
  return String(value || '').trim();
}

function normalizeStatus(value = '') {
  const status = normalizeString(value || 'submitted').toLowerCase();
  return status || 'submitted';
}

function escapeHtml(value = '') {
  return normalizeString(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function formatTimestamp(value = '') {
  if (!value) return 'Unknown';

  try {
    return new Intl.DateTimeFormat('en-US', {
      dateStyle:'medium',
      timeStyle:'short'
    }).format(new Date(value));
  } catch {
    return value;
  }
}

function formatVerificationType(value = '') {
  return normalizeString(value || 'profile_identity')
    .replace(/_/g, ' ')
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function getProfileAvatar(request = {}) {
  return normalizeString(
    request.public_avatar_url ||
    request.avatar_url ||
    request.photo_url ||
    request.profiles?.public_avatar_url ||
    request.profiles?.avatar_url ||
    request.profiles?.photo_url ||
    ''
  );
}

function getProfileInitials(request = {}) {
  const source = normalizeString(request.display_name || request.username || 'User');
  return source
    .split(/\s+/)
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

function getVisibleRequests() {
  const query = STORE.searchQuery.toLowerCase();

  return STORE.requests.filter((request) => {
    const status = normalizeStatus(request.request_status);
    const statusMatches = STORE.statusFilter === 'all' || status === STORE.statusFilter;

    if (!statusMatches) return false;
    if (!query) return true;

    const haystack = [
      request.id,
      request.profile_id,
      request.auth_user_id,
      request.username,
      request.display_name,
      request.email,
      request.request_note,
      request.verification_type,
      request.request_status
    ].map(normalizeString).join(' ').toLowerCase();

    return haystack.includes(query);
  });
}

function getStatusCount(status = '') {
  if (status === 'all') return STORE.requests.length;
  return STORE.requests.filter((request) => normalizeStatus(request.request_status) === status).length;
}

/* =============================================================================
   06) TEMPLATE
============================================================================= */

function createFilterButton(filter = {}) {
  const isActive = STORE.statusFilter === filter.id;
  const count = getStatusCount(filter.id);

  return `
    <button
      class="cc-verification-filter"
      type="button"
      data-verification-filter="${escapeHtml(filter.id)}"
      aria-pressed="${isActive ? 'true' : 'false'}"
    >
      <span>${escapeHtml(filter.label)}</span>
      <strong>${count}</strong>
    </button>
  `;
}

function createAvatar(request = {}) {
  const avatar = getProfileAvatar(request);

  if (avatar) {
    return `
      <figure class="cc-verification-item__avatar">
        <img src="${escapeHtml(avatar)}" alt="" loading="lazy">
      </figure>
    `;
  }

  return `
    <figure class="cc-verification-item__avatar" data-empty="true">
      <span>${escapeHtml(getProfileInitials(request))}</span>
    </figure>
  `;
}

function createVerificationItem(request = {}) {
  const status = normalizeStatus(request.request_status);
  const canReview = ['submitted', 'under_review'].includes(status);
  const displayName = normalizeString(request.display_name || 'Unknown user');
  const username = normalizeString(request.username || 'unknown');
  const note = normalizeString(request.request_note || 'No request note provided.');

  return `
    <article
      class="cc-verification-item"
      data-status="${escapeHtml(status)}"
      data-request-id="${escapeHtml(request.id)}"
      data-profile-id="${escapeHtml(request.profile_id)}"
      data-auth-user-id="${escapeHtml(request.auth_user_id)}"
    >
      ${createAvatar(request)}

      <div class="cc-verification-item__main">
        <header class="cc-verification-item__header">
          <div class="cc-verification-item__identity">
            <h2>${escapeHtml(displayName)}</h2>
            <p>@${escapeHtml(username)}</p>
          </div>

          <span class="cc-verification-status" data-status="${escapeHtml(status)}">
            ${escapeHtml(status.replace(/_/g, ' '))}
          </span>
        </header>

        <dl class="cc-verification-item__meta">
          <div>
            <dt>Type</dt>
            <dd>${escapeHtml(formatVerificationType(request.verification_type))}</dd>
          </div>
          <div>
            <dt>Requested</dt>
            <dd>${escapeHtml(formatTimestamp(request.created_at))}</dd>
          </div>
          <div>
            <dt>Reviewed</dt>
            <dd>${escapeHtml(formatTimestamp(request.reviewed_at))}</dd>
          </div>
        </dl>

        <p class="cc-verification-item__note">${escapeHtml(note)}</p>

        <div class="cc-verification-item__ids">
          <span>Profile ${escapeHtml(request.profile_id || 'missing')}</span>
          <span>Auth ${escapeHtml(request.auth_user_id || 'missing')}</span>
        </div>
      </div>

      <div class="cc-verification-item__actions" ${canReview ? '' : 'hidden'}>
        <button
          class="cc-verification-action cc-verification-action--approve"
          type="button"
          data-verification-action="approve"
          data-verification-request-id="${escapeHtml(request.id)}"
        >
          Approve
        </button>

        <button
          class="cc-verification-action cc-verification-action--reject"
          type="button"
          data-verification-action="reject"
          data-verification-request-id="${escapeHtml(request.id)}"
        >
          Decline
        </button>
      </div>
    </article>
  `;
}

function createDashboardShell() {
  const visibleRequests = getVisibleRequests();

  return `
    <section class="cc-verification-console" aria-label="Verification review console">
      <header class="cc-verification-console__header">
        <div>
          <p class="cc-verification-console__eyebrow">Identity governance</p>
          <h1>Verification requests</h1>
          <p>Review identity requests, approve public verification state, and preserve an auditable review queue.</p>
        </div>

        <div class="cc-verification-console__status" data-state="${supabase ? 'connected' : 'offline'}">
          ${supabase ? 'Live Supabase' : 'Credentials required'}
        </div>
      </header>

      <section class="cc-verification-console__tools" aria-label="Verification filters">
        <div class="cc-verification-search">
          <label class="sr-only" for="cc-verification-search-input">Search verification requests</label>
          <input
            id="cc-verification-search-input"
            type="search"
            value="${escapeHtml(STORE.searchQuery)}"
            placeholder="Search name, handle, profile ID, auth ID, note"
            data-verification-search
          >
        </div>

        <nav class="cc-verification-filters" aria-label="Verification status filters">
          ${STATUS_FILTERS.map(createFilterButton).join('')}
        </nav>
      </section>

      <section class="cc-verification-list" aria-live="polite">
        ${visibleRequests.length
          ? visibleRequests.map(createVerificationItem).join('')
          : createEmptyState()}
      </section>
    </section>
  `;
}

function createEmptyState() {
  return `
    <div class="cc-verification-empty">
      <strong>No verification requests in this view.</strong>
      <span>Change the filter or search term to review another queue.</span>
    </div>
  `;
}

/* =============================================================================
   07) RENDER
============================================================================= */

function renderQueue() {
  if (!QUEUE_ROOT) return;
  QUEUE_ROOT.innerHTML = createDashboardShell();
}

function renderUnavailableState() {
  if (!QUEUE_ROOT) return;

  QUEUE_ROOT.innerHTML = `
    <section class="cc-verification-console" aria-label="Verification review console">
      <div class="cc-verification-empty">
        <strong>Supabase credentials are not connected.</strong>
        <span>Connect the Control Center Supabase URL and anon key to load live verification requests.</span>
      </div>
    </section>
  `;
}

/* =============================================================================
   08) REVIEW ACTIONS
============================================================================= */

function setQueueBusy(isBusy = false) {
  if (!QUEUE_ROOT) return;
  QUEUE_ROOT.dataset.busy = isBusy ? 'true' : 'false';
  QUEUE_ROOT.querySelectorAll('[data-verification-action], [data-verification-filter], [data-verification-search]').forEach((control) => {
    control.disabled = Boolean(isBusy);
  });
}

function findRequestById(requestId = '') {
  const normalizedId = normalizeString(requestId);
  return STORE.requests.find((request) => normalizeString(request.id) === normalizedId) || null;
}

async function updateVerificationRequest(requestId = '', patch = {}) {
  const { error } = await supabase
    .from('profile_verification_requests')
    .update({
      ...patch,
      reviewed_at:new Date().toISOString(),
      updated_at:new Date().toISOString()
    })
    .eq('id', requestId);

  if (error) throw error;
}

async function updateProfileVerification(request = {}, approved = false) {
  const profileId = normalizeString(request.profile_id);

  if (!profileId) {
    throw new Error('Verification request is missing profile_id.');
  }

  const patch = approved
    ? {
        verification_status:'verified',
        public_verification_status:'verified',
        profile_verified:true,
        verified_at:new Date().toISOString(),
        profile_verified_at:new Date().toISOString(),
        updated_at:new Date().toISOString()
      }
    : {
        verification_status:'rejected',
        public_verification_status:'unverified',
        profile_verified:false,
        verified_at:null,
        profile_verified_at:null,
        updated_at:new Date().toISOString()
      };

  const { error } = await supabase
    .from('profiles')
    .update(patch)
    .eq('id', profileId);

  if (error) throw error;
}

async function reviewVerificationRequest(requestId = '', action = '') {
  if (!supabase) return;

  const request = findRequestById(requestId);
  if (!request) return;

  const approved = action === 'approve';

  try {
    setQueueBusy(true);

    await updateVerificationRequest(requestId, {
      request_status:approved ? 'approved' : 'rejected'
    });

    await updateProfileVerification(request, approved);
    await loadVerificationQueue();
  } catch (error) {
    console.error('[verification-queue] review failed', error);
  } finally {
    setQueueBusy(false);
  }
}

/* =============================================================================
   09) EVENTS
============================================================================= */

function bindVerificationQueueActions() {
  if (!QUEUE_ROOT || QUEUE_ROOT.dataset.actionsBound === 'true') return;

  QUEUE_ROOT.dataset.actionsBound = 'true';

  QUEUE_ROOT.addEventListener('click', (event) => {
    const actionButton = event.target instanceof Element
      ? event.target.closest('[data-verification-action]')
      : null;

    if (actionButton instanceof HTMLButtonElement) {
      event.preventDefault();

      const action = normalizeString(actionButton.dataset.verificationAction);
      const requestId = normalizeString(actionButton.dataset.verificationRequestId);

      if (!requestId || !['approve', 'reject'].includes(action)) return;

      void reviewVerificationRequest(requestId, action);
      return;
    }

    const filterButton = event.target instanceof Element
      ? event.target.closest('[data-verification-filter]')
      : null;

    if (filterButton instanceof HTMLButtonElement) {
      event.preventDefault();
      STORE.statusFilter = normalizeStatus(filterButton.dataset.verificationFilter || 'submitted');
      renderQueue();
    }
  });

  QUEUE_ROOT.addEventListener('input', (event) => {
    const field = event.target instanceof Element
      ? event.target.closest('[data-verification-search]')
      : null;

    if (!(field instanceof HTMLInputElement)) return;
    STORE.searchQuery = normalizeString(field.value);
    renderQueue();
    const nextField = QUEUE_ROOT.querySelector('[data-verification-search]');
    if (nextField instanceof HTMLInputElement) {
      nextField.focus();
      nextField.setSelectionRange(nextField.value.length, nextField.value.length);
    }
  });
}

/* =============================================================================
   10) DATA LOADING
============================================================================= */

async function loadVerificationQueue() {
  if (!supabase) {
    renderUnavailableState();
    return;
  }

  const { data, error } = await supabase
    .from('profile_verification_requests')
    .select(`
      id,
      profile_id,
      auth_user_id,
      request_status,
      verification_type,
      request_note,
      created_at,
      reviewed_at,
      updated_at,
      profiles (
        username,
        display_name,
        email,
        avatar_url,
        public_avatar_url,
        photo_url,
        verification_status,
        public_verification_status,
        profile_verified,
        verified_at,
        profile_verified_at
      )
    `)
    .order('created_at', { ascending:false });

  if (error) {
    console.error('[verification-queue] load failed', error);
    renderUnavailableState();
    return;
  }

  STORE.requests = Array.isArray(data)
    ? data.map((item) => ({
        ...item,
        username:item.profiles?.username || '',
        display_name:item.profiles?.display_name || '',
        email:item.profiles?.email || '',
        avatar_url:item.profiles?.avatar_url || '',
        public_avatar_url:item.profiles?.public_avatar_url || '',
        photo_url:item.profiles?.photo_url || ''
      }))
    : [];

  renderQueue();
}

/* =============================================================================
   11) INITIALIZATION
============================================================================= */

export async function initVerificationQueue(root = document) {
  QUEUE_ROOT = root.querySelector('[data-verification-queue]');

  if (!QUEUE_ROOT) {
    console.error('[verification-queue] queue root missing');
    return;
  }

  bindVerificationQueueActions();
  await loadVerificationQueue();
}