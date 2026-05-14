/**
 * DSC Runtime Graph
 * Authoritative runtime dependency graph.
 */

import { runtimeEventBus } from "../events/event-bus.js";

export class RuntimeGraph {
  constructor() {
    this.nodes = new Map();
    this.edges = new Map();
  }

  registerNode(id, config = {}) {
    this.nodes.set(id, {
      id,
      ...config
    });

    if (!this.edges.has(id)) {
      this.edges.set(id, new Set());
    }

    runtimeEventBus.emit("runtime:graph:node-registered", {
      id,
      config
    });
  }

  connect(source, target) {
    if (!this.edges.has(source)) {
      this.edges.set(source, new Set());
    }

    this.edges.get(source).add(target);

    runtimeEventBus.emit("runtime:graph:edge-created", {
      source,
      target
    });
  }

  getNode(id) {
    return this.nodes.get(id);
  }

  getConnections(id) {
    return [...(this.edges.get(id) || [])];
  }

  inspect() {
    return {
      totalNodes: this.nodes.size,
      totalEdges: [...this.edges.values()]
        .reduce((sum, set) => sum + set.size, 0)
    };
  }
}

export const runtimeGraph =
  new RuntimeGraph();
