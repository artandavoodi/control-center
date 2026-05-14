import { resolveTheme } from "../../engine/core/theme-resolver.js";

function normalizeRegistryMode(registry, mode) {
  return registry?.themes?.[mode] || null;
}

export function applyTheme(mode, registry = null) {
  const root = document.documentElement;
  const themeRegistry = normalizeRegistryMode(registry, mode);

  const background = resolveTheme("background", mode, registry);
  const surface = resolveTheme("surface", mode, registry);

  root.style.setProperty("--dsc-background", background);
  root.style.setProperty("--dsc-surface", surface);

  if (themeRegistry?.background?.id) {
    root.setAttribute("data-dsc-theme-background-id", themeRegistry.background.id);
  }

  if (themeRegistry?.surface?.id) {
    root.setAttribute("data-dsc-theme-surface-id", themeRegistry.surface.id);
  }
}
