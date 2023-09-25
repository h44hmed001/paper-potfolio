import Element from "@/components/Element";
import TextCard from "@/components/TextCard";
import React from "react";
import WorkButton from "@/components/WorkButton";

const Work = () => {
  return (
    <main className="w-full  flex ">
      {/* Left */}
      <section className="md:w-[65%] pr-8 md:border-r border-[#1d1d1b] ">
        <div className="flex mt-6  flex-col gap-5 md:flex-row">
          <TextCard />
          <Element
            imgURL="https://assets.website-files.com/5f9085a4041dd5427c5ac8ae/645b5c79f349770ebcc28ec4_thumbnail-small.webp?"
            label="UNEXPECTED TIME"
            text="Unexpected Time is a classic-furitistic gamification web experience showcasing the lost history & culture in a world dominated by the virtual reality. "
          />
        </div>
        <div className="overflow-hidden max-md:hidden  w-full mt-10">
          <img
            className=" scale-125 w-full object-cover "
            src="https://uploads-ssl.webflow.com/5f2429f172d117fcee10e819/605c679f33f67d3dd00b04b4_avatar-3.jpeg"
          />
        </div>
      </section>
      {/* Right */}
      <section className="w-[35%] flex justify-between  flex-col pl-5 max-md:hidden ">
        <div className="text-center text-[#1d1d1b]  leading-none uppercase min-w-full">
          <h2 className=" font-[canopee] text-[6.5vw] lg:text-[7vw]">
            Think,<span className="font-[condMedium]">c</span>reate
          </h2>

          <h1 className="lg:text-[13vw] text-[12vw] font-[canopee] ">
            Deliver
          </h1>
        </div>
        <div className="flex flex-col gap-5">
          <p className="lg:text-[2vw] text-[2.5vw] w-full leading-none font-[newLight]">
            A strong project is created by deep collaboration. I design,
            develop, and deliver websites that drive results and win awards.
          </p>
          <p className="lg:text-[2vw]  text-[2.5vw] w-full leading-none font-[newLight]">
            Like an artisan, I like to start from raw matter and give life to an
            iconic product that makes your brand stand out, starting from a
            Visual Strategy that guide the client’s vision to reality.
          </p>
        </div>
        <WorkButton />
      </section>
    </main>
  );
};

export default Work;
