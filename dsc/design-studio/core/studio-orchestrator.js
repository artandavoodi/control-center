import { createTheme } from "../engines/theme-engine.js";
import { createComponent } from "../engines/component-engine.js";
import { createTemplate } from "../engines/template-engine.js";
import { createStylePack } from "../engines/style-engine.js";
import { StudioRegistry } from "../../../registry/studio/core/index.js";

export const StudioOrchestrator = {
  createTheme(name, tokens = {}) {
    const theme = createTheme(name, tokens);
    StudioRegistry.add("themes", theme);
    return theme;
  },

  createComponent(name, styles = {}) {
    const component = createComponent(name, styles);
    StudioRegistry.add("components", component);
    return component;
  },

  createTemplate(name, structure = {}) {
    const template = createTemplate(name, structure);
    StudioRegistry.add("templates", template);
    return template;
  },

  createStylePack(name, rules = {}) {
    const stylePack = createStylePack(name, rules);
    StudioRegistry.add("styles", stylePack);
    return stylePack;
  }
};
