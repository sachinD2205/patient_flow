import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Layout from "./components/Layout ";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Profiles from "./components/Profiles";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "profile",
        element: <Profiles />,
        errorElement: <ErrorPage />,
      },
      {
        path: "about",
        element: <About />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

export default router;
