import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const images = [
  {
    up: "https://cdn.prod.website-files.com/675c8e48ca0e0fb5ab421239/67f9d38f41d04e272a8d2926_bg-cloud-66.avif",
    down: "https://cdn.prod.website-files.com/675c8e48ca0e0fb5ab421239/67eb1a0a4bd9bc20eac17b0e_ChatGPT%20Image%2031%20de%20mar.%20de%202025%2C%2019_20_50.avif",
  },
  {
    up: "https://cdn.prod.website-files.com/675c8e48ca0e0fb5ab421239/67fd38497b98d7e4fade0fe9_bg-cloud-78.avif",
    down: "https://cdn.prod.website-files.com/675c8e48ca0e0fb5ab421239/67eb2202ed6a24da2fa19fda_ChatGPT%20Image%2031%20de%20mar.%20de%202025%2C%2020_12_59.avif",
  },
  {
    up: "https://cdn.prod.website-files.com/675c8e48ca0e0fb5ab421239/67f7f5b376f614a742795320_bg-cloud-59.avif",
    down: "https://cdn.prod.website-files.com/675c8e48ca0e0fb5ab421239/67f9d1918a5e58f63b70f875_8cf9752d885baa80e26ad73cbe4f0344.avif",
  },
  {
    up: "https://cdn.prod.website-files.com/675c8e48ca0e0fb5ab421239/67f89444d1d997a80bbd9c44_bg-cloud-61.avif",
    down: "https://cdn.prod.website-files.com/675c8e48ca0e0fb5ab421239/67f7e0a2f0f48f88d3a1176f_close-up-nerves-yellow-leaf.avif",
  },
  {
    up: "https://cdn.prod.website-files.com/675c8e48ca0e0fb5ab421239/67f7dd03f980a473e4e9ff40_bg-cloud-49.avif",
    down: "https://cdn.prod.website-files.com/675c8e48ca0e0fb5ab421239/67ee1b85995266773abd081b_img-01.avif",
  },
  {
    up: "https://cdn.prod.website-files.com/675c8e48ca0e0fb5ab421239/67f75435261184f880702d40_bg-cloud-43.avif",
    down: "https://cdn.prod.website-files.com/675c8e48ca0e0fb5ab421239/67f7e0d700996d64eb9d235c_bg-cloud-51.avif",
  },
  {
    up: "https://cdn.prod.website-files.com/675c8e48ca0e0fb5ab421239/67f896ecf9932c23507a4961_bg-cloud-62.avif",
    down: "https://cdn.prod.website-files.com/675c8e48ca0e0fb5ab421239/67f7ee6f6bc08ecfebcddf85_bg-cloud-55.avif",
  },
];

const Card = React.forwardRef(({ image }, ref) => (
  <div
    ref={ref}
    className="h-[120vh] lg:h-[100vw] w-full flex flex-col justify-between absolute items-center"
  >
    <div className="h-[28vw] md:h-[16vw] aspect-square">
      <img
        src={image.up}
        className="size-full object-cover rounded-2xl lg:rounded-4xl"
        alt=""
      />
    </div>
    <div className="h-[28vw] md:h-[16vw] aspect-square rotate-180">
      <img
        src={image.down}
        className="size-full object-cover rounded-2xl lg:rounded-4xl"
        alt=""
      />
    </div>
  </div>
));

const CircleCardAnimation = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const textContentRef = useRef(null);
  const imageDivsRef = useRef([]);

  const addToRefs = (el) => {
    if (el && !imageDivsRef.current.includes(el)) {
      imageDivsRef.current.push(el);
    }
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const phone = window.innerWidth < 768;
      const halfLength = Math.floor(imageDivsRef.current.length / 2);
      const firstHalf = imageDivsRef.current.slice(0, halfLength);
      const secondHalf = imageDivsRef.current.slice(halfLength + 1);

      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=3000",
            scrub: 2,
            pin: true,
          },
        })
        .fromTo(
          firstHalf,
          {
            translateX: (i) =>
              `-${phone ? i * 28.5 + 28.5 : i * 16.5 + 16.5}vw`,
          },
          {
            rotate: (i) => -(i * 25.7 + 25.7),
            translateX: 0,
            duration: 1,
          }
        )
        .fromTo(
          secondHalf,
          {
            translateX: (i) => `${phone ? i * 28.5 + 28.5 : i * 16.5 + 16.5}vw`,
          },
          {
            rotate: (i) => i * 25.7 + 25.7,
            translateX: 0,
            duration: 1,
          },
          0
        )
        .to(containerRef.current, {
          scale: 0.6,
          duration: 6,
          rotate: -180,
        })
        .to(textContentRef.current, {
          opacity: 1,
          top: "50%",
          duration: 1,
          delay: -1,
          ease: "none",
        });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-screen min-h-screen relative overflow-x-hidden"
    >
      <div
        ref={containerRef}
        className="w-full h-[120vh] lg:h-[100vw] flex justify-center gap-2 relative z-10"
      >
        {images.slice(0, Math.floor(images.length / 2)).map((image, index) => (
          <Card key={index} image={image} ref={addToRefs} />
        ))}
        <Card image={images[Math.floor(images.length / 2)]} ref={addToRefs} />
        {images.slice(Math.ceil(images.length / 2)).map((image, index) => (
          <Card key={index} image={image} ref={addToRefs} />
        ))}
      </div>
      <div
        ref={textContentRef}
        className="z-40 opacity-0 text-center max-w-[38vw] mx-auto absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-700 flex flex-col justify-center items-center h-full -mt-10"
      >
        <span className="text-sm px-4 py-1.5 rounded-full bg-gray-200">
          Personal Growth
        </span>
        <div className="text-2xl md:text-5xl font-semibold lg:leading-[60px] mt-3 lg:mt-6">
          A gentle space to understand yourself
        </div>
      </div>
    </section>
  );
};

export default CircleCardAnimation;
