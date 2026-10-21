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

- Website → visual/runtime source layer
- Control Center → orchestration/registry authority
- ICOS Runtime → native execution/runtime layer
