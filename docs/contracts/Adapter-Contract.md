# Adapter Contract

## Purpose
Adapters connect DSC to platform surfaces.

## Web Adapter
- applies tokens to DOM
- bridges theme resolution
- remains bound to DSC runtime rules

## iOS Adapter
- mirrors theme state on Apple platforms
- bridges platform color resolution
- remains bound to DSC runtime rules

## Rules
- adapters do not own token truth
- adapters do not override registry identity
- adapters do not define new design values
- adapters consume DSC and registry outputs only
