import React from "react";

const Achievement = ({ number, award, achievement }) => {
  return (
    <div className="flex uppercase text-[#1d1d1b] items-center ">
      <div className="flex  leading-none flex-col text-center">
        <span className="font-[newLight] text-[1.7vw] xl:text-[1.5vw] ">
          {achievement}
        </span>
        <h1 className="font-[canopee] text-[5vw]">{award}</h1>
      </div>
      <h1 className="font-[condMedium] text-[8vw] ">{number}</h1>
    </div>
  );
};

export default Achievement;
