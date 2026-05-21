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
  requests:[]
};

/* =============================================================================
   05) HELPERS
============================================================================= */

function normalizeString(value = '') {
  return String(value || '').trim();
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

/* =============================================================================
   06) TEMPLATE
============================================================================= */

function createVerificationCard(request = {}) {
  const article = document.createElement('article');

  article.className = 'cc-verification-card';
  article.dataset.status = normalizeString(request.request_status || 'submitted');

  article.innerHTML = `
    <div class="cc-verification-card__meta">
      <div class="cc-verification-card__status">
        <span class="cc-verification-card__status-dot"></span>
        ${normalizeString(request.request_status || 'submitted')}
      </div>

      <div class="cc-verification-card__timestamp">
        ${formatTimestamp(request.created_at)}
      </div>
    </div>

    <div class="cc-verification-card__identity">
      <h2 class="cc-verification-card__name">
        ${normalizeString(request.display_name || 'Unknown User')}
      </h2>

      <p class="cc-verification-card__username">
        @${normalizeString(request.username || 'unknown')}
      </p>
    </div>

    <p class="cc-verification-card__note">
      ${normalizeString(request.request_note || 'No note provided.')}
    </p>

    <div class="cc-verification-card__actions">
      <button
        class="cc-verification-card__button cc-verification-card__button--approve"
        type="button"
      >
        Approve
      </button>

      <button
        class="cc-verification-card__button cc-verification-card__button--reject"
        type="button"
      >
        Reject
      </button>
    </div>
  `;

  return article;
}

/* =============================================================================
   07) RENDER
============================================================================= */

function renderEmptyState() {
  if (!QUEUE_ROOT) return;

  QUEUE_ROOT.innerHTML = `
    <div class="cc-verification-empty">
      No verification requests found.
    </div>
  `;
}

function renderQueue() {
  if (!QUEUE_ROOT) return;

  QUEUE_ROOT.innerHTML = '';

  if (!STORE.requests.length) {
    renderEmptyState();
    return;
  }

  STORE.requests.forEach((request) => {
    QUEUE_ROOT.appendChild(createVerificationCard(request));
  });
}

/* =============================================================================
   08) DATA LOADING
============================================================================= */

async function loadVerificationQueue() {
  if (!supabase) {
    renderEmptyState();
    return;
  }

  const { data, error } = await supabase
    .from('profile_verification_requests')
    .select(`
      id,
      request_status,
      verification_type,
      request_note,
      created_at,
      profiles (
        username,
        display_name
      )
    `)
    .order('created_at', { ascending:false });

  if (error) {
    console.error('[verification-queue] load failed', error);
    renderEmptyState();
    return;
  }

  STORE.requests = Array.isArray(data)
    ? data.map((item) => ({
        ...item,
        username:item.profiles?.username || '',
        display_name:item.profiles?.display_name || ''
      }))
    : [];

  renderQueue();
}

/* =============================================================================
   09) INITIALIZATION
============================================================================= */

export async function initVerificationQueue(root = document) {
  QUEUE_ROOT = root.querySelector('[data-verification-queue]');

  if (!QUEUE_ROOT) {
    console.error('[verification-queue] queue root missing');
    return;
  }

  await loadVerificationQueue();
}