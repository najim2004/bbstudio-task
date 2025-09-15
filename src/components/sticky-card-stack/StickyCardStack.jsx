import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const images = [
  "https://cdn.prod.website-files.com/675c8e48ca0e0fb5ab421239/67ecae62618ad39b905b8ec9_mh-square.avif",
  "https://cdn.prod.website-files.com/675c8e48ca0e0fb5ab421239/67f1ee4caf6e43269d97b514_bg-cloud-16-p-1600.avif",
  "https://cdn.prod.website-files.com/675c8e48ca0e0fb5ab421239/67f1f28ebca5528238342ea0_bg-cloud-20.avif",
  "https://cdn.prod.website-files.com/675c8e48ca0e0fb5ab421239/67f1eff7704d86833488bc4e_bg-cloud-17.avif",
  "https://cdn.prod.website-files.com/675c8e48ca0e0fb5ab421239/67eb223bbf4303942de155e6_ChatGPT%20Image%2031%20de%20mar.%20de%202025%2C%2020_15_50.avif",
];

function StickyCardStack() {
  const containerRef = useRef(null);
  const textContentRef = useRef(null);
  const imgRefs = useRef([]);
  imgRefs.current = [];

  const addToRefs = (el) => {
    if (el && !imgRefs.current.includes(el)) {
      imgRefs.current.push(el);
    }
  };

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=2000",
          scrub: true,
          pin: true,
        },
      });
      tl.to(imgRefs.current.slice(1), {
        x: (i) => `-${97 * (i + 1)}%`,
        margin: 0,
        ease: "none",
      })
        .fromTo(
          imgRefs.current[0],
          {
            marginLeft: 0,
          },
          {
            marginLeft: 0,
          },
          0
        )
        .to(
          textContentRef.current,
          {
            x: 0,
            opacity: 1,
            ease: "none",
          },
          0
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-screen w-screen bg-[#e7e7e7] flex flex-col md:flex-row items-center justify-center md:justify-around px-6 gap-6 py-10 md:py-0 overflow-x-hidden"
    >
      <div className="z-40 w-[80vw] md:w-[26vw] h-[55vh] flex gap-2 lg:gap-6">
        {images.map((image, idx) => (
          <img
            key={idx}
            ref={addToRefs}
            src={image}
            alt=""
            className="rounded-3xl object-cover w-full h-full -ml-20 md:ml-0"
            style={{ zIndex: `${30 - idx}` }}
          />
        ))}
      </div>

      <div
        ref={textContentRef}
        className="flex justify-end font-bdogrotesk-vf translate-x-40 opacity-0 w-full md:max-w-[40vw] ml-10 md:ml-0"
      >
        <h2 className="text-4xl md:text-7xl font-bold text-gray-700">
          Your mental wellness journey starts now
        </h2>
      </div>
    </div>
  );
}

export default StickyCardStack;
