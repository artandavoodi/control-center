/* ==========================================================================
   TOKEN PANEL
   ========================================================================== */

const TOKEN_SOURCE =
"/Users/artan/Documents/Neuroartan/control-center/studio/registry/tokens/core-tokens.json";

async function loadTokens() {

  const response =
  await fetch("../registry/tokens/core-tokens.json");

  const tokens =
  await response.json();

  const root =
  document.querySelector(
    "[data-token-panel]"
  );

  if (!root) {
    return;
  }

  root.innerHTML = "";

  function walk(object, prefix = "") {

    Object.entries(object).forEach(
      ([key, value]) => {

        if (
          typeof value === "object"
        ) {
          walk(
            value,
            `${prefix}${key}.`
          );

          return;
        }

        const row =
        document.createElement("div");

        row.className =
        "studio-token-row";

        row.innerHTML = `
          <div class="studio-token-key">
            ${prefix}${key}
          </div>

          <input
            value="${value}"
            data-token="${prefix}${key}"
          />
        `;

        root.appendChild(row);
      }
    );
  }

  walk(tokens);
}

window.addEventListener(
  "DOMContentLoaded",
  loadTokens
);


async function saveTokens() {

  const payload = {};

  document
  .querySelectorAll("[data-token]")
  .forEach(input => {

    const path =
    input.dataset.token
    .split(".");

    let current = payload;

    path.forEach((segment, index) => {

      if (index === path.length - 1) {
        current[segment] = input.value;
        return;
      }

      current[segment] ??= {};

      current = current[segment];
    });
  });

  await fetch("/api/tokens", {
    method: "POST",
    headers: {
      "Content-Type":
      "application/json"
    },
    body: JSON.stringify(payload)
  });

  console.log(
    "[Studio] Tokens saved."
  );
}

window.addEventListener(
  "change",
  event => {

    if (
      event.target.matches(
        "[data-token]"
      )
    ) {
      saveTokens();
    }
  }
);
