import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import AnimatedCircularGallery from "./components/CircleCardAnimation/CircleCardAnimation";
import FullScreenZoomEffect from "./components/FullScreenZoomEffect/FullScreenZoomEffect";

function App() {
  return (
    <div className="w-full h-full relative">
      <div className="sticky top-0 left-0 pt-3">
        <Navbar />
      </div>
      <Hero />
      <AnimatedCircularGallery />
      <FullScreenZoomEffect />
    </div>
  );
}

export default App;
