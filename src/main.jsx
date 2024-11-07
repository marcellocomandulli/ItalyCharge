import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./input.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AroundMe from "./components/pages/views/features/AroundMe.jsx";
import About from "./components/pages/views/features/About.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/aroundme",
    element: <AroundMe />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
