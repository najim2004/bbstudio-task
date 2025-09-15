import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import AnimatedCircularGallery from "./components/circle-card-animation/CircleCardAnimation";
import FullScreenZoomEffect from "./components/full-screen-zoom-effect/FullScreenZoomEffect";
import StickyCardStack from "./components/sticky-card-stack/StickyCardStack";
import AnimatedCarousel from "./components/animated-carousel/AnimatedCarousel";
import MiddleImageZoomSection from "./components/middle-image-zoom-section/MiddleImageZoomSection";
import FAQSection from "./components/faq-section/FAQSection";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="w-full h-full relative">
      <div className="sticky top-0 left-0 pt-3 px-8 lg:px-0 z-50">
        <Navbar />
      </div>
      <Hero />
      <AnimatedCircularGallery />
      <StickyCardStack />
      <FullScreenZoomEffect />
      <MiddleImageZoomSection />
      <AnimatedCarousel />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;
