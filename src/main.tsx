import React from "react";
import ReactDOM from "react-dom/client";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import "./index.css";

import App from "./components/App.tsx";
import { AppStateProvider } from "./state/AppStateContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DndProvider backend={HTML5Backend}>
      <AppStateProvider>
        <App />
      </AppStateProvider>
    </DndProvider>
  </React.StrictMode>
);
