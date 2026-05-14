/**
 * DSC Runtime Version Manager
 * Runtime migration and version authority.
 */

import { runtimeEventBus } from "../events/event-bus.js";

export class RuntimeVersionManager {
  constructor() {
    this.version = "0.1.0";
    this.migrations = [];
  }

  getVersion() {
    return this.version;
  }

  setVersion(version) {
    const previous = this.version;

    this.version = version;

    runtimeEventBus.emit(
      "runtime:version:updated",
      {
        previous,
        version
      }
    );
  }

  registerMigration(migration) {
    this.migrations.push(migration);

    runtimeEventBus.emit(
      "runtime:migration:registered",
      {
        total: this.migrations.length
      }
    );
  }

  async runMigrations(context = {}) {
    for (const migration of this.migrations) {
      await migration(context);
    }

    runtimeEventBus.emit(
      "runtime:migration:completed"
    );
  }

  inspect() {
    return {
      version: this.version,
      totalMigrations:
        this.migrations.length
    };
  }
}

export const runtimeVersionManager =
  new RuntimeVersionManager();
