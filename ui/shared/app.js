import { sharedStatus } from "./status-data.js";

export function bindSharedStatus() {
  const runtimeNode = document.getElementById("runtime-status");
  const registryNode = document.getElementById("registry-status");
  const dscNode = document.getElementById("dsc-status");

  if (runtimeNode) runtimeNode.textContent = sharedStatus.runtime;
  if (registryNode) registryNode.textContent = sharedStatus.registry;
  if (dscNode) dscNode.textContent = sharedStatus.dsc;
}
