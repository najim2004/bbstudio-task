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
  const radius = 35;
  const totalImages = images.length * 2;

  return (
    <section className="w-full h-screen relative flex justify-center items-center bg-white">
      <div className="text-center z-10">
        <span className="text-sm px-4 py-1.5 rounded-full bg-gray-200">
          Personal Growth
        </span>
        <div className="text-5xl font-semibold leading-[60px] mt-6">
          A gentle space to <br /> understand yourself
        </div>
      </div>

      <div className="absolute w-full h-full">
        {images.flatMap((image, index) => {
          const angleUp = ((index * 2) / totalImages) * 360;
          const xUp = `${radius * Math.sin((angleUp * Math.PI) / 180)}vmin`;
          const yUp = `${-radius * Math.cos((angleUp * Math.PI) / 180)}vmin`;

          const angleDown = ((index * 2 + 1) / totalImages) * 360;
          const xDown = `${radius * Math.sin((angleDown * Math.PI) / 180)}vmin`;
          const yDown = `${
            -radius * Math.cos((angleDown * Math.PI) / 180)
          }vmin`;

          return [
            <img
              key={`up-${index}`}
              src={image.up}
              className="w-[12vmin] aspect-square object-cover rounded-lg absolute top-1/2 left-1/2"
              style={{
                transform: `translate(-50%, -50%) translate(${xUp}, ${yUp}) rotate(${angleUp}deg)`,
              }}
              alt=""
            />,
            <img
              key={`down-${index}`}
              src={image.down}
              className="w-[12vmin] aspect-square object-cover rounded-lg absolute top-1/2 left-1/2"
              style={{
                transform: `translate(-50%, -50%) translate(${xDown}, ${yDown}) rotate(${angleDown}deg)`,
              }}
              alt=""
            />,
          ];
        })}
      </div>
    </section>
  );
};

export default StaticCircularGallery;
