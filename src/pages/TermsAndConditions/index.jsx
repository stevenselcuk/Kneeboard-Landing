import Helmet from "react-helmet";
import ErrorBoundary from "../../components/ErrorBoundary";

export default function TermsAndConditions() {
  return (
    <ErrorBoundary>
      <Helmet>
        <title>
          Checklist - Build and Deliver QRH, AFM or checklist to cockpit iPad
        </title>
        <meta name="description" content="Checklist App for Pilots" />
        <link rel="canonical" href="https://cockpitcheck.com" />
      </Helmet>
      <div className="main-wrapper">Terms and Conditions</div>
    </ErrorBoundary>
  );
}
