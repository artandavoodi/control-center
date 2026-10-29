# Artist Communication

## Ownership

Operations > Communication holds reusable reply templates. Assign each saved
template to the appropriate Communication department or office. The existing
private document permissions and brand scope apply; no new access is granted.
Documents & tags also lists these records under `reply-macro` and
`artist-communication`.

## Reply workflow

1. Open a public submission and review the applicant's details and listening links.
2. Choose a decision and, for a proposed partnership, the proposed tier.
3. Choose Reply. The matching template creates an editable email draft.
4. Read the recipient, subject and message. Amend the draft for the specific case.
5. Connect iCloud and confirm Send reply, or use the email-app fallback. Send a decision only after human review.
6. Save the decision separately. This never sends an email or approves a contract.

Preparing a reply does not record delivery. The email application is responsible
for sending and its sent-mail history. An open email draft is not a sent email.
Per-application draft edits remain in the current view; save reusable wording in
Communication instead. Never place private review notes in reusable templates.

## Review views and delivery state

Under review includes new submissions and active reviews. Reviewed contains saved
partnership proposals, not approved agreements. Declined and Closed are separate
views. History reads the existing brand-scoped decision audit and requires its
read permission. Palette dots always have text labels; a green proposal is not
evidence that an email was sent. In-progress edits survive switching these tabs.

Reply opens a modal with the recipient, template, subject and message. The private
Mac service must be enabled with --mail for manual direct sending. Opening a
mail-app draft cannot control its From account or prove delivery, and must never
create a Responded status.

## iCloud sending

Artist replies use collaborate@artanrecords.com. Google sender setup is not used.
The existing submission notification remains separately routed to that same
mailbox; the general contact form uses contact@artanrecords.com.

The trusted Mac service owns SMTP sending because the existing Supabase function
host does not support Apple's SMTP port 587. The Mac must be online and connected
through the existing private device connection. No public SMTP relay is exposed.
The initial service is owner-only and disabled unless server.mjs starts with
--mail. Existing update and preview service flags are unchanged.

Run tools/configure-icloud-mail.mjs with the authenticating full iCloud mailbox
and collaborate@artanrecords.com as its two non-secret arguments. The owner enters
an Apple app-specific password into macOS's hidden Keychain prompt. Never use or
share the primary Apple Account password. Settings are private to the Mac;
credentials are read from Keychain only and are never sent to browser code.

Connect iCloud verifies TLS and SMTP authentication without sending. It does not
prove sender-address acceptance. Send reply requires explicit confirmation and
loads the recipient from the private application with the authenticated owner's
session. It cannot send to a recipient supplied by browser code. The shared renderer
adds escaped branded HTML and the canonical wordmark as an inline image; arbitrary
HTML, user attachments and external-file loading are not supported. A safety limit permits 50 attempts
per UTC day; Apple account limits may be lower.

Private receipt files record actor, application, sender, timestamp, message hash,
request reference and provider message ID, not message bodies. Reusing a request
reference never submits the same message twice. Pending or uncertain results are
locked against automatic retry. Accepted by iCloud means SMTP acceptance, not
confirmed delivery. Receipt files currently remain on the trusted Mac, not in the
shared database audit. Losing the Mac's private receipt store removes that retry
history; preserve it when migrating the service.

Live sending is not activated until the owner supplies the iCloud authentication
mailbox and app-specific password, authentication is verified, and an authorized
test message confirms the sender. The email-app fallback remains available but
cannot enforce the app's From account or confirm sending.

References: https://support.apple.com/102525 and https://nodemailer.com/smtp

## Knowledge Base Architecture

The default template definitions are owned by
`assets/data/control-center/communications.json`. A saved brand document overrides
the corresponding default; invalid records cannot execute HTML or code. The
latest valid, accessible record is used. Supported fields are `{{name}}`,
`{{artist}}`, `{{reference}}`, `{{tier}}` and `{{reply_email}}`.

The scenarios are Application received, Under review, Propose partnership, Decline and
Close. Choose New template to add a named custom response. Custom templates are
stored as private documents and can be selected in each submission's Reply
template field. Choosing a decision suggests its matching template; preparing
again asks before replacing an existing draft. A proposal is provisional, never an agreement, tier activation or release
approval. Future communication channels can reuse the template resolver without
duplicating these definitions. This is not a full ticketing or inbound-mail service.

## Branded acknowledgment preview

Operations > Communication includes an editable `Application received` template. Its text uses the agreed 14-working-day review target, not a guarantee. Template saves use the existing private document permissions and `macro-received` tag. The preview uses example details and does not send mail.

`assets/data/control-center/email-branding.json` owns the logo, company signature and public contact links. `email-template.js` renders the same escaped HTML for the preview and iCloud mail, alongside a plain-text alternative. Recipient data is never treated as HTML. `tools/build-email-logo.mjs` exports the canonical black SVG to a compatible PNG; it does not redesign the logo. Email embeds that PNG by content ID instead of relying on a remote image download.

## Automatic acknowledgments

The shared database creates one queue row transactionally when a new application is inserted; historical applications are not backfilled. Operations > Communication shows the setting, recent worker contact and queued, accepted and held counts. An active owner can pause or enable sending; that setting change is audited. Existing incoming application notifications remain unchanged.

The dedicated `live.artan.acknowledgments` Mac login agent polls the signed backend every 15 seconds independently of Control Center. A dedicated Keychain credential authenticates only acknowledgment queue operations; the Mac never receives a database service-role key. The backend accepts no arbitrary recipient or message body from the worker: it resolves the application and saved `macro-received` template itself. Template bodies are validated and escaped before sending. The shared backend's service key stays inside the backend.

Claims are leased for five minutes. A durable `sending` transition must succeed before SMTP starts; expired sending attempts become uncertain and are never automatically resent. SMTP acceptance is stored in the shared queue, with a minimal private receipt on the Mac. Only receipt persistence may be retried after acceptance, not SMTP. Held results require review. A daily safety ceiling permits 50 attempted acknowledgments per UTC day; reaching it leaves remaining applications queued. This is not an inbox-delivery guarantee.

The Mac must be online and its user signed in; sleeping or offline pauses delivery until it returns. No new public port is opened. `tools/configure-acknowledgment-worker.mjs` provisions the restricted connection; `tools/install-acknowledgment-worker.mjs` registers its login agent. Neither exposes credentials to browser assets or source control. Never put an owner session in public code or call the manual mail endpoint from the public submission form.

