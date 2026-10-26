# Change Log

## 2026-10-26 - Studio subscriptions, graphics and public search publication
- Added a public Studio/Studio Pro/trial comparison using the existing partnership table and details dialog. Commercial terms remain unconfirmed and checkout stays disabled; the resubmitted commerce directive contains no price, currency, trial duration or paid-only feature specification.
- Separated subscription billing settings from artist payout applications. Private provider-owned subscription evidence determines the Pro badge; artists cannot grant or extend their own subscription. No live subscription, card collection or recurring charge was created.
- Expanded palette assignments to include artist logos, disabled conflicting selections and retained the five-colour maximum. Public display still requires explicit sharing; original artwork is unchanged.
- Reused the canonical Neuroartan breathing and matte presentation in Studio; unsupported video/shader controls remain disabled and reduced-motion preferences are respected.
- Added a repeatable public-page indexing audit, consistent Artanrecords site-name metadata and exclusion of the generic profile resolver from the sitemap. Google indexing/ranking remains outside platform control.
- Verification: 162 Studio browser cases, 18 comparison/logo browser cases, 48 Studio source tests, 43 backend migrations and all 23 isolation suites passed. Live search submission and crawl status are tracked separately from local verification.

## 2026-10-26 - Internal payout applications replace artist provider handoffs
- Studio now submits private payout applications without redirecting artists to Stripe; pending and review decisions use private Studio notifications.
- Added a CEO-owner-only Control Center review queue. Requests for information and rejection are audited; approval requires server-owned provider evidence and cannot be granted by an artist.
- Secure bank/tax intake, the trusted provider-evidence connector and live money movement remain unavailable. No financial declarations or provider agreements were accepted for the user.
- Verified 150 Studio browser cases and the new review journey on desktop, tablet and mobile; database isolation covers cross-artist access and blocked self/unverified approval.
- Full Control Center rerun passed 115 cases with two desktop-only skips. An initial mobile refresh run reported invalid navigation sizing; five targeted repeats passed, but the intermittent cause remains unresolved and is not described as fixed.
- Supersedes the earlier hosted-onboarding direction below; existing provider mappings and Store data are preserved.

## 2026-10-26 — Sandbox onboarding acceptance
- Verified the signed-in Studio handoff to Stripe-hosted Artanrecords sandbox onboarding for the owner-confirmed Croatian recipient country. Stopped before phone submission, terms acceptance and bank/identity entry; onboarding completion and live payouts are not claimed.
- Countries come from the provider's country specification API, require explicit selection, and are validated server-side. New recipient creation and hosted links use Accounts v2; no legacy account-creation exception was enabled.
- Final Studio validation passed all 156 browser cases across Chromium/WebKit desktop, tablet and mobile, plus 47 source tests. Backend publication passed 40 migrations, all 21 SQL isolation suites and 11 Deno tests.

## 2026-10-25 — Private account settings, graphics and sandbox payout foundation
- Studio private email and phone controls moved to Account security. Public profile saves no longer write or clear private contact numbers; verification remains provider-owned.
- Owner-only colour assignments now select icon, header fade and header ribbon targets, preserving legacy defaults and explicit public-sharing consent. The additive hosted graphics migration is applied.
- Bank uses registered banking artwork, shared spacing and an explicit unavailable balance until a real sandbox recipient balance is returned. Sandbox and payable earnings remain distinct.
- The dedicated Artanrecords sandbox credential is stored server-side. Immutable recipient mappings are isolated from client access; live charges, transfers and withdrawals remain disabled. Accounts v2 onboarding is under hosted verification, not a completed financial activation.
- Internal agreement previews require initials and an explicit non-binding acknowledgement; downloaded preview records are not executed contracts. Legal drafts record review requirements; actual contract issuance remains unavailable pending legal and evidence-system completion.
- Registered bank and artist-content vectors, plus a dedicated Run dot slot awaiting artwork. Canonical propagation verifies mirrored bytes and consumer aliases.
- Repaired database validation fixtures without broadening production access. Repository publication now runs every SQL suite locally and in CI, using the same disposable database runner. Verified 40 migrations, 21 isolation suites, 47 Studio source tests and 150 Studio browser cases; subsequent profile-preservation assertions passed in six browser/device combinations.

## 2026-10-24 — Artist catalogue readiness and release editing
- Fixed the selector conflict that disabled desktop artist snapping. Destination content is centered, header tabs remain contextual, and tablet/mobile scrolling stays natural.
- Listen and Follow use icon-only desktop presentation with themed hover/focus labels; Explore retains its labelled presentation. Section entrances use shared motion tokens and respect reduced motion.
- Public Artanrecords and Studio consume the same website-owned page-readiness controller, loading surface and breathing-dot primitive. Initial artist media is decoded before reveal; queued profile refreshes are not discarded.
- Studio tracks use named sections rather than legends crossing separators. Released artwork/content spacing and release/track facts are explicit; platform icons and track-level links use the registered icon map.
- Added optional label/copyright and cover-song/preview metadata with validation. Drafts remain private; no distribution, signing, payment or publication permission was activated.
- Verification: 296 public browser cases passed with four device-specific skips; all 114 Studio browser cases and 35 source tests passed. Shared consumers were rebuilt and checksum-verified.

## 2026-10-24 — Studio alignment and artist catalogue refinement
- Canonical Artanrecords wordmarks now use artwork-aligned horizontal canvases; vector paths are unchanged. Studio header insets share the sidebar icon alignment.
- Studio custom colours use the shared modal backdrop and close primitive. Artist desktop destinations are header-only, with centered content and desktop-only section snapping.
- Artist content editing and selected-field public projection are registered in Studio and Store migrations. Hosted rollback-test confirmation remains pending.
- Control Center operation icons use the shared platform navigation size. Local registry and 19 operation tests passed; Studio passed all 108 browser tests and 34 source tests after correcting loading-state inheritance in WebKit and updating the delayed-media test fixture.

## 2026-10-23 — Approved Studio navigation and control refinement
- Activated the canonical magnetic rail controller in Studio following approval; desktop dragging supports collapse and reopening, while mobile/tablet navigation remains unchanged.
- Control Center navigation labels no longer wrap. Publication confirmation uses compact theme-aware selection sizing.
- Studio graphics uses a logo preview field, upload feedback, native colour swatches with hex editing and registered icon-only removal.
- Artist destination tabs are borderless and all link groups use consistent icon-and-label ordering. Shared connection-heading scoping is corrected in the artist website owner and synchronized through the manifest.

## 2026-10-23 — Notification history and magnetic navigation
- Magnetic resizing now imports the canonical website-owned shared behaviour through the checksum-verified design distribution. Studio activation remains pending user approval.
- The workspace chevron fades with the available rail width; workspace labels remain on one line before snapping.
- Completed update notifications support owner-scoped read acknowledgement, including legacy history IDs, and retain read state across service restarts.
- Notifications remain closed on completion; the running indicator is shown only during active work. User-facing results use internal publication wording.
- Desktop navigation resolves calculated spacing tokens through the browser, snaps between readable and icon-only widths with separate thresholds, and reopens by dragging. Maximum width and authored panel icons remain unchanged.
- Verified 105 browser cases and 19 service/source tests; registry integrity passed.

## 2026-10-23 — Artist graphics
- Studio owns the Graphics editor, native colour selection and transparent logo export.
- The shared Store/Studio database owns private originals and explicit public-logo/palette consent; saving graphics cannot create a first artist publication.
- Artanrecords catalogue projects only selected graphics. Dynamic monochrome icons now use the shared theme marker; connection groups stretch to their available columns.
- Hosted rollback tests passed for account isolation, publication gates, original-source privacy, public PNG reads, colour validation, listing denial and consent withdrawal.

## Session 1
- Created Control Center repository documentation skeleton
- Defined Control Center as the orchestration layer above DSC
- Added README files for DSC, Registry, UAPIS, UVS, UI
- Added documentation containers for architecture, status, and changelog

## Session 2
- Expanded DSC structure with engine, runtime, adapters, tokens, and themes
- Expanded Registry structure with lookup and core documentation
- Expanded UI structure with dashboard, editor, settings, and panels
- Added semantic token files

## Session 3
- Added runtime enforcement and validation stubs
- Added registry graph core
- Updated implementation status to reflect runtime and graph progress

## Session 4
- Bound runtime validation to registry graph awareness
- Added runtime core index
- Extended registry graph with reset support
- Updated implementation status to reflect graph-linked runtime

## Session 5
- Updated status files to reflect current repository state
- Consolidated remaining gaps into a smaller active list

## Session 6
- Added engine contract documentation
- Added engine contracts implementation notes
- Added control panel placeholder
- Upgraded token registry with IDs and lookup support
- Expanded registry identity namespaces

## Session 7
- Updated web adapter entry points to accept registry-aware theme input
- Refreshed adapter status to reflect bridge progress

## Session 8
- Normalized token reference resolution
- Made theme resolution mode-aware across registry and DSC paths
- Updated theme registry status for token lookup completion

## Session 9
- Aligned iOS theme bridge with registry-aware theme lookup
- Updated theme registry status for adapter parity progress

## Session 10
- Added runtime orchestrator
- Wired runtime orchestration to validation, enforcement, and theme retrieval
- Updated runtime and current status reporting

## Session 11
- Added a runtime-focused dashboard baseline
- Added UI status tracking

## Session 12
- Added settings surface skeleton
- Added editor surface skeleton
- Updated UI status to reflect new surfaces

## Session 13
- Added shared UI layer skeleton
- Added runtime status view
- Updated UI status to reflect shared primitives

## Session 14
- Added shared status binding script
- Wired shared UI runtime, registry, and DSC placeholders through a module entry point
- Updated shared UI status documentation

## Session 15
- Added shared shell renderer
- Routed dashboard, settings, and editor through one shared shell entry
- Updated UI status to reflect shell consolidation

## Session 16
- Added page-specific titles and intros to the shared shell
- Simplified dashboard, settings, and editor pages to one shared render path
- Updated UI status to reflect shell parameterization

## Session 17
- Defined the studio as the missing public-facing design layer
- Added studio vision, product definition, architecture, contract, and status documents

## Session 18
- Began studio engine skeleton
- Added studio UI entry page
- Added studio registry core placeholder

## Session 19
- Added registry list and reset support for studio assets
- Bound studio orchestrator asset creation into the studio registry
- Updated studio status to reflect authored asset storage
