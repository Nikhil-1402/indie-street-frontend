import React from "react";

const Landing = () => {
  return (
    <div className="coming_soon w-full h-[34rem] flex justify-center items-center flex-col text-center">
      <div className="inner-cs flex justify-center items-center flex-col bg-[#111]">
      <p className=" lg:text-7xl md:text-6xl sm:text-5xl text-4xl font-semibold md:mb-8 mb-4 sh text-center">Coming Soon!</p>
      <p className=" md:text-xl sm:text-lg text-sm md:mb-8 mb-4 w-[80%]">
        Unique Finds for Your Unique Style: Handmade and Handpicked for You!
      </p>
      {/*  hover:bg-[#ff841f] */}
      <a href="https://tally.so/r/w427Jb" target="_blank" className=" md:px-12 px-8 md:py-3 py-2 border-[#ff841f] text-[#ff841f] hover:shadow-[0_0_40px_rgba(255,132,31,1)] border-[2px] rounded-sm relative ease-in-out transition-all duration-200 text-lg">
        For Vendors
      </a>
      </div>
    </div>
  );
};

export default Landing;
