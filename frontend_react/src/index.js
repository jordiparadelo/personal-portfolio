import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
// Context
import { ClientProvider } from "./context/ClientContext";
// Styles
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ClientProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ClientProvider>
);
