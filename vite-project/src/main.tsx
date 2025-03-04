import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {registerSW} from "virtual:pwa-register"
import { App } from "./App";

registerSW()
const root = createRoot(document.getElementById("root") as Element);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);