# Design System Core (DSC)

DSC is the design foundation of the Neuroartan system.

## Purpose

DSC defines the visual and interaction language used across platforms.

It governs:

- color
- spacing
- radius
- typography
- tokens
- theme logic
- component styling rules

## Current Reality

DSC already exists in distributed form.

Current strengths:

- token definitions exist
- design doctrine exists
- adapters exist for web, iOS, and software
- visual language is already partially propagated

Current limitations:

- not runtime-enforced
- not centralized
- not fully synchronized across platforms
- still documentation-bound in several areas

## Structure

- `tokens/` — core and theme token definitions
- `engine/` — token and theme resolution logic
- `adapters/` — platform bridges
- `runtime/` — future runtime enforcement layer
- `themes/` — theme-level composition

## Working Rule

DSC is the design kernel, not the Control Center.

Control Center governs DSC. DSC defines the visual system.
