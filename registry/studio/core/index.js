export const StudioRegistry = {
  themes: [],
  components: [],
  templates: [],
  styles: [],

  add(type, entry) {
    if (!this[type] || !entry?.id) return null;
    this[type].push(entry);
    return entry;
  },

  find(type, id) {
    if (!this[type]) return null;
    return this[type].find(entry => entry.id === id) || null;
  },

  list(type) {
    if (!this[type]) return [];
    return [...this[type]];
  },

  reset() {
    this.themes = [];
    this.components = [];
    this.templates = [];
    this.styles = [];
    return this;
  }
};
