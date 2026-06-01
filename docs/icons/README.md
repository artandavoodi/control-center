# Icons

Defines centralized SVG authority, ingestion pipelines, icon registries, runtime manifests, Swift icon exports, and rendering synchronization.

## Rendering Rule

- Use only SVG assets registered under `registry/icons/source`.
- Render catalog icons through their `/registry/icons/public/assets/...` image path.
- Do not fetch icons from third-party services.
- Do not generate, replace, or inline SVG vectors at runtime.
- Synchronization may propagate existing vectors, but it must not overwrite an existing source vector.
