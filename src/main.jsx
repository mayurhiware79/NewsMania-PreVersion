import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import CreateTrip from "./create-trip/index.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/custom/Header.jsx";
import { Toaster } from "@/components/ui/sonner.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Viewtrip from "./view-trip/[tripid]/index.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";

//using react-router-dom for creating diff routes on pages
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/create-trip",
    element: <CreateTrip />,
  },
  {
    path: "/view-trip/:tripid",
    element: <Viewtrip />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>
      <Toaster />
      <Header />
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  </StrictMode>
);
