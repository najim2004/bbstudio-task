import React from "react";

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

const StaticCircularGallery = () => {
  return (
    <section className="w-screen min-h-screen">
      <div className="w-full h-[100vw] flex justify-center gap-2 relative scale-[0.6]">
        {images.slice(0, Math.floor(images.length / 2)).map((image, index) => (
          <div
            key={index}
            className="h-[100vw] w-full flex flex-col justify-between absolute items-center"
            style={{
              transform: `rotate(-${index * 22 + 22}deg)`,
            }}
          >
            <div className="h-[16vw] aspect-square">
              <img
                src={image.up}
                className="size-full object-cover rounded-lg  scale-[0.8]"
                alt=""
              />
            </div>

            <div className="h-[16vw] aspect-square">
              <img
                src={image.down}
                className="size-full object-cover rounded-lg  scale-[0.8]"
                alt=""
              />
            </div>
          </div>
        ))}
        <div className="h-[100vw] w-full flex flex-col justify-between absolute items-center">
          <div className="h-[16vw] aspect-square">
            <img
              src={images[Math.ceil(images.length / 2)].up}
              className="size-full object-cover rounded-lg  scale-[0.8]"
              alt=""
            />
          </div>

          <div className="h-[16vw] aspect-square">
            <img
              src={images[Math.ceil(images.length / 2)].down}
              className="size-full object-cover rounded-lg  scale-[0.8]"
              alt=""
            />
          </div>
        </div>

        {/* text content */}
        <div className="text-center z-10 max-w-[38vw] mx-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[1.7] text-gray-700">
          <span className="text-sm px-4 py-1.5 rounded-full bg-gray-200">
            Personal Growth
          </span>
          <div className="text-5xl font-semibold leading-[60px] mt-6">
            A gentle space to understand yourself
          </div>
        </div>
        {images.slice(Math.floor(images.length / 2)).map((image, index) => (
          <div
            key={index}
            className="h-[100vw] w-full flex flex-col justify-between absolute items-center"
            style={{
              transform: `rotate(${index * 23 + 23}deg)`,
            }}
          >
            <div className="h-[16vw] aspect-square">
              <img
                src={image.up}
                className="size-full object-cover rounded-lg  scale-[0.8]"
                alt=""
              />
            </div>

            <div className="h-[16vw] aspect-square">
              <img
                src={image.down}
                className="size-full object-cover rounded-lg  scale-[0.8]"
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StaticCircularGallery;
