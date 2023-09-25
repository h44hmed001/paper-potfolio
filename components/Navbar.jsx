import React from "react";

const Navbar = () => {
  return (
    <div className="w-full flex border-b border-[#1d1d1b] items-center max-lg:px-6 lg:px-8 h-[70px] sm:h-[90px]  ">
      <div className="flex items-center  justify-evenly w-full">
        <h3 className="font-[newLight] max-sm:text-xs text-lg ">
          Pakistan, WC
        </h3>
        <div className=" justify-center items-center flex-1 flex">
          <img
            className="h-[18px]  sm:h-[30px]"
            src="https://uploads-ssl.webflow.com/5f2429f172d117fcee10e819/5f7f87c8b81a6e7a214312f0_header.svg"
          />
        </div>
        <div className="flex group items-end cursor-pointer flex-col gap-1">
          <div className="h-[2px] group-hover:translate-x-1 transition-all ease-in-out duration-200 w-[30px] bg-black " />
          <div className="h-[2px] group-hover:-translate-x-1 transition-all ease-in-out duration-200 w-[30px] bg-black " />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
