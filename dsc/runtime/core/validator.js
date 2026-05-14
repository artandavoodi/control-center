import { RegistryGraph } from "../../../registry/graph/core/graph.js";

export function validateRuntimeState(state = {}, registry = null, graph = RegistryGraph) {
  const issues = [];

  if (!state || typeof state !== "object") {
    issues.push("state must be an object");
  }

  if (!registry?.rules?.global_uniqueness) {
    issues.push("registry uniqueness rule is not enabled");
  }

  if (!registry?.layers?.dsc || !registry?.layers?.registry) {
    issues.push("registry layers are incomplete");
  }

  if (!graph || typeof graph.addNode !== "function" || typeof graph.resolve !== "function") {
    issues.push("registry graph is incomplete");
  }

  return {
    valid: issues.length === 0,
    state,
    registry,
    graph,
    issues
  };
}
