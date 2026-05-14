import { createStudioId } from "../core/id-generator.js";

export function createComponent(name, styles = {}) {
  return {
    id: createStudioId("CC-STUDIO-COMP", name),
    name,
    styles
  };
}
