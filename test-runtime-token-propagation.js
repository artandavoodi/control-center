import { bootstrapRuntime } from "./dsc/runtime/core/runtime-bootstrap.js";
import { runtimeEventBus } from "./dsc/runtime/events/event-bus.js";

global.document = {
  head: {
    appendChild(node) {
      console.log("[STYLE INJECTED]");
    }
  },
  createElement() {
    return {
      dataset: {},
      textContent: ""
    };
  },
  documentElement: {
    style: {
      setProperty(key, value) {
        console.log("[TOKEN APPLIED]", key, value);
      }
    }
  }
};

global.fetch = async () => ({
  async text() {
    return `
      :root {
        --surface-background: #000;
      }
    `;
  }
});

await bootstrapRuntime();

runtimeEventBus.emit("TOKEN_UPDATED", {
  id: "surface.background",
  value: "#101114"
});

runtimeEventBus.emit("TOKEN_UPDATED", {
  id: "text.primary",
  value: "#ffffff"
});

console.log("Runtime propagation verified.");
