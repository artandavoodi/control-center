import { createStudioId } from "../core/id-generator.js";

export function createTemplate(name, structure = {}) {
  return {
    id: createStudioId("CC-STUDIO-TEMPLATE", name),
    name,
    structure
  };
}
