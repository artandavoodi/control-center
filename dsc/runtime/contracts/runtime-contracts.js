/**
 * DSC Runtime Contracts
 * Runtime schema and authority validation layer.
 */

export class RuntimeContracts {
  constructor() {
    this.contracts = new Map();
  }

  register(name, schema = {}) {
    this.contracts.set(name, schema);
  }

  get(name) {
    return this.contracts.get(name);
  }

  validate(name, payload = {}) {
    const schema = this.contracts.get(name);

    if (!schema) {
      return {
        valid: false,
        reason: `Missing contract: ${name}`
      };
    }

    const required = schema.required || [];

    for (const field of required) {
      if (!(field in payload)) {
        return {
          valid: false,
          reason: `Missing field: ${field}`
        };
      }
    }

    return {
      valid: true
    };
  }

  inspect() {
    return {
      totalContracts: this.contracts.size,
      contracts: [...this.contracts.keys()]
    };
  }
}

export const runtimeContracts =
  new RuntimeContracts();
