import { enforceRuntimeState } from "./enforcer.js";
import { validateRuntimeState } from "./validator.js";
import { getTheme } from "../../adapters/web/theme-bridge.js";
import { RegistryGraph } from "../../../registry/graph/core/graph.js";

export function orchestrateRuntime(state = {}, registry = null, mode = "dark") {
  const enforced = enforceRuntimeState(state, registry, RegistryGraph);
  const validated = validateRuntimeState(state, registry, RegistryGraph);

  const report = {
    valid: enforced.valid && validated.valid,
    mode,
    state,
    registry,
    issues: [...enforced.issues, ...validated.issues],
    theme: null
  };

  if (report.valid) {
    report.theme = getTheme(mode, registry);
    RegistryGraph.addNode({
      id: `CC-RUNTIME-${mode.toUpperCase()}`,
      type: "runtime-session",
      mode
    });
  }

  return report;
}
