import design from "../kernel/design.source.json" assert { type: "json" };
import { TokenEngine } from "./token.engine.js";

const engine = new TokenEngine(design);
engine.applyToDOM();

window.__CONTROL_CENTER__ = {
  design
};

console.log("[Control Center] Unified Design Kernel Active");
