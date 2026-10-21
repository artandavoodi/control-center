# Neuroartan Control Center

## Development Registration

Every major or minor development change must be committed in its owning repository and registered through the central [development-history policy](docs/development-registration.md). The central repository registry owns discovery; commit SHA owns deduplication. Private repository ingestion is not yet connected; do not expose private data or copy source assets to register changes.

## Management and Design Sources

Documents have explicit internal/confidential/sensitive classifications and searchable tags. Brand and reporting-branch checks are enforced in the database; confidentiality is a separate permission, not a cosmetic label. Vacancy drafts never publish automatically. Public careers hosting, applicant intake and browser-based GitHub source publishing are not active; see [the publication boundary](docs/deployment/careers.md).

The shared close control is a checksum-verified snapshot of the website owner files, not a local imitation. Tokens and icons are indexed from their canonical registries. To register a new authored SVG, edit its source and run `node scripts/register-icons.mjs <registry-relative-path.svg>`; this targeted path does not prune unrelated assets. The build rejects mismatched source/mirror artwork and versions design assets to prevent stale placeholders. The registry UI is read-only and does not claim to write to GitHub.

## Staff console

Permanent address: `https://control.artan.live/`. The public client is built with
`npm run build`; only the `_site` allowlist is deployed. Repository contents,
private configuration, legacy document controls and governance registries are
not deployment inputs. Run `npm run dev:preview` for the local staff client.

Identity is verified against the existing shared Store/Studio account project.
An ordinary account grants no staff access. Server-enforced scopes separately
control artist queue visibility, username review, tier review, audit visibility
and staff management. Department and office labels are not access grants.
The initial owner must be verified and provisioned by an explicitly authorized
database operation; the client cannot create an owner or promote itself.

The Store repository owns the backend migrations and isolation tests. Username
and tier decisions are recorded atomically with their audit entry. Operational
tier approval is not contract acceptance, artist financial entitlement or payout
permission. The Neuroartan verification connector, Store order/support controls,
staff invitations and cross-project federation are not activated by this console.

Do not use the former service-role local API. It has been removed from the preview
server. A previously committed legacy credential must be revoked in Supabase;
removing its file from current Git tracking does not remove the historical exposure.

Sovereign orchestration, registry, runtime, propagation, and ecosystem authority for the Neuroartan platform.

## Core Responsibilities

- Runtime orchestration
- Cross-platform propagation
- Token authority
- SVG authority
- Registry synchronization
- Studio orchestration
- Swift runtime exports
- Website runtime exports
- Ecosystem SDK generation
- Diagnostics and governance

## Canonical Authorities

### Tokens
registry/tokens

### Icons
registry/icons/source

### Runtime
dsc/runtime

### Studio
studio

### Propagation
registry/propagation

## Platform Structure

## Global Design References

Component references use `component:field/password`, `component:button/close` and the other IDs in `assets/data/control-center/components.json`. Each definition names the existing implementation owner and binds related canonical token IDs; previews never save credentials, preferences or staff records. The toggle stylesheet is an exact, checksummed snapshot of the Neuroartan primitive, not a local reinterpretation. Refresh shared snapshots with `node scripts/sync-design.mjs --sync` after an intentional upstream change.

Organization charts use native nested lists with connected top-down branches. Position templates remain separate from actual staff reporting assignments. Private photos are requested only for the current user; other staff photographs are not exposed by the directory. Branch controls support keyboard activation, and each chart supports horizontal keyboard/touch scrolling.

Each reporting chart has bounded layout zoom, a 100% reset and a compact semantic view at 70% and below. Names, assigned roles, direct-report controls and the current-account marker remain visible. Every card has a portrait or registered profile-icon placeholder at 85% and above, including unfilled positions. There is no Find me control, and visual identity never implies an appointment or expands photo-access permissions.

Charts with more than six nodes default to compact layout: sibling branches stack vertically with shorter continuous connectors. The Compact layout control switches back to the wider diagram and resets zoom to 100% so text stays readable; no staff or reporting data is changed by layout selection.

The shared workspace renderer shows the assigned directory name above the position, with only a green dot before the current person's position. Role-plan identity can bind only to verified CEO ownership or a unique department/office manager assignment on that exact unit. Executive titles without a durable assignment remain unassigned; names are never used to infer appointments. Other staff use a profile silhouette until a separately authorized directory-photo access policy exists; private profile uploads are not exposed through this display rule.

### Position Planning

`scripts/build-roles.mjs` imports only public leadership role descriptions from the Neuroartan website into a sanitized snapshot; private personnel files are never deployed. Organization distinguishes position templates from actual staff appointments. Cross-brand adaptations, department/office heads and reporting links are proposed plans, not approved appointments or permissions. Authorized users may prepare a vacancy form from a template, but must review and save it explicitly; publication remains a separate audited action.

Design systems are shared across all brands; a brand workspace never owns a separate copy of the registry. Colors, Typography and Motion & interaction are filtered views of the same canonical tokens. Permissions for private brand records do not change when viewing global design sources.

Copy references from the registry: `icon:core/actions/create/plus` resolves through `registry/icons/manifests/icon-manifest.json` to its `registry/icons/source/` SVG; `token:--color-primary1` resolves through `registry/tokens/manifests/runtime-tokens.json`. `motion:close-control` resolves to the shared Neuroartan close primitive listed in the generated index. Agents must resolve these IDs before editing and never edit generated mirrors. IDs are path/name-based and must not be renamed without an explicit migration. Search tags are derived from canonical names; they do not grant access or represent approval. A vector-available status means artwork exists, not that it has undergone design approval.

Token previews use the current theme and canonical CSS variables. Reduced motion is respected. Clipboard failures show a selectable reference instead of claiming a successful copy.

- Website → visual/runtime source layer
- Control Center → orchestration/registry authority
- ICOS Runtime → native execution/runtime layer
