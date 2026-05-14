import { resolveTokenRef } from "./token-registry.js";

export function resolveTheme(token, mode = "dark", registry = null) {
  const registryValue = registry?.themes?.[mode]?.[token];
  if (registryValue) {
    return resolveTokenRef(registryValue.ref ?? registryValue, mode) ?? registryValue.ref ?? registryValue;
  }

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
