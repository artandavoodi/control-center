import { runtimeEventBus } from "../events/event-bus.js";

export function initializeTokenApplicationEngine() {

  runtimeEventBus.on("TOKEN_UPDATED", ({ id, value }) => {

    if (
      typeof document !== "undefined" &&
      document.documentElement &&
      id &&
      value
    ) {
      document.documentElement.style.setProperty(
        `--${id.replace(/\./g, "-")}`,
        value
      );
    }

  });

}
