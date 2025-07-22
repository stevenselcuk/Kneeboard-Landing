// src/App.jsx

import ErrorBoundary from "@/components/ErrorBoundary";
import { Spinner } from "@/components/ui/kibo-ui/spinner";
import Trackker from "@/utils/tracker";
import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Sayfaları "lazy loading" ile import et (performans için)
// Not: Dosya listende "Pages" değil "pages" (küçük harfle) vardı, ona göre düzelttim.
const Container = lazy(() => import("./pages/Container")); // Bu dosyanın pages klasöründe olduğunu varsayıyorum
const HomePage = lazy(() => import("./pages/Home"));
const AboutPage = lazy(() => import("./pages/About"));
const ContactPage = lazy(() => import("./pages/Contact"));
const SupportPage = lazy(() => import("./pages/About")); // Dikkat: support ve about aynı sayfayı gösteriyor

export default function App() {
  return (
    <ErrorBoundary>
      <Suspense
        fallback={
          // JSX içinde "class" yerine "className" kullanılır. Bunu da düzelttim.
          <div className="grid place-items-center h-screen">
            <Spinner key="1" variant={"ellipsis"} />
          </div>
        }
      >
        <BrowserRouter>
          <Trackker />
          <Routes>
            <Route path="/" element={<Container />}>
              <Route index element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/support" element={<SupportPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </ErrorBoundary>
  );
}
