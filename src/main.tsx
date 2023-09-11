import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import App from "./components/App.tsx";
import { AppStateProvider } from "./state/AppStateContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppStateProvider>
      <App />
    </AppStateProvider>
  </React.StrictMode>
);
