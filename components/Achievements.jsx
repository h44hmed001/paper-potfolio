import React from "react";
import Achievement from "./Achievement";

const Achievements = () => {
  return (
    <div className="md:flex mx-7 hidden  border-y mt-10 border-[#1d1d1b] items-center justify-between">
      <Achievement award="awards" achievement="site of the day" number={9} />
      <Achievement award="winners" achievement="site of the month" number={1} />
      <Achievement award="awards" achievement="fwa of the day" number={6} />
      <Achievement award="mentions" achievement="acclaimed" number={8} />
    </div>
  );
};

export default Achievements;
