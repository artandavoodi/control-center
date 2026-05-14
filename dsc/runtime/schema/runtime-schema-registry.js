/**
 * DSC Runtime Schema Registry
 * Runtime node typing and schema authority.
 */

import { runtimeEventBus } from "../events/event-bus.js";

export class RuntimeSchemaRegistry {
  constructor() {
    this.schemas = new Map();
  }

  register(name, schema = {}) {
    this.schemas.set(name, schema);

    runtimeEventBus.emit(
      "runtime:schema:registered",
      {
        name
      }
    );
  }

  get(name) {
    return this.schemas.get(name);
  }

  has(name) {
    return this.schemas.has(name);
  }

  validate(name, payload = {}) {
    const schema =
      this.schemas.get(name);

    if (!schema) {
      return {
        valid: false,
        reason: `Missing schema: ${name}`
      };
    }

    const required =
      schema.required || [];

    for (const field of required) {
      if (!(field in payload)) {
        return {
          valid: false,
          reason: `Missing schema field: ${field}`
        };
      }
    }

    return {
      valid: true
    };
  }

  inspect() {
    return {
      totalSchemas: this.schemas.size,
      schemas: [...this.schemas.keys()]
    };
  }
}

export const runtimeSchemaRegistry =
  new RuntimeSchemaRegistry();
