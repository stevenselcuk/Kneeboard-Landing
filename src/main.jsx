import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactGA from "react-ga4";
import "./app.css";
import App from "./app.jsx";
const GA_MEASUREMENT_ID = "G-NRCHSQEMTF";
ReactGA.initialize(GA_MEASUREMENT_ID);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
