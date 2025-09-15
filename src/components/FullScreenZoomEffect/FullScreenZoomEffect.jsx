import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

function FullScreenZoomEffect() {
  const sectionRef = useRef(null);

  const whiteBg = useRef(null);

  const upperLayerBgImg = useRef(null);

  const textContentDiv = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          start: "top top",
          end: "+=2000",
          scrub: 1,
        },
      });

      tl.from(upperLayerBgImg.current, {
        border: "0px",
        duration: 0.3,
        delay: 0.7,
      });
      tl.from(upperLayerBgImg.current, {
        width: "25vw",
        duration: 3,
      });
      tl.addLabel("fadeIn")
        .from(whiteBg.current, { opacity: 0, duration: 2 }, "fadeIn")
        .from(textContentDiv.current, { opacity: 0, duration: 1 }, "fadeIn");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="h-screen w-screen relative flex justify-center items-center"
    >
      {/* 1st or parent bg image */}

      <div className="relative h-full w-full flex justify-center items-center bg-[url('https://cdn.prod.website-files.com/675c8e48ca0e0fb5ab421239/67f9e24c2d1b01e097179829_bg-cloud-71.avif')] bg-no-repeat bg-cover bg-center">
        <div
          ref={whiteBg}
          className="bg-white absolute top-0 left-0 h-full w-full"
        ></div>

        {/* 2nd bg image */}

        <div
          ref={upperLayerBgImg}
          className="max-w-[90vw] max-h-[80vh] w-full h-full rounded-3xl border-2 border-white relative overflow-hidden flex justify-center items-center"
        >
          <img
            src="https://cdn.prod.website-files.com/675c8e48ca0e0fb5ab421239/67f9e24c2d1b01e097179829_bg-cloud-71.avif"
            alt=""
            className="min-h-screen min-w-screen object-cover object-"
          />
          <div
            ref={textContentDiv}
            className="bg-white absolute bottom-10 left-10 rounded-3xl w-[25vw] h-[25vh] p-10 font-bdogrotesk-vf"
          >
            <span className="text-sm px-4 py-1.5 rounded-full bg-gray-200">
              Personal Growth
            </span>

            <h2 className="text-4xl font-semibold text-gray-700 mt-6">
              Feel more human <br />
              every day
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullScreenZoomEffect;
