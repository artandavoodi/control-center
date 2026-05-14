export function resolveTheme(token, mode = "dark") {
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

  return base[mode]?.[token] || null;
}
