import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import "./index.css";
import Home from "./features/home/routes/Home";
import GetStarted from "./features/get-started/routes/GetStarted";
import Error from "./routes/Error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error/>,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            { path: "/get-started", element: <GetStarted /> },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
