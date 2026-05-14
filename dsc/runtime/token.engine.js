export class TokenEngine {
  constructor(source) {
    this.source = source;
  }

  applyToDOM() {
    const root = document.documentElement;
    const tokens = this.source.layers.tokens;

    for (const [k, v] of Object.entries(tokens.colors || {})) {
      root.style.setProperty(`--color-${k}`, v);
    }

    for (const [k, v] of Object.entries(tokens.spacing || {})) {
      root.style.setProperty(`--space-${k}`, v);
    }

    for (const [k, v] of Object.entries(tokens.radius || {})) {
      root.style.setProperty(`--radius-${k}`, v);
    }
  }
}
