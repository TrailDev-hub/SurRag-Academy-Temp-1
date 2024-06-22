"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import { ContainerScroll } from "./ui/container-scroll-animation";
import Image from "next/image";
import GradualSpacing from "./magicui/gradual-spacing";
import SparklesText from "./magicui/sparkles-text";

export function HeroHighlightDemo() {
  return (
    <>
    
    <HeroHighlight>
      
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl mt-[10rem] px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        Unleash Your Musical Potential and Master the Art of Hindustani Classical Vocals with
        <br />
        <Highlight className="text-black dark:text-white">
        Salman Usmani.
        </Highlight>
        
      </motion.h1>
      
        <div className="mt-[-10rem]">
        <ContainerScroll
        titleComponent={
          <>
          </>
        }
      >
        <Image
          src={`/Hero-sec.jpg`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
          />
      </ContainerScroll>
        </div>
        
      </HeroHighlight>
    </>
  );
}
