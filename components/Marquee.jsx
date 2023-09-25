import React from "react";

const Marquee = () => {
  return (
    <div className="mx-7 whitespace-nowrap py-5 overflow-x-auto no-scrollbar  border-y border-[#1d1d1b]">
      <h1 className="text-[5vw] marquee-item inline-block mr-5 font-[newLight] tracking-wide ">
        Let's create something together{" "}
        <span className="bg-[#1d1d1b] cursor-pointer px-2 font-[canopee] text-[#c4bcb3]">
          EMAIL ME
        </span>
      </h1>
      <h1 className="text-[5vw] mr-5 marquee-item inline-block font-[newLight] tracking-wide ">
        Let's create something together{" "}
        <span className="bg-[#1d1d1b] cursor-pointer px-2 font-[canopee] text-[#c4bcb3]">
          EMAIL ME
        </span>
      </h1>
      <h1 className="text-[5vw] mr-5 marquee-item inline-block   font-[newLight] tracking-wide ">
        Let's create something together{" "}
        <span className="bg-[#1d1d1b] cursor-pointer px-2 font-[canopee] text-[#c4bcb3]">
          EMAIL ME
        </span>
      </h1>
    </div>
  );
};

export default Marquee;
