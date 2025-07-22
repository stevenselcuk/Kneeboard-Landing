import Helmet from "react-helmet";
import ErrorBoundary from "../../components/ErrorBoundary";
import ContentOne from "./Components/content-1";
import ContentTwo from "./Components/content-2";
import ContentThree from "./Components/content-3";
import ContentFour from "./Components/content-4";
import ContentFive from "./Components/content-5";
import ContentSix from "./Components/content-6";
import ContentSeven from "./Components/content-7";
export default function About() {
  return (
    <ErrorBoundary>
      <Helmet>
        <title>
          Checklist - Build and Deliver QRH, AFM or checklist to cockpit iPad
        </title>
        <meta name="description" content="Checklist App for Pilots" />
        <link rel="canonical" href="https://cockpitcheck.com" />
      </Helmet>
      <div className="main-wrapper">
        <ContentOne />
        <ContentTwo />
        <ContentThree />
        <ContentFour />
        <ContentFive />
        <ContentSix />
        <ContentSeven />
      </div>
    </ErrorBoundary>
  );
}
