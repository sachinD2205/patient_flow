import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Layout from "./components/Layout ";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Profiles from "./components/Profiles";
import GeneralInformation from "./components/GeneralInformation";
import MedicalHistory from "./components/MedicalHistory";
import ConsultationNotes from "./components/ConsultationNotes";
import ActionPlans from "./components/ActionPlans";
import Files from "./components/Files";
import WearableStats from "./components/WearableStats";
import PatientInformation from "./components/PatientInformation";

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
        children: [
          {
            path: "PatientInformation",
            element: <PatientInformation />,
            errorElement: <ErrorPage />,
          },
          {
            path: "GeneralInformation",
            element: <GeneralInformation />,
            errorElement: <ErrorPage />,
          },
          {
            path: "MedicalHistory",
            element: <MedicalHistory />,
            errorElement: <ErrorPage />,
          },
          {
            path: "ConsultationNotes",
            element: <ConsultationNotes />,
            errorElement: <ErrorPage />,
          },
          {
            path: "ActionPlans",
            element: <ActionPlans />,
            errorElement: <ErrorPage />,
          },
          {
            path: "Files",
            element: <Files />,
            errorElement: <ErrorPage />,
          },
          {
            path: "WearableStats",
            element: <WearableStats />,
            errorElement: <ErrorPage />,
          },
        ],
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
