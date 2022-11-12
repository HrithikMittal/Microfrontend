import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Mount function to start the app
const mount = (el) => {
  ReactDOM.render(<App />, el);
};

// If we are in development mode, we want to use the Mount immediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");
  if (devRoot) {
    mount(devRoot);
  }
}

// If we are in production mode, we want to export the Mount function
export { mount };
