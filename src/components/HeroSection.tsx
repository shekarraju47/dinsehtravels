"use client";
import * as React from "react";
import Navbar from "./Navbar";

const HeroSection: React.FC = () => {
  return (
    <div className="relative w-full max-sm:full max-sm:h-[560px] max-md:h-[700px] h-[919px]">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/776b7d8aaea88d1c8abf4aa39d3403d7b8b6ca3f"
        alt="Hero background"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-opacity-40" />

      <div className="absolute inset-x-0 px-20 top-[40px] max-md:px-10 max-sm:px-5">
        <Navbar />
      </div>

      <div className="absolute left-20 top-2/4 max-sm:top-1/3 max-w-screen-sm max-md:left-10 max-sm:left-5">
        <div className="flex flex-col gap-6 mb-12">
          <h2 className="text-6xl font-bold text-white max-sm:w-80 leading-[59.4px] max-md:text-5xl max-sm:text-4xl max-sm:leading-none">
            Seamless Travel, Exceptional Service
          </h2>
          <p className="text-2xl leading-8 text-zinc-100 text-opacity-80 max-md:text-xl max-sm:text-lg max-sm:w-60">
            Beyond Transport—We Deliver Experiences
          </p>
        </div>

        <div className="flex gap-4 max-sm:flex-col ">
          <button className="px-9 py-4 text-lg max-sm:text-sm  font-semibold text-white bg-sky-600 rounded-xl w-[180px] max-sm:w-small">
            Get in touch
          </button>
          <button className="px-4 py-4 max-sm:w-small max-sm:text-sm text-lg rounded-xl border border-white border-opacity-50 text-white text-opacity-80 w-[180px]">
            Learn more
          </button>
        </div>
      </div>

    </div>

  );
};

export default HeroSection;
