import { createStudioId } from "../core/id-generator.js";

export function createTheme(name, tokens = {}) {
  return {
    id: createStudioId("CC-STUDIO-THEME", name),
    name,
    tokens
  };
}
