import ErrorBoundary from "@/components/ErrorBoundary";
import { Spinner } from "@/components/ui/kibo-ui/spinner";
import Trackker from "@/utils/tracker";
import AboutPage from "Pages/About/";
import ContactPage from "Pages/Contact/";
import HomePage from "Pages/Home/";
import Container from "Pages/index.jsx";
import SupportPage from "Pages/Support/";
import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
