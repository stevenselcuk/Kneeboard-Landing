import ErrorBoundary from "@/components/ErrorBoundary";
import { Spinner } from "@/components/ui/kibo-ui/spinner";
import AboutPage from "@/Containers/About/";
import ContactPage from "@/Containers/Contact/";
import HomePage from "@/Containers/Home/";
import Container from "@/Containers/index.jsx";
import TermsPage from "@/Containers/Legal/TermsPage";
import SupportPage from "@/Containers/Support/";
import Trackker from "@/utils/tracker";
import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivacyPolicyPage from "./Containers/Legal/PrivacyPolicyPage";

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
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/privacy" element={<PrivacyPolicyPage />} />
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
