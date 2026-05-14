export function resolveTheme(token, mode = "dark", registry = null) {
  const base = {
    dark: {
      background: "#0B0F14",
      surface: "#121821"
    },
    light: {
      background: "#FFFFFF",
      surface: "#F2F4F8"
    }
  };

  if (registry?.themes?.[mode]?.[token]) {
    return registry.themes[mode][token];
  }

  return base[mode]?.[token] || null;
}
