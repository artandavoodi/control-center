export async function loadControlCenterTokens() {

  const response = await fetch(
    "/control-center/registry/tokens/manifests/control-center.tokens.css"
  );

  const css = await response.text();

  const style = document.createElement("style");

  style.dataset.controlCenterTokens = "active";
  style.textContent = css;

  document.head.appendChild(style);

}
