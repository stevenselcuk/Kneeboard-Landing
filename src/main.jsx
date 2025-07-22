// src/main.jsx

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactGA from "react-ga4";

// Kendi component ve CSS'lerimizi import ediyoruz
import "./App.css"; // Dosya adınız "App.css" (büyük A ile) olduğu için böyle olmalı
import App from "./App.jsx";

// Google Analytics'i başlat
const GA_MEASUREMENT_ID = "G-NRCHSQEMTF";
ReactGA.initialize(GA_MEASUREMENT_ID);

// React uygulamasını HTML'deki 'root' elementine render et
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
