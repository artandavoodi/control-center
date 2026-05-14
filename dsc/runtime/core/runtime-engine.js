import { bindRuntimeConsumers } from "./consumers/runtime-consumer-bridge.js"
/**
 * DSC Runtime Engine
 * Central runtime orchestration authority.
 */

import { runtimeEventBus } from "../events/event-bus.js";
import { runtimeState } from "../state/runtime-state.js";
import { runtimeGraph } from "../graph/runtime-graph.js";
import { runtimeContracts } from "../contracts/runtime-contracts.js";
import { taskScheduler } from "../scheduler/task-scheduler.js";
import { runtimeDiagnostics } from "../diagnostics/runtime-diagnostics.js";

export class RuntimeEngine {
  constructor() {
    this.initialized = false;
    this.state = {};
  }

  initialize() {
    if (this.initialized) return;

    this.initialized = true;

    runtimeEventBus.emit(
      "runtime:engine:initialized"
    );
  }

  registerNode(id, config = {}) {
    runtimeGraph.registerNode(id, config);
  }

  connectNodes(source, target) {
    runtimeGraph.connect(source, target);
  }

  registerContract(name, schema = {}) {
    runtimeContracts.register(name, schema);
  }

  validate(contract, payload = {}) {
    return runtimeContracts.validate(
      contract,
      payload
    );
  }

  setState(key, value) {
    runtimeState.set(key, value);
  }

  getState(key) {
    return runtimeState.get(key);
  }

  schedule(task) {
    taskScheduler.add(task);
  }

  diagnostics() {
    return runtimeDiagnostics.report();
  }

  inspect() {
    return {
      initialized: this.initialized,
      diagnostics: this.diagnostics()
    };
  }
}

export const runtimeEngine =
  new RuntimeEngine();
