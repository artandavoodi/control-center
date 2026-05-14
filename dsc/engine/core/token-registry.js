export const Tokens = {
  colors: {
    background: {
      id: "CC-DSC-TOKEN-0001",
      ref: {
        dark: "token.color.background.dark",
        light: "token.color.background.light"
      }
    },
    surface: {
      id: "CC-DSC-TOKEN-0002",
      ref: {
        dark: "token.color.surface.dark",
        light: "token.color.surface.light"
      }
    },
    primary: {
      id: "CC-DSC-TOKEN-0003",
      ref: "token.color.primary"
    },
    text: {
      id: "CC-DSC-TOKEN-0004",
      ref: "token.color.text"
    }
  },
  spacing: {
    xs: { id: "CC-DSC-TOKEN-0101", ref: "token.space.xs" },
    sm: { id: "CC-DSC-TOKEN-0102", ref: "token.space.sm" },
    md: { id: "CC-DSC-TOKEN-0103", ref: "token.space.md" },
    lg: { id: "CC-DSC-TOKEN-0104", ref: "token.space.lg" },
    xl: { id: "CC-DSC-TOKEN-0105", ref: "token.space.xl" }
  },
  radius: {
    sm: { id: "CC-DSC-TOKEN-0201", ref: "token.radius.sm" },
    md: { id: "CC-DSC-TOKEN-0202", ref: "token.radius.md" },
    lg: { id: "CC-DSC-TOKEN-0203", ref: "token.radius.lg" },
    xl: { id: "CC-DSC-TOKEN-0204", ref: "token.radius.xl" }
  }
};

export function getToken(path) {
  const parts = String(path).split(".");
  return parts.reduce((current, key) => current?.[key], Tokens) || null;
}

export function resolveTokenRef(ref, mode = "dark") {
  if (!ref) return null;

  if (typeof ref === "object" && !Array.isArray(ref)) {
    return ref[mode] ?? ref.default ?? null;
  }

  if (typeof ref !== "string") return null;

  const cleaned = ref.startsWith("token.") ? ref.slice("token.".length) : ref;
  const [group, key, variant] = cleaned.split(".");

  if (group === "color" && key) {
    const token = Tokens.colors?.[key];
    if (!token) return null;
    if (typeof token.ref === "object") {
      return token.ref[variant || mode] ?? token.ref.default ?? null;
    }
    return token.ref;
  }

  if (group === "space" && key) {
    return Tokens.spacing?.[key]?.ref ?? null;
  }

  if (group === "radius" && key) {
    return Tokens.radius?.[key]?.ref ?? null;
  }

  return Tokens?.[group]?.[key]?.ref ?? null;
}
