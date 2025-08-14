import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Provider } from "react-redux";
import { store } from "./app/store/Store";
import "./app/css/index.css";
import HomePage from "./app/HomePage";
import FavoritesPage from "./app/pages/FavoritesPage";
import PostPage from "./app/pages/PostPage";
import UserPage from "./app/pages/UserPage";

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
        element: <FavoritesPage />,
    },
    {
        path: "posts/",
        children: [
            { index: true, element: <HomePage /> },
            { path: ":postId", element: <PostPage /> },
        ],
    },
    {
        path: "users/", //TODO fix links recursion "users/posts/1"
        children: [
            { index: true, element: <HomePage /> }, //TODO UsersPage? Error? HomePage?
            { path: ":userId", element: <UserPage /> },
        ],
    },
]);
//TODO Auth and favorites by authorized users(local for first step)
createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </StrictMode>
);
