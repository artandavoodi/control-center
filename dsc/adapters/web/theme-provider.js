import { resolveTheme } from "../../engine/core/theme-resolver.js";

export function applyTheme(mode) {
  const root = document.documentElement;

  const theme = {
    background: resolveTheme("background", mode),
    surface: resolveTheme("surface", mode)
  };

  root.style.setProperty("--dsc-background", theme.background);
  root.style.setProperty("--dsc-surface", theme.surface);
}
