import React from "react";
import { createMemoryHistory, createBrowserHistory } from "history";
import ReactDOM from "react-dom";
import App from "./App";

// Mount function to start the app
const mount = (el, { onNavigate, defaultHistory, initialPath }) => {
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath],
    });
  history.listen(onNavigate);

  ReactDOM.render(<App history={history} />, el);

  return {
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname } = history.location;

      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    },
  };
};

// If we are in development mode, we want to use the Mount immediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_auth-dev-root");
  if (devRoot) {
    mount(devRoot, {
      onNavigate: () => {},
      defaultHistory: createBrowserHistory(),
    });
  }
}

// If we are in production mode, we want to export the Mount function
export { mount };
