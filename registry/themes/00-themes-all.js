/**
 * Control Center Theme Registry
 * Routable registry metadata for platform theme consumers.
 */

export const CONTROL_CENTER_THEME_REGISTRY_PATHS = Object.freeze({
  core: "/control-center/registry/themes/core.json",
  website: "/control-center/registry/themes/website-themes.json",
  css: "/control-center/dsc/themes/themes.css"
});

export async function loadControlCenterThemeRegistry(fetcher = fetch) {
  const [coreResponse, websiteResponse] = await Promise.all([
    fetcher(CONTROL_CENTER_THEME_REGISTRY_PATHS.core),
    fetcher(CONTROL_CENTER_THEME_REGISTRY_PATHS.website)
  ]);

  if (!coreResponse.ok || !websiteResponse.ok) {
    throw new Error("Control Center theme registry is not reachable.");
  }

  const [core, website] = await Promise.all([
    coreResponse.json(),
    websiteResponse.json()
  ]);

  return Object.freeze({
    core,
    website,
    active: website.active || "neuroartan-achieved"
  });
}
