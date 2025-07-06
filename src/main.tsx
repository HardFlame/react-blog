import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./app/css/index.css";
import App from "./app/MainPage";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <App />
    </StrictMode>
);
