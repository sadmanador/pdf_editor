import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/router/router.jsx";
import DataContext from "./contexts/DataContext/DataContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataContext>
      <RouterProvider router={router} />
    </DataContext>
  </React.StrictMode>
);
