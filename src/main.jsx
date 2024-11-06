import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./input.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AroundMe from "./components/AroundMe.jsx";
import About from "./components/About.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/src/components/AroundMe.jsx",
    element: <AroundMe />,
  },
  {
    path: "/src/components/About.jsx",
    element: <About />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);