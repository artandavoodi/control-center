import { createStudioId } from "../core/id-generator.js";

export function createStylePack(name, rules = {}) {
  return {
    id: createStudioId("CC-STUDIO-STYLE", name),
    name,
    rules
  };
}
