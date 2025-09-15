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

  const addToRefs = (el) =>
    el &&
    !cornerImageRef.current.includes(el) &&
    cornerImageRef.current.push(el);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=5000",
            scrub: 2,
            pin: true,
          },
        })
        .to(cornerImageRef.current, { scale: 0.7, duration: 2, ease: "none" })
        .to(
          centerDivRef.current,
          { minWidth: "100%", duration: 5, ease: "none" },
          0
        )
        .to(
          centerCardRef.current,
          { minWidth: "100%", minHeight: "100%", duration: 5, ease: "none" },
          0
        )
        .to(centerCardRef.current, { borderRadius: 0, ease: "none" })
        .to(centerCardContentRef.current, {
          opacity: 1,
          duration: 2,
          ease: "none",
        })
        .to({}, { duration: 2 });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const Img = ({ src, refCb }) => (
    <div className="w-full">
      <img
        ref={refCb}
        src={src}
        alt=""
        className="h-[45vh] w-full rounded-4xl"
      />
    </div>
  );

  return (
    <div
      ref={sectionRef}
      className="my-10 w-screen h-screen overflow-hidden flex justify-center items-center gap-x-[2vw] gap-y-[2vh]"
    >
      <div className="overflow-hidden min-w-[45vw] h-full flex flex-col justify-center items-center gap-y-[2vh]">
        <Img
          refCb={addToRefs}
          src="https://cdn.prod.website-files.com/675c8e48ca0e0fb5ab421239/67f9c31841d04e272a85216f_bg-cloud-63.avif"
        />
        <Img src="https://cdn.prod.website-files.com/675c8e48ca0e0fb5ab421239/67f75435261184f880702d40_bg-cloud-43.avif" />
        <Img
          refCb={addToRefs}
          src="https://cdn.prod.website-files.com/675c8e48ca0e0fb5ab421239/67f9c6586f1024288c4e6ed8_bg-cloud-64.avif"
        />
      </div>
      <div
        ref={centerDivRef}
        className="min-w-[45vw] h-screen flex flex-col justify-center items-center gap-y-[2vh]"
      >
        <Img
          refCb={addToRefs}
          src="https://cdn.prod.website-files.com/675c8e48ca0e0fb5ab421239/67f9d38f41d04e272a8d2926_bg-cloud-66.avif"
        />
        <div
          ref={centerCardRef}
          className="min-h-[60vh] w-full relative lg:-mt-[1px] overflow-hidden z-40 rounded-4xl"
        >
          <img
            src="https://cdn.prod.website-files.com/675c8e48ca0e0fb5ab421239/67f9c6586f1024288c4e6ed8_bg-cloud-64.avif"
            alt=""
            className="w-screen h-screen absolute top-0 left-0 object-cover object-center z-10"
          />
          <div
            ref={centerCardContentRef}
            className="absolute top-0 left-0 z-30 opacity-0 bg-black/70 w-full h-full flex flex-col justify-center items-center text-center text-white font-bdogrotesk-vf"
          >
            <span className="text-sm px-4 py-1.5 rounded-full bg-black/20 text-gray-200">
              Personal Growth
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold max-w-3xl mt-6">
              AI that understands your emotions
            </h1>
          </div>
        </div>
        <Img
          refCb={addToRefs}
          src="https://cdn.prod.website-files.com/675c8e48ca0e0fb5ab421239/67f7ee4df847a9fb30978659_bg-cloud-54.avif"
        />
      </div>
      <div className="overflow-hidden min-w-[45vw] h-full *:rounded-4xl flex flex-col items-center gap-y-[2vh]">
        <Img
          refCb={addToRefs}
          src="https://cdn.prod.website-files.com/675c8e48ca0e0fb5ab421239/67f1eff7704d86833488bc4e_bg-cloud-17.avif"
        />
        <Img src="https://cdn.prod.website-files.com/675c8e48ca0e0fb5ab421239/67f89444d1d997a80bbd9c44_bg-cloud-61.avif" />
        <Img
          refCb={addToRefs}
          src="https://cdn.prod.website-files.com/675c8e48ca0e0fb5ab421239/67f288caa25e4431e4d74500_bg-cloud-30.avif"
        />
      </div>
    </div>
  );
}

export default MiddleImageZoomSection;
