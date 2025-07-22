import ErrorBoundary from "@/components/ErrorBoundary";
import HeroSection from "@/Containers/Home/Components/hero-section";
import { memo, useEffect, useRef } from "react";
import Helmet from "react-helmet";
import CallToAction from "./Components/call-to-action";
import Faq4 from "./Components/faqs-4";
import Features11 from "./Components/features-11";
import Features12 from "./Components/features-12";
import Features6 from "./Components/features-6";
import Features8 from "./Components/features-8";
import Features9 from "./Components/features-9";

import { animate, stagger } from "motion";
import { splitText } from "motion-plus";
const LandingPage = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    document.fonts.ready.then(() => {
      if (!containerRef.current) return;

      // Hide the container until the fonts are loaded
      containerRef.current.style.visibility = "visible";

      const { words } = splitText(containerRef.current.querySelector("h1"));

      // Animate the words in the h1
      animate(
        words,
        { opacity: [0, 1], y: [10, 0] },
        {
          type: "spring",
          duration: 2,
          bounce: 0,
          delay: stagger(0.05),
        }
      );
    });
  }, []);
  return (
    <ErrorBoundary>
      <Helmet>
        <title>
          kneeboard - Best in-flight note taking iPad App for your Electronic
          Flight Bag
        </title>
        <meta
          name="description"
          content="Kneeboard iOS App for Pilots, Electronic Flight Bag App"
        />
        <link rel="canonical" href="https://kneeboard.tabbythecat.com" />
      </Helmet>

      <HeroSection />
      <Features11 />
      <Features12 />
      <Features6 />
      <Features8 />
      <Features9 />
      <Faq4 />
      <CallToAction />
    </ErrorBoundary>
  );
};

export default memo(LandingPage);
