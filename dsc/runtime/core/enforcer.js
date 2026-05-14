import { RegistryGraph } from "../../../registry/graph/core/graph.js";

export function enforceRuntimeState(state = {}, registry = null, graph = RegistryGraph) {
  const issues = [];

  if (!state || typeof state !== "object") {
    issues.push("state must be an object");
  }

  if (!registry || typeof registry !== "object") {
    issues.push("registry is missing");
  }

  if (!graph || typeof graph.resolve !== "function") {
    issues.push("registry graph is missing");
  }

  return {
    valid: issues.length === 0,
    state,
    registry,
    graph,
    issues
  };
}
