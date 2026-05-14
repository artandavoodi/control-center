export function bindRuntimeConsumers(runtimeEventBus, state) {

  runtimeEventBus.on("TOKEN_UPDATED", (payload) => {
    state.tokens = { ...state.tokens, ...payload };
  });

  runtimeEventBus.on("THEME_CHANGED", (payload) => {
    state.theme = payload;
  });

  runtimeEventBus.on("ICON_REGISTERED", (payload) => {
    state.icons = [...(state.icons || []), payload];
  });

  runtimeEventBus.on("STUDIO_SYNC", (payload) => {
    state.studio = payload;
  });

}
