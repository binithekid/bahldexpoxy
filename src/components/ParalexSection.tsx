import Link from "next/link";
import React from "react";

const ParallaxSection = () => {
  return (
    <div className="w-full md:flex hidden flex-col justify-center gap-4 items-center h-[35rem] bg-fixed bg-[url(/epoxywallpaper.jpg)] bg-cover text-center">
      <h1 className="text-gray-100 font-bold tracking-tight text-2xl md:text-7xl text-left">
        Stay Inspired
      </h1>
      <h1 className="text-gray-100 font-bold tracking-tight text-4xl md:text-8xl">
        Never Stop Creating
      </h1>{" "}
    </div>
  );
};

export default ParallaxSection;
