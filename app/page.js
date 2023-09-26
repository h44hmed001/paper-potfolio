"use client";
import Navbar from "@/components/Navbar";
import { AboutMe, Elements, Miranda, Testimonials, Work } from "@/sections";

import Image from "next/image";
import React, { useEffect } from "react";
import gsap, { Power4 } from "gsap";
import Achievements from "@/components/Achievements";
import Element from "@/components/Element";
import Marquee from "@/components/Marquee";
import Footer from "@/components/Footer";
import FullScreen from "@/components/FullScreen";

export default function Home() {
  useEffect(() => {
    // Check if the device screen width is large (e.g., 1024px or larger)
    if (window.innerWidth >= 1024) {
      let tl = gsap.timeline();
      let first = tl.to(".main", {
        y: "100vh",
        duration: 0,
        scale: 0.4,
      });
      let second = tl.to(".main", {
        duration: 1.3,
        y: "-120vh",
      });
      let third = tl.to(".main", {
        duration: 2,
        ease: Power4.easeInOut,
        delay: 0.4,
        rotate: -360,
        scale: 1,
        y: 0,
      });
    }
  }, []);

  return (
    <main className="main">
      <Navbar />
      <section className="mt-8  max-md:hidden ">
        <Elements />
      </section>
      <Miranda />
      <section>
        <AboutMe />
      </section>
      <section className=" hidden md:flex items-center ">
        <div className="sm:mt-16  sm:mx-6 w-[70%] lg:w-[75%] md:mx-8 lg:mx-10">
          <h1 className="font-[canopee] tracking-tight px-8 bg-[#1d1d1b] leading-none   text-center text-[#eee7e0ea] text-[24vw] lg:text-[27vw] ">
            WEBSITE
          </h1>
        </div>

        <img
          className="lg:mt-10 mt-12 w-[18vw] "
          src="https://uploads-ssl.webflow.com/5f2429f172d117fcee10e819/60474834660f934090d42877_stamp.png"
        />
      </section>
      <section className="max-lg:mt-6 max-sm:border-t border-[#1d1d1b] w-[90%] mx-auto lg:mt-16">
        <Work />
      </section>
      <Achievements />
      <section className="px-8 mb-20 w-full mx-auto ">
        <Testimonials />
      </section>
      <section className="md:flex border-t hidden border-[#1d1d1b50] mx-7 pb-10 pt-10 ">
        <Element
          featured
          label="WOW CONCEPT"
          imgURL="https://assets.website-files.com/5f9085a4041dd5427c5ac8ae/647dc0777b1a5df29f8e5a58_thumbnail-small.webp?"
          text="WOW Concept is a the world’s first concept store based in Madrid revolutionizing retail with a dynamic & interactive shopping experience."
        />
        <Element
          imgURL="https://assets.website-files.com/5f9085a4041dd5427c5ac8ae/645b5439577bd35377de8c43_thumbnail-small.webp?"
          label="THE ROGER HUB"
          text="The Roger Hub is an immersive web experience showcasing the tennis-inspired 'On' sneakers, a collaboration born out of a partnership with the legendary Roger Federer."
        />
        <Element
          imgURL="https://assets.website-files.com/5f9085a4041dd5427c5ac8ae/61cdc506856e75d4b33cd9bd_thumbnail-small.jpeg?"
          label="BOOKS OF YE"
          featured
          text="The Books of Ye is a conceptual NFT web experience depicting the five Books of Moses, in which each instance of God is replaced with Ye (Kanye West)."
        />
      </section>
      <Marquee />
      <Footer />
    </main>
  );
}
