/**
 * DSC Runtime Persistence
 * Runtime persistence and snapshot authority.
 */

import fs from "fs";
import path from "path";

import { runtimeState } from "../state/runtime-state.js";
import { runtimeEventBus } from "../events/event-bus.js";

const STORAGE_PATH =
  path.resolve(
    process.cwd(),
    ".dsc-runtime-state.json"
  );

export class RuntimePersistence {
  save() {
    const snapshot =
      runtimeState.snapshot();

    fs.writeFileSync(
      STORAGE_PATH,
      JSON.stringify(snapshot, null, 2)
    );

    runtimeEventBus.emit(
      "runtime:persistence:saved",
      {
        path: STORAGE_PATH
      }
    );
  }

  load() {
    if (!fs.existsSync(STORAGE_PATH)) {
      return {};
    }

    const raw =
      fs.readFileSync(
        STORAGE_PATH,
        "utf-8"
      );

    const data = JSON.parse(raw);

    for (const [key, value] of Object.entries(data)) {
      runtimeState.set(key, value);
    }

    runtimeEventBus.emit(
      "runtime:persistence:loaded",
      {
        path: STORAGE_PATH
      }
    );

    return data;
  }
}

export const runtimePersistence =
  new RuntimePersistence();
