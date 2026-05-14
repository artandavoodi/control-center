export function createStudioId(prefix, name) {
  return `${prefix}-${String(name).trim().toUpperCase().replace(/[^A-Z0-9]+/g, "-")}`;
}
