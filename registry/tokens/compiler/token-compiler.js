/**
 * Neuroartan DSC Token Compiler
 * Cross-platform token compilation engine.
 */

import { tokenRegistry }
from "../core/token-registry.js";

export class TokenCompiler {
  swiftIdentifier(key) {
    const normalized =
      key
        .replace(/[^a-zA-Z0-9_]/g, "_")
        .replace(/_+/g, "_")
        .replace(/^_+|_+$/g, "");

    if (!normalized) {
      return "token";
    }

    if (/^[0-9]/.test(normalized)) {
      return `token_${normalized}`;
    }

    return normalized;
  }

  swiftString(value) {
    return String(value)
      .replace(/\\/g, "\\\\")
      .replace(/"/g, "\\\"");
  }

  compile() {
    const tokens =
      tokenRegistry.export();

    return {
      raw: tokens,
      css:
        this.compileCSS(tokens),
      swift:
        this.compileSwift(tokens),
      runtime:
        this.compileRuntime(tokens)
    };
  }

  compileCSS(tokens) {
    const entries =
      Object.entries(tokens);

    return [
      ":root {",
      ...entries.map(
        ([key, value]) =>
          `  --${key}: ${value};`
      ),
      "}"
    ].join("\n");
  }

  compileSwift(tokens) {
    const entries =
      Object.entries(tokens);

    return [
      "import SwiftUI",
      "",
      "enum DSCTokens {",
      "  static let values: [String: String] = [",
      ...entries.map(
        ([key, value]) =>
          `    "${this.swiftString(key)}": "${this.swiftString(value)}",`
      ),
      "  ]",
      "",
      ...entries.map(
        ([key, value]) =>
          `  static let ${this.swiftIdentifier(key)} = "${this.swiftString(value)}"`
      ),
      "}"
    ].join("\n");
  }

  compileRuntime(tokens) {
    return JSON.stringify(
      tokens,
      null,
      2
    );
  }
}

export const tokenCompiler =
  new TokenCompiler();
