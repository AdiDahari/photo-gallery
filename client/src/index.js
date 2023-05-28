/**
 * The entry point of the application.
 * @module index
 *
 * @author Adi Dahari
 */

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";

/**
 * The root element where the application is rendered.
 * @type {Object}
 */
const root = ReactDOM.createRoot(document.getElementById("root"));

/**
 * Render the application within the root element.
 */
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
