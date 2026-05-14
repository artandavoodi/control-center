import { resolveTheme } from "../../engine/core/theme-resolver.js";

export function getTheme(mode, registry = null) {
  return {
    background: resolveTheme("background", mode, registry),
    surface: resolveTheme("surface", mode, registry),
    mode
  };
}
