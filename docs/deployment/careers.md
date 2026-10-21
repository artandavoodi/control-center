# Careers Publication Boundary

Control Center owns private vacancy drafts in the shared account database. `control_center_save_vacancy` never publishes. `control_center_publish_vacancy` separately requires `jobs.publish`, verifies the assigned brand/branch, validates a complete description, location and HTTPS application destination, and records the decision.

The public `control_center_public_vacancies` view exposes only explicitly published vacancy content. It excludes staff identifiers and internal tags. No real vacancy was published during implementation or testing.

## Pending Public Connections

- `jobs.artanrecords.com` is a proposed careers address, not an activated deployment. The authoritative domain nameservers were verified as Porkbun. No speculative DNS target has been created.
- The existing Neuroartan Jobs repository currently contains empty page placeholders; it is not a working application intake or vacancy-publishing connector.
- Before opening hiring, connect a public careers renderer to the published view, configure its real hosting destination and TLS, and provide a reviewed candidate privacy notice and private application intake.
- CVs, applicant screening, employment decisions, offers and contracts are not implemented by the vacancy-draft foundation. Never represent those workflows as operational or use document tags as a substitute for applicant-data permissions.
- No connector may expose private drafts or place a database service key or GitHub write token in a browser.

## Design Sources

Tokens and icons are indexed from their existing registries. SVG editing remains source-owned. The targeted `scripts/register-icons.mjs` command registers requested source SVGs through the canonical compiler/exporters without pruning unrelated assets. Browser-based repository writes require a separate authenticated publishing connector; the registry browser does not claim to provide one.
