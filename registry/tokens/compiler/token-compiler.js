/**
 * Neuroartan DSC Token Compiler
 * Cross-platform token compilation engine.
 */

import { tokenRegistry }
from "../core/token-registry.js";

export class TokenCompiler {
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
      ...entries.map(
        ([key, value]) =>
          `  static let ${key.replace(/\./g, "_")} = "${value}"`
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
