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
3. Choose Prepare reply. The matching template creates an editable email draft.
4. Read the recipient, subject and message. Amend the draft for the specific case.
5. Copy it or open it in your email application. Send only after human review.
6. Save the decision separately. This never sends an email or approves a contract.

Preparing a reply does not record delivery. The email application is responsible
for sending and its sent-mail history. An open email draft is not a sent email.
Per-application draft edits remain in the current view; save reusable wording in
Communication instead. Never place private review notes in reusable templates.

## Knowledge Base Architecture

The default template definitions are owned by
`assets/data/control-center/communications.json`. A saved brand document overrides
the corresponding default; invalid records cannot execute HTML or code. The
latest valid, accessible record is used. Supported fields are `{{name}}`,
`{{artist}}`, `{{reference}}`, `{{tier}}` and `{{reply_email}}`.

The four initial scenarios are Under review, Propose partnership, Decline and
Close. Choose New template to add a named custom response. Custom templates are
stored as private documents and can be selected in each submission's Reply
template field. Choosing a decision suggests its matching template; preparing
again asks before replacing an existing draft. A proposal is provisional, never an agreement, tier activation or release
approval. Future communication channels can reuse the template resolver without
duplicating these definitions. This foundation does not implement automated email
delivery, a shared sent-mail ledger or a full ticketing service.
