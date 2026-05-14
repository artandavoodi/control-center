export const RegistryGraph = {
  nodes: [],
  edges: [],

  addNode(node) {
    if (!node || !node.id) return null;
    if (this.nodes.some(existing => existing.id === node.id)) return null;
    this.nodes.push(node);
    return node;
  },

  addEdge(from, to, type = "references") {
    if (!from || !to) return null;
    const edge = { from, to, type };
    this.edges.push(edge);
    return edge;
  },

  resolve(id) {
    return this.nodes.find(node => node.id === id) || null;
  },

  findByType(type) {
    return this.nodes.filter(node => node.type === type);
  },

  reset() {
    this.nodes = [];
    this.edges = [];
    return this;
  }
};
