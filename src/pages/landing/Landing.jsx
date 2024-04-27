import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="coming_soon w-full h-[34rem] flex justify-center items-center flex-col text-center">
      <div className="inner-cs flex justify-center items-center flex-col bg-[#111]">
      <p className=" text-7xl font-semibold text-left mb-8 sh">Coming Soon!</p>
      <p className=" text-xl mb-8 w-[80%]">
        Unique Finds for Your Unique Style: Handmade and Handpicked for You!
      </p>
      {/*  hover:bg-[#ff841f] */}
      <a href="https://tally.so/r/w427Jb" className=" px-12 py-3 border-[#ff841f] text-[#ff841f] hover:shadow-[0_0_40px_rgba(255,132,31,1)] border-[2px] rounded-sm relative ease-in-out transition-all duration-200 text-lg">
        For Vendors
      </a>
      </div>
    </div>
  );
};

export default Landing;
