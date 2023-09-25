import React from "react";

const Testimonials = () => {
  return (
    <div className="md:mt-20 mt-10 max-sm:gap-6 flex-col md:flex-row flex">
      {/* First Card */}
      <div className="lg:h-[37vh] cursor-pointer hover:bg-[#b4aea7] shadow-xl h-[20vh] peer/cardOne rounded-2xl transition-all ease-in-out duration-500 bg-[#c4bcb3] min-w-[37vw] flex items-center justify-center border-2 border-[#1b1b1d] ">
        <div className="border-4 p-4  flex flex-col justify-between border-dashed rounded-xl w-[95%] h-[90%] mx-auto  border-[#1b1b1d] ">
          <h3 className="font-[newLight] card-underline max-sm:text-[3vw] text-[1.8vw] ">
            “Blurring the line between design & dev, Hassaan has an umatched eye
            for detail and precise execution in his work which pushes the whole
            industry forward”
          </h3>
          <div className="flex gap-2 items-center">
            <img
              className="rounded-full w-[50px] h-[50px] "
              src="https://uploads-ssl.webflow.com/5f2429f172d117fcee10e819/6172987a792f18104ce0ce14_sam-day.jpg"
            />
            <h1 className="font-[canopee] max-sm:text-[3.5vw] text-[2vw] lg:text-[1.6vw] ">
              SAM DAY
            </h1>
          </div>
        </div>
      </div>
      {/* Second Card */}
      <div className="lg:h-[37vh] cursor-pointer hover:bg-[#b4aea7]  shadow-xl h-[20vh] peer/cardTwo md:-translate-x-[50%] transition-all ease-in-out duration-500 bg-[#c4bcb3] sm:peer-hover/cardOne:-translate-x-[5%]  rounded-2xl  min-w-[37vw] flex items-center justify-center border-2 border-[#1b1b1d] ">
        <div className="border-4 flex flex-col justify-between p-4   border-dashed rounded-xl w-[95%] h-[90%] mx-auto border-[#1b1b1d] ">
          <h3 className="font-[newLight] max-sm:text-[3vw] card-underline  text-[1.8vw] ">
            "Hassaan‘s eye for detail & design as well as his impeccable
            aesthetics, make him one of the leaders in today’s digital design
            scene"
          </h3>
          <div className="flex gap-2 items-center">
            <img
              className="rounded-full object-cover w-[50px] h-[50px] "
              src="https://uploads-ssl.webflow.com/5f2429f172d117fcee10e819/615b54ee54045a4769f04eba_sofia-papadopoulou.jpg"
            />
            <h1 className="font-[canopee] max-sm:text-[3.5vw] text-[2vw] lg:text-[1.6vw] ">
              S<span className="font-[condMedium]">O</span>FIA PAPAD
              <span className="font-[condMedium]">O</span>P
              <span className="font-[condMedium]">O</span>UL
              <span className="font-[condMedium]">O</span>
            </h1>
          </div>
        </div>
      </div>
      {/* Third Card */}
      <div className="lg:h-[37vh] max-sm:hidden cursor-pointer hover:bg-[#b4aea7] shadow-xl h-[20vh] peer/cardThree md:-translate-x-[100%] transition-all ease-in-out duration-500 bg-[#c4bcb3] peer-hover/cardOne:-translate-x-[70%] peer-hover/cardTwo:-translate-x-[70%]   rounded-2xl  min-w-[37vw] flex items-center justify-center border-2 border-[#1b1b1d] ">
        <div className="border-4 flex flex-col justify-between p-4  border-dashed rounded-xl w-[95%] h-[90%] mx-auto border-[#1b1b1d] ">
          <h3 className="font-[newLight] card-underline text-[1.5vw]  lg:text-[1.8vw] ">
            "High-skilled designer who creates novel experiences with ease and
            craft. His signature is more vivid on each new project he launches
            and this is only the start"
          </h3>
          <div className="flex gap-2 items-center">
            <img
              className="rounded-full object-cover w-[50px] h-[50px] "
              src="https://uploads-ssl.webflow.com/5f2429f172d117fcee10e819/615b54ee0df682e04e089676_bruno-arizio.jpg"
            />
            <h1 className="font-[canopee] text-[2vw] lg:text-[1.6vw] ">
              BRUN<span className="font-[condMedium]">O</span> ARIZI
              <span className="font-[condMedium]">O</span>
            </h1>
          </div>
        </div>
      </div>
      {/* Fourth Card */}
      <div className="lg:h-[37vh] max-sm:hidden cursor-pointer hover:bg-[#b4aea7] shadow-xl h-[20vh] -translate-x-[150%] transition-all ease-in-out duration-500 bg-[#c4bcb3] peer-hover/cardOne:-translate-x-[120%] peer-hover/cardTwo:-translate-x-[120%] peer-hover/cardThree:-translate-x-[120%]   rounded-2xl  min-w-[37vw] flex items-center justify-center border-2 border-[#1b1b1d] ">
        <div className="border-4 flex flex-col justify-between p-4  border-dashed rounded-xl w-[95%] h-[90%] mx-auto border-[#1b1b1d] ">
          <h3 className="font-[newLight] card-underline   text-[1.8vw] ">
            "A very promising Creative Director and Interactive Designer given
            his natural aesthetic taste and innate instinct for functionality"
          </h3>
          <div className="flex gap-2 items-center">
            <img
              className="rounded-full object-cover w-[50px] h-[50px] "
              src="https://uploads-ssl.webflow.com/5f2429f172d117fcee10e819/615b54ee9805af64275d2b44_enea-rossi.jpg"
            />
            <h1 className="font-[canopee] text-[2vw] lg:text-[1.6vw] ">
              ENEA R<span className="font-[condMedium]">O</span>SSI
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
