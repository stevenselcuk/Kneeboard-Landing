import ErrorBoundary from "@/components/ErrorBoundary";
import { Spinner } from "@/components/ui/kibo-ui/spinner";
import Trackker from "@/utils/tracker";
import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Container = lazy(() => import("./pages/index.jsx"));
const HomePage = lazy(() => import("./pages/home/index.jsx"));
const AboutPage = lazy(() => import("./pages/about/index.jsx"));
const ContactPage = lazy(() => import("./pages/contact/index.jsx"));
const SupportPage = lazy(() => import("./pages/support/index.jsx"));

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
