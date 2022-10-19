import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "App";
// Context
import { ClientProvider } from "context/ClientContext";
// Styles
import "index.scss";
// Fonts
import 'assets/fonts/ClashDisplay-Bold.ttf'
import 'assets/fonts/ClashDisplay-Regular.ttf'
import 'assets/fonts/ManuscribeFree-Italic.otf'
import 'assets/fonts/ManuscribeFree-Regular.otf'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ClientProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ClientProvider>
);
