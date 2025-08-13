import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Provider } from "react-redux";
import { store } from "./app/store/Store";
import "./app/css/index.css";
import HomePage from "./app/HomePage";
import FavoritesPage from "./app/pages/FavoritesPage"
import PostPage from "./app/pages/PostPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        
    },
    {
        path: "/home",
        element: <HomePage />,
    },
    {
        path: "/favorites",
        element: <FavoritesPage />
    },
    {
        path: "posts/",
        children: [
            {index: true, element: <HomePage/>},
            {path: ":postId", element: <PostPage/>}
        ]
    }
]);
//TODO Auth and favorites by authorized users(local for first step)
createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </StrictMode>
);
