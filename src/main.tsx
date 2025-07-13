import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./app/css/index.css";
import HomePage from "./app/HomePage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        
    },
        {
        path: "/home",
        element: <HomePage />,
    },
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
