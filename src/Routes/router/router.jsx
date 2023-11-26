import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main/Main";
import Crop from "../../pages/Crop/Crop";
import Home from "../../pages/Home/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/crop",
        element: <Crop />,
      },
    ],
  },
]);
