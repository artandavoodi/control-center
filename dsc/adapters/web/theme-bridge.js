import { resolveTheme } from "../../engine/core/theme-resolver.js";

export function getTheme(mode) {
  return {
    background: resolveTheme("background", mode),
    surface: resolveTheme("surface", mode)
  };
}
