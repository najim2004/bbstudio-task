import React from "react";

function MiddleImageZoomSection() {
  return (
    <div className="my-10 w-screen h-screen overflow-hidden flex justify-center gap-x-[2vw] gap-y-[2vh]">
      <div className="overflow-hidden min-w-[45vw] h-full *:rounded-4xl flex flex-col justify-center items-center gap-y-[2vh]">
        <img
          src="https://cdn.prod.website-files.com/675c8e48ca0e0fb5ab421239/67f9c31841d04e272a85216f_bg-cloud-63.avif"
          alt=""
          className="min-h-[45vh] w-full"
        />
        <img
          src="https://cdn.prod.website-files.com/675c8e48ca0e0fb5ab421239/67f75435261184f880702d40_bg-cloud-43.avif"
          alt=""
          className="min-h-[45vh] w-full"
        />
        <img
          src="https://cdn.prod.website-files.com/675c8e48ca0e0fb5ab421239/67f9c6586f1024288c4e6ed8_bg-cloud-64.avif"
          alt=""
          className="min-h-[45vh] w-full"
        />
      </div>
      <div className="overflow-hidden min-w-[45vw] h-full *:rounded-4xl flex flex-col justify-center items-center gap-y-[2vh]">
        <img
          src="https://cdn.prod.website-files.com/675c8e48ca0e0fb5ab421239/67f9d38f41d04e272a8d2926_bg-cloud-66.avif"
          alt=""
          className="h-[45vh] w-full"
        />
        <div className="min-h-[60vh] w-full relative overflow-hidden">
          <img
            src="https://cdn.prod.website-files.com/675c8e48ca0e0fb5ab421239/67f9c6586f1024288c4e6ed8_bg-cloud-64.avif"
            alt=""
            className="h-screen w-screen"
          />
        </div>
        <img
          src="https://cdn.prod.website-files.com/675c8e48ca0e0fb5ab421239/67f7ee4df847a9fb30978659_bg-cloud-54.avif"
          alt=""
          className="h-[45vh] w-full"
        />
      </div>
      <div className="overflow-hidden min-w-[45vw] h-full *:rounded-4xl flex flex-col items-center gap-y-[2vh]">
        <img
          src="https://cdn.prod.website-files.com/675c8e48ca0e0fb5ab421239/67f1eff7704d86833488bc4e_bg-cloud-17.avif"
          alt=""
          className="min-h-[45vh] w-full"
        />
        <img
          src="https://cdn.prod.website-files.com/675c8e48ca0e0fb5ab421239/67f89444d1d997a80bbd9c44_bg-cloud-61.avif"
          alt=""
          className="min-h-[45vh] w-full"
        />
        <img
          src="https://cdn.prod.website-files.com/675c8e48ca0e0fb5ab421239/67f288caa25e4431e4d74500_bg-cloud-30.avif"
          alt=""
          className="min-h-[45vh] w-full"
        />
      </div>
    </div>
  );
}

export default MiddleImageZoomSection;
