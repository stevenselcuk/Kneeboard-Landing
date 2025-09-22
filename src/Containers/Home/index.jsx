import ErrorBoundary from "@/components/ErrorBoundary";
import HeroSection from "@/Containers/Home/Components/hero-section";
import { animate, stagger } from "motion";
import { splitText } from "motion-plus";
import { memo, useEffect, useRef } from "react";
import Helmet from "react-helmet";
import CallToAction from "./Components/call-to-action";
import Faq4 from "./Components/faqs-4";
import Features11 from "./Components/features-11";
import Features12 from "./Components/features-12";
import Features6 from "./Components/features-6";
import Features8 from "./Components/features-8";
import Features9 from "./Components/features-9";
import Testimonals from "./Components/testimonials";
const LandingPage = () => {
  const containerRef = useRef(null);
  const featuresRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
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
          Kneeboard - In-flight, brief and debrief note taking iPad App for your
          Electronic Flight Bag
        </title>
        <meta
          name="description"
          content="Kneeboard iOS App for Pilots, Electronic Flight Bag App"
        />
        <link rel="canonical" href="https://kneeboard.tabbythecat.com" />
      </Helmet>

      <HeroSection onScrollToFeatures={() => scrollToSection(featuresRef)} />
      <Features12 featuresRef={featuresRef} />
      <Features6 />
      <Testimonals />
      <Features8 />
      <Features9 />
      <Faq4 />
      <CallToAction />
      <Features11 />
    </ErrorBoundary>
  );
};

export default memo(LandingPage);
