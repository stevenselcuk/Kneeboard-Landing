import ErrorBoundary from "@/components/ErrorBoundary";
import { Spinner } from "@/components/ui/kibo-ui/spinner";
import Trackker from "@/utils/tracker";
import { Suspense, lazy } from "react"; // lazy'yi import et
import { BrowserRouter, Route, Routes } from "react-router-dom";

// --- SAYFALARI LAZY OLARAK TANIMLA ---
const Container = lazy(() => import("@/Containers/index.jsx"));
const HomePage = lazy(() => import("@/Containers/Home/"));
const AboutPage = lazy(() => import("@/Containers/About/"));
const ContactPage = lazy(() => import("@/Containers/Contact/"));
const TermsPage = lazy(() => import("@/Containers/Legal/TermsPage"));
const PrivacyPolicyPage = lazy(() =>
  import("./Containers/Legal/PrivacyPolicyPage")
); // Bu path'i kontrol et, "./" ile başlıyor
const SupportPage = lazy(() => import("@/Containers/Support/"));

export default function App() {
  return (
    <ErrorBoundary>
      {/* Suspense zaten vardı, harika! */}
      <Suspense
        fallback={
          <div className="grid place-items-center h-screen">
            {" "}
            {/* class'ı className yapalım :) */}
            <Spinner key="1" variant={"ellipsis"} />
          </div>
        }
      >
        <BrowserRouter>
          <Trackker />
          <Routes>
            {/* Container'ı lazy olarak yüklediğimiz için o da artık Suspense içinde */}
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
