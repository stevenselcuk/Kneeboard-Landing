import ErrorBoundary from "@/components/ErrorBoundary";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Outlet } from "react-router-dom";
const PageWrapper = () => {
  return (
    <ErrorBoundary>
      <div className="page-wrapper bg-grid-pattern">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </ErrorBoundary>
  );
};
export default PageWrapper;
