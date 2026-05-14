const view = document.querySelector("#cc-studio-view");

let TOKENS = {};

async function loadTokens() {

  const response = await fetch(
    "/control-center/registry/tokens/core-tokens.json"
  );

  TOKENS = await response.json();

  renderTokens();

}

function renderTokens() {

  view.innerHTML = `
    <h2>Tokens</h2>

    <div class="cc-token-grid">
      ${Object.entries(TOKENS).map(([id, value]) => `
        <div class="cc-token-card">
          <label>${id}</label>

          <input
            data-token="${id}"
            value="${value}"
          />
        </div>
      `).join("")}
    </div>
  `;

  document
    .querySelectorAll("[data-token]")
    .forEach((input) => {

      input.addEventListener("input", () => {

        TOKENS[input.dataset.token] = input.value;

        window.dispatchEvent(
          new CustomEvent("CC_TOKEN_UPDATED", {
            detail: {
              id: input.dataset.token,
              value: input.value
            }
          })
        );

      });

    });

}

document
  .querySelectorAll("[data-view]")
  .forEach((button) => {

    button.addEventListener("click", () => {

      const section = button.dataset.view;

      if (section === "tokens") {
        renderTokens();
        return;
      }

      view.innerHTML = `
        <h2>${section}</h2>
        <p>Control Center runtime surface active.</p>
      `;

    });

  });

document
  .querySelector("#cc-propagate")
  .addEventListener("click", () => {

    Object.entries(TOKENS).forEach(([id, value]) => {

      window.dispatchEvent(
        new CustomEvent("CC_TOKEN_UPDATED", {
          detail: { id, value }
        })
      );

    });

    alert("Control Center propagation complete.");

  });

loadTokens();
