/**
 * DSC Runtime Task Scheduler
 * Runtime orchestration execution queue.
 */

import { runtimeEventBus } from "../events/event-bus.js";

export class TaskScheduler {
  constructor() {
    this.queue = [];
    this.running = false;
  }

  add(task) {
    this.queue.push(task);

    runtimeEventBus.emit("runtime:scheduler:task-added", {
      total: this.queue.length
    });

    this.run();
  }

  async run() {
    if (this.running) return;

    this.running = true;

    while (this.queue.length > 0) {
      const task = this.queue.shift();

      try {
        await task();

        runtimeEventBus.emit(
          "runtime:scheduler:task-completed"
        );
      } catch (error) {
        runtimeEventBus.emit(
          "runtime:scheduler:task-failed",
          { error }
        );

        console.error(
          "[DSC Runtime Scheduler]",
          error
        );
      }
    }

    this.running = false;
  }

  inspect() {
    return {
      queuedTasks: this.queue.length,
      running: this.running
    };
  }
}

export const taskScheduler =
  new TaskScheduler();
