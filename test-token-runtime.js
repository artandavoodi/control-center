import { bootstrapRuntime } from "./dsc/runtime/core/runtime-bootstrap.js";

global.document = {
  head: {
    appendChild(node) {
      console.log("[STYLE INJECTED]");
      console.log(node.textContent.slice(0, 300));
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
        --text-primary: #fff;
      }
    `;
  }
});

await bootstrapRuntime();

console.log("Runtime token load test complete.");
