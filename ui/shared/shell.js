import { bindSharedStatus } from "./app.js";

export function renderSharedShell(targetId, options = {}) {
  const target = document.getElementById(targetId);
  if (!target) return;

  const title = options.title || "Control Center";
  const intro = options.intro || "";

  target.innerHTML = `
    <header>
      <h1>${title}</h1>
      ${intro ? `<p>${intro}</p>` : ""}
    </header>
    <section>
      <h2>Runtime</h2>
      <p id="runtime-status">Runtime status view placeholder.</p>
    </section>
    <section>
      <h2>Registry</h2>
      <p id="registry-status">Registry status view placeholder.</p>
    </section>
    <section>
      <h2>DSC</h2>
      <p id="dsc-status">DSC status view placeholder.</p>
    </section>
  `;

  bindSharedStatus();
}
