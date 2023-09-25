import React from "react";

const TextCard = () => {
  return (
    <div className="flex-[0.9] text-[#1d1d1b] md:border-r flex flex-col max-sm:gap-5 justify-between border-[#1D1D1B] px-5">
      <h1 className="font-[condMedium] tracking-tighter text-[23vw] max-sm:text-center leading-none lg:text-[4vw]  md:text-[5vw] ">
        UPCOMING NEXT
      </h1>
      <h3 className="font-[newLight] md:text-lg lg:max-w-lg max-lg:text-4xl leading-none xl:text-4xl lg:text-2xl ">
        Fresh Entry - A selected work from the latest digital releases
      </h3>
      <h5 className="font-[condMedium] md:text-lg: lg:text-2xl">
        Tip!{" "}
        <span className="font-[newLight]">Click on the image to explore</span>
      </h5>
    </div>
  );
};

export default TextCard;
