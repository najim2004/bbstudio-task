import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

const images = [
  "https://cdn.prod.website-files.com/675c8e48ca0e0fb5ab421239/67f9d38f41d04e272a8d2926_bg-cloud-66.avif",
  "https://cdn.prod.website-files.com/675c8e48ca0e0fb5ab421239/67eb1a0a4bd9bc20eac17b0e_ChatGPT%20Image%2031%20de%20mar.%20de%202025%2C%2019_20_50.avif",

  "https://cdn.prod.website-files.com/675c8e48ca0e0fb5ab421239/67fd38497b98d7e4fade0fe9_bg-cloud-78.avif",
  "https://cdn.prod.website-files.com/675c8e48ca0e0fb5ab421239/67eb2202ed6a24da2fa19fda_ChatGPT%20Image%2031%20de%20mar.%20de%202025%2C%2020_12_59.avif",

  "https://cdn.prod.website-files.com/675c8e48ca0e0fb5ab421239/67f7f5b376f614a742795320_bg-cloud-59.avif",
  "https://cdn.prod.website-files.com/675c8e48ca0e0fb5ab421239/67f9d1918a5e58f63b70f875_8cf9752d885baa80e26ad73cbe4f0344.avif",

  "https://cdn.prod.website-files.com/675c8e48ca0e0fb5ab421239/67f89444d1d997a80bbd9c44_bg-cloud-61.avif",
  "https://cdn.prod.website-files.com/675c8e48ca0e0fb5ab421239/67f7e0a2f0f48f88d3a1176f_close-up-nerves-yellow-leaf.avif",

  "https://cdn.prod.website-files.com/675c8e48ca0e0fb5ab421239/67f7dd03f980a473e4e9ff40_bg-cloud-49.avif",
  "https://cdn.prod.website-files.com/675c8e48ca0e0fb5ab421239/67ee1b85995266773abd081b_img-01.avif",

  "https://cdn.prod.website-files.com/675c8e48ca0e0fb5ab421239/67f75435261184f880702d40_bg-cloud-43.avif",
  "https://cdn.prod.website-files.com/675c8e48ca0e0fb5ab421239/67f7e0d700996d64eb9d235c_bg-cloud-51.avif",

  "https://cdn.prod.website-files.com/675c8e48ca0e0fb5ab421239/67f896ecf9932c23507a4961_bg-cloud-62.avif",
  "https://cdn.prod.website-files.com/675c8e48ca0e0fb5ab421239/67f7ee6f6bc08ecfebcddf85_bg-cloud-55.avif",
];

function AnimatedCarousel() {
  const marqueeRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const width = marqueeRef.current.scrollWidth / 2;
      gsap.to(marqueeRef.current, {
        x: -width,
        duration: 80,
        ease: "linear",
        repeat: -1,
      });
    }, marqueeRef);

    return () => ctx.revert();
  }, []);
  return (
    <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 grid-rows-1 mg:grid-rows-12 min-h-[50vh] max-w-6xl mx-auto gap-3 font-bdogrotesk-vf px-4 md:px-8 lg:px-0">
      <div className="h-[660px] lg:row-span-12 rounded-3xl overflow-hidden">
        <img
          src="https://cdn.prod.website-files.com/675c8e48ca0e0fb5ab421239/67fd3b3b64ef722b8bd2b5c4_bg-cloud-77.avif"
          alt=""
          className="size-full object-cover"
        />
      </div>
      <div className="bg-gray-100 lg:row-span-8 rounded-3xl p-14 text-gray-700">
        <span className="text-sm px-4 py-1.5 rounded-full bg-gray-200">
          Ready to automate?
        </span>
        <h1 className="text-3xl font-semibold mt-6">
          Stay on top of your recurring payments with ease
        </h1>
      </div>
      <div className="lg:row-span-4 rounded-3xl overflow-x-auto scrollbar-hide">
        <div ref={marqueeRef} className=" flex items-center gap-3 ">
          {[...images, ...images].map((image, idx) => (
            <img
              key={idx}
              src={image}
              alt=""
              className="size-[210px] aspect-square object-cover rounded-lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AnimatedCarousel;
