import React from "react";

const WorkButton = () => {
  return (
    <div className="w-full mt-8 cursor-pointer  border items-center bg-[#eee7e0ea] justify-center border-[#1d1d1b]  flex rounded-[50%] sm:h-[100px] h-[130px] xl:h-[200px]">
      <div className="group flex h-full text-[#1d1d1b] w-full  overflow-hidden items-center justify-center ">
        <img
          className="-translate-x-[140%] group-hover:translate-x-[40%] transition-all ease-in-out duration-700 w-[40%] h-[40%] "
          src="https://uploads-ssl.webflow.com/5f2429f172d117fcee10e819/61001a3509319b6ae39e156b_arrow-long.svg"
        />
        <span className="font-[canopee] group-hover:translate-x-[140%] transition-all ease-in-out duration-700 -translate-x-[45%] text-[4vw] ">
          ALL W<span className="font-[condMedium]">O</span>RK
        </span>
      </div>
    </div>
  );
};

export default WorkButton;
