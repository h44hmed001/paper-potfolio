import React from "react";

const AboutMe = () => {
  return (
    <main className="w-full max-lg:mt-5 lg:mt-10 md:flex">
      {/* Section Left */}
      <section className="md:w-[30%]  ">
        <h1 className="font-[canopee] text-[#1d1d1b] flex flex-col leading-none  text-center text-[20vw] sm:text-[3em] lg:text-[6vw]  uppercase ">
          Interactive{" "}
          <span className=" text-[40vw] sm:text-[12vw] ">Artist</span>
        </h1>
        <img
          className="w-[90%] mx-auto"
          src="https://uploads-ssl.webflow.com/5f2429f172d117fcee10e819/605c6ce3bc0c7d1cd4ca847e_avatar-star-p-800.jpeg"
        />
        <h5 className="text-[#1d1d1b]  w-[90%] mx-auto  mt-5  font-[newLight]   font-[100]  break-words sm:text-xl  leading-[0] max-sm:text-2xl lg:text-2xl xl:text-5xl ">
          As a multidisciplinary freelancer, I'm passionate about creating
          iconic digital experiences through motion, typography, and creative
          coding for companies and agencies around the world.
        </h5>
      </section>
      {/* Section Right */}
      <section className="md:w-[70%] h-fit md:border-l border-[#1d1d1b]  ">
        <img
          className="w-[90%] object-cover h-[50%] mx-auto"
          src="https://uploads-ssl.webflow.com/5f2429f172d117fcee10e819/605c62f4c78c4ba46a1268be_avatar-1-p-1600.jpeg"
        />
        <div className="w-[90%] aboutMeText uppercase tracking-normal text-[12vw] md:text-[8vw] text-[#1d1d1b] mt-5 leading-none font-[canopee] mx-auto">
          <h3>
            Di<span className="font-[condMedium]">g</span>ital art di
            <span className="font-[condMedium]">r</span>e
            <span className="font-[condMedium]">c</span>t
            <span className="font-[condMedium]">o</span>r
          </h3>
          <h3>
            intera<span className="font-[condMedium]">c</span>tive desi
            <span className="font-[condMedium]">g</span>ner
          </h3>
          <h3>
            <span className="font-[condMedium]">c</span>reative devel
            <span className="font-[condMedium]">o</span>per
          </h3>
          <h3>
            based in Pakistan, W<span className="font-[condMedium]">c</span>
          </h3>
        </div>
      </section>
    </main>
  );
};

export default AboutMe;
