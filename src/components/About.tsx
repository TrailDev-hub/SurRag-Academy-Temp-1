"use client";
import React from "react";
import GradualSpacing from "./magicui/gradual-spacing";
import { HeroHighlight } from "./ui/hero-highlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const About = () => {
  const words = `Salman Usmani, a maestro in Hindustani classical vocals, has captivated audiences worldwide with his soulful renditions. With years of rigorous training and a passion for teaching, Salman brings unparalleled expertise and a unique perspective to his students.`;
  return (
    <div className=" mt-[-10rem]">
      <HeroHighlight>
        <div className="m-10">
          <div>
            <GradualSpacing
              className=" font-sans text-center  text-3xl font-bold tracking-[-0.1em]  text-black dark:text-white md:text-7xl md:leading-[5rem] text-red"
              text="Who is Salman Usmani?"
            />
          </div>
          <div className=" mt-20 max-w-[50rem] text-justify">
            <TextGenerateEffect words={words} />
          </div>
        </div>
      </HeroHighlight>
    </div>
  );
};

export default About;
