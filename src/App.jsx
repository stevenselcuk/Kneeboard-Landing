import ErrorBoundary from "@/components/ErrorBoundary";
import { Spinner } from "@/components/ui/kibo-ui/spinner";
import Trackker from "@/utils/tracker";
import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Container = lazy(() => import("./Pages/index.jsx"));
const HomePage = lazy(() => import("./Pages/Home/index.jsx"));
const AboutPage = lazy(() => import("./Pages/About/index.jsx"));
const ContactPage = lazy(() => import("./Pages/Contact/index.jsx"));
const SupportPage = lazy(() => import("./Pages/About/index.jsx"));

export default function App() {
  return (
    <ErrorBoundary>
      <Suspense
        fallback={
          <div class="grid place-items-center h-screen">
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
