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
      className="min-h-screen min-w-screen bg-[#e7e7e7] md:flex items-center justify-between lg:justify-around px-6 gap-6 py-10 md:py-0"
    >
      <div className="z-40 w-[26vw] h-[55vh] flex gap-6">
        {images.map((image, idx) => (
          <img
            key={idx}
            ref={addToRefs}
            src={image}
            alt=""
            className="rounded-3xl object-cover w-full h-full -ml-20 lg:ml-0"
            style={{ zIndex: `${30 - idx}` }}
          />
        ))}
      </div>

      <div
        ref={textContentRef}
        className="flex justify-end font-bdogrotesk-vf translate-x-40 opacity-0 w-full text-center md:text-start md:max-w-[40vw]"
      >
        <h2 className="text-2xl md:text-7xl font-bold text-gray-">
          Your mental wellness journey starts now
        </h2>
      </div>
    </div>
  );
}

export default StickyCardStack;
