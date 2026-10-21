# Ecosystem Development Registration

Control Center is the parent development-history and operational-control surface.
This rule applies to major and minor changes in every registered child repository.

## Canonical Records

- Commit each reviewable development change in its owning repository with a precise, scoped message.
- Push the verified commit to its registered GitHub repository. Uncommitted work is not a recorded development change.
- Control Center's Development history reads the default-branch commit history from the repositories in `assets/data/control-center/development.json`.
- Identify a change by `owner/repository:commit SHA`. Never create duplicate log entries, copy source files into Control Center, or rewrite icon/vector ownership to register a change.
- New repositories must be registered in the central repository list before handoff. Changes on branches appear after merging to the default branch.
- Verify tests, push status and deployment separately. A commit is not proof of a successful test, production deployment or business approval.
- Security-sensitive staff, username and tier decisions remain in the private database audit trail, not in development commit messages.
- Never publish private governance text, personal information, credentials or internal approval records to make a repository discoverable in the feed.

## Current Connector Boundary

The deployed development feed reads public GitHub commit metadata without a GitHub token. Private repositories are registered but explicitly unavailable until a server-side, staff-authorized connector exists. Do not make a repository public, embed a token, use a service-role key in the client or claim private ingestion is active.

Repository READMEs link to this policy rather than maintaining competing copies.
