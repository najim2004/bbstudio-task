import React from "react";
import Button from "../ui/Button";

function Hero() {
  return (
    <div className="py-32 w-full flex flex-col justify-center items-center text-center gap-6 font-bdogrotesk-vf text-gray-700 px-8 md:px-0">
      <span className="text-sm px-4 py-1.5 rounded-full bg-gray-200">
        Personal Growth
      </span>
      <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold md:max-w-[800px] w-full">
        Feel more human every day
      </h1>
      <Button className="text-base px-8 py-4 !rounded-full !text-[#415326]">
        Request demo
      </Button>
    </div>
  );
}

export default Hero;
