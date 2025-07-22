// src/main.jsx

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactGA from "react-ga4";

// Kendi component ve CSS'lerimizi import ediyoruz
import "./App.css";
import App from "./App.jsx";

// Google Analytics'i başlat
const GA_MEASUREMENT_ID = "G-T6H7HQ70XN";
ReactGA.initialize(GA_MEASUREMENT_ID);

// React uygulamasını HTML'deki 'root' elementine render et
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
