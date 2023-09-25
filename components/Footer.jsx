import React from "react";

const Footer = () => {
  return (
    <footer className="px-7 flex py-4 text-[#1d1d1b] items-center justify-between">
      {/* Left */}
      <div className="flex items-center gap-4">
        <h4 className="font-[canopee] text-[1.5vw] ">MIRANDA</h4>
      </div>
      {/* Right */}
      <div>
        <span className="flex text-[1vw] cursor-pointer items-center font-[condMedium] gap-3">
          TWITTER <div className="bg-[#1d1d1b] w-[6px] h-[6px] rounded-full" />{" "}
          INSTAGRAM{" "}
          <div className="bg-[#1d1d1b] w-[6px] h-[6px] rounded-full" /> DRIBBBLE{" "}
          <div className="bg-[#1d1d1b] w-[6px] h-[6px] rounded-full" /> BEHANCE{" "}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
