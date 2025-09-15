import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);
function MiddleImageZoomSection() {
  const sectionRef = useRef(null);
  const cornerImageRef = useRef([]);
  const centerCardRef = useRef(null);
  const centerDivRef = useRef(null);
  const centerCardContentRef = useRef(null);
  const addToRefs = (el) => {
    if (el && !cornerImageRef.current.includes(el)) {
      cornerImageRef.current.push(el);
    }
  };
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=5000",
          scrub: 2,
          pin: true,
        },
      });
      tl.to(cornerImageRef.current, {
        scale: "0.7",
        duration: 2,
        ease: "none",
      })
        .to(
          centerDivRef.current,
          {
            minWidth: "100%",
            duration: 5,
            ease: "none",
          },
          0
        )
        .to(
          centerCardRef.current,
          {
            minWidth: "100vw",
            minHeight: "100vh",
            duration: 5,
            ease: "none",
          },
          0
        )
        .to(centerCardRef.current, {
          borderRadius: "0px",
          ease: "none",
        })
        .to(centerCardContentRef.current, {
          opacity: 1,
          duration: 2,
          ease: "none",
        })
        .to({}, { duration: 2 });
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  return (
    <div
      ref={sectionRef}
      className="my-10 w-screen h-screen overflow-hidden flex justify-center gap-x-[2vw] gap-y-[2vh]"
    >
      <div className="overflow-hidden min-w-[45vw] h-full flex flex-col justify-center items-center gap-y-[2vh]">
        <img
          ref={addToRefs}
          src="https://cdn.prod.website-files.com/675c8e48ca0e0fb5ab421239/67f9c31841d04e272a85216f_bg-cloud-63.avif"
          alt=""
          className="min-h-[45vh] w-full rounded-4xl"
        />
        <img
          src="https://cdn.prod.website-files.com/675c8e48ca0e0fb5ab421239/67f75435261184f880702d40_bg-cloud-43.avif"
          alt=""
          className="min-h-[45vh] w-full rounded-4xl"
        />
        <img
          ref={addToRefs}
          src="https://cdn.prod.website-files.com/675c8e48ca0e0fb5ab421239/67f9c6586f1024288c4e6ed8_bg-cloud-64.avif"
          alt=""
          className="min-h-[45vh] w-full rounded-4xl"
        />
      </div>
      <div
        ref={centerDivRef}
        className="min-w-[45vw] h-full flex flex-col justify-center items-center gap-y-[2vh]"
      >
        <img
          ref={addToRefs}
          src="https://cdn.prod.website-files.com/675c8e48ca0e0fb5ab421239/67f9d38f41d04e272a8d2926_bg-cloud-66.avif"
          alt=""
          className="h-[45vh] w-full rounded-4xl"
        />
        <div
          ref={centerCardRef}
          className="min-h-[60vh] w-full relative lg:-mt-[1px] overflow-hidden z-40 rounded-4xl bg-[url(https://cdn.prod.website-files.com/675c8e48ca0e0fb5ab421239/67f9c6586f1024288c4e6ed8_bg-cloud-64.avif)] bg-center bg-cover bg-no-repeat"
        >
          <div
            ref={centerCardContentRef}
            className="opacity-0 bg-black/70 w-full h-full flex flex-col justify-center items-center text-center text-white font-bdogrotesk-vf"
          >
            <span className="text-sm px-4 py-1.5 rounded-full bg-black/20 text-gray-200">
              Personal Growth
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold max-w-3xl mt-6">
              AI that understands your emotions
            </h1>
          </div>
        </div>
        <img
          ref={addToRefs}
          src="https://cdn.prod.website-files.com/675c8e48ca0e0fb5ab421239/67f7ee4df847a9fb30978659_bg-cloud-54.avif"
          alt=""
          className="h-[45vh] w-full rounded-4xl"
        />
      </div>
      <div className="overflow-hidden min-w-[45vw] h-full *:rounded-4xl flex flex-col items-center gap-y-[2vh]">
        <img
          ref={addToRefs}
          src="https://cdn.prod.website-files.com/675c8e48ca0e0fb5ab421239/67f1eff7704d86833488bc4e_bg-cloud-17.avif"
          alt=""
          className="min-h-[45vh] w-full rounded-4xl"
        />
        <img
          src="https://cdn.prod.website-files.com/675c8e48ca0e0fb5ab421239/67f89444d1d997a80bbd9c44_bg-cloud-61.avif"
          alt=""
          className="min-h-[45vh] w-full rounded-4xl"
        />
        <img
          ref={addToRefs}
          src="https://cdn.prod.website-files.com/675c8e48ca0e0fb5ab421239/67f288caa25e4431e4d74500_bg-cloud-30.avif"
          alt=""
          className="min-h-[45vh] w-full rounded-4xl"
        />
      </div>
    </div>
  );
}

export default MiddleImageZoomSection;
