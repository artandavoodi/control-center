/**
 * SVG Propagation Engine
 * Cross-platform SVG synchronization authority.
 */

import { iconCompiler }
from "../../../registry/icons/compiler/icon-compiler.js";

import { runtimeIconExporter }
from "../../../registry/icons/exporters/runtime/runtime-icon-exporter.js";

import { swiftIconExporter }
from "../../../registry/icons/exporters/swift/swift-icon-exporter.js";

export class SVGPropagationEngine {
  synchronize() {
    const registry =
      iconCompiler.load();

    const runtime =
      runtimeIconExporter.export();

    const swift =
      swiftIconExporter.export();

    return {
      registry,
      runtime,
      swift
    };
  }
}

export const svgPropagationEngine =
  new SVGPropagationEngine();
