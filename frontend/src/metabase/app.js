// Use of classList.add and .remove in Background and FitViewPort Hocs requires
// this polyfill so that those work in older browsers
import "classlist-polyfill";
import "core-js/stable";
// This is conditionally aliased in the webpack config.
// If EE isn't enabled, it loads an empty file.
import "ee-plugins";
import { createHistory } from "history";
import "number-to-locale-string";
import React from "react";
import { DragDropContextProvider } from "react-dnd";
// drag and drop
import HTML5Backend from "react-dnd-html5-backend";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// router
import { Router, useRouterHistory } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";
import "regenerator-runtime/runtime";
import { ThemeProvider } from "styled-components";

import { createTracker } from "metabase/lib/analytics";
import api from "metabase/lib/api";
// NOTE: why do we need to load this here?
import "metabase/lib/colors";
import { initializeEmbedding } from "metabase/lib/embed";
// set the locale before loading anything else
import { loadLocalization } from "metabase/lib/i18n";
// If enabled this monkeypatches `t` and `jt` to return blacked out
// strings/elements to assist in finding untranslated strings.
import "metabase/lib/i18n-debug";
import MetabaseSettings from "metabase/lib/settings";
// eslint-disable-line import/no-unresolved
import { PLUGIN_APP_INIT_FUCTIONS } from "metabase/plugins";
// NOTE: this loads all builtin plugins
import "metabase/plugins/builtin";
import { refreshSiteSettings } from "metabase/redux/settings";
import registerVisualizations from "metabase/visualizations/register";

import { getStore } from "./store";

// remove trailing slash
const BASENAME = window.MetabaseRoot.replace(/\/+$/, "");

api.basename = BASENAME;

// eslint-disable-next-line react-hooks/rules-of-hooks
const browserHistory = useRouterHistory(createHistory)({
  basename: BASENAME,
});

const theme = {
  space: [4, 8, 16, 32, 64, 128],
};

function _init(reducers, getRoutes, callback) {
  const store = getStore(reducers, browserHistory);
  const routes = getRoutes(store);
  const history = syncHistoryWithStore(browserHistory, store);
  createTracker(store);

  let root;
  ReactDOM.render(
    <Provider store={store} ref={ref => (root = ref)}>
      <DragDropContextProvider backend={HTML5Backend} context={{ window }}>
        <ThemeProvider theme={theme}>
          <Router history={history}>{routes}</Router>
        </ThemeProvider>
      </DragDropContextProvider>
    </Provider>,
    document.getElementById("root"),
  );

  registerVisualizations();

  initializeEmbedding(store);

  store.dispatch(refreshSiteSettings());

  MetabaseSettings.on("user-locale", async locale => {
    // reload locale definition and site settings with the new locale
    await Promise.all([
      loadLocalization(locale),
      store.dispatch(refreshSiteSettings({ locale })),
    ]);
    // force re-render of React application
    root.forceUpdate();
  });

  PLUGIN_APP_INIT_FUCTIONS.forEach(init => init({ root }));

  window.Metabase = window.Metabase || {};
  window.Metabase.store = store;
  window.Metabase.settings = MetabaseSettings;

  if (callback) {
    callback(store);
  }
}

export function init(...args) {
  if (document.readyState !== "loading") {
    _init(...args);
  } else {
    document.addEventListener("DOMContentLoaded", () => _init(...args));
  }
}
