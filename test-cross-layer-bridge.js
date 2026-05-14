import { bootstrapRuntime } from "./dsc/runtime/core/runtime-bootstrap.js";
import { runtimeEventBus } from "./dsc/runtime/events/event-bus.js";

await bootstrapRuntime();

runtimeEventBus.emit("TOKEN_UPDATED", {
  id: "test.token",
  value: "verified"
});

runtimeEventBus.emit("THEME_CHANGED", {
  id: "theme.default"
});

runtimeEventBus.emit("ICON_REGISTERED", {
  id: "icon.test"
});

console.table(globalThis.__CONTROL_CENTER_EVENTS__ || []);
