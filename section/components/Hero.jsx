"use client";
import Image from "next/image";
import React from "react";
import HeroImage from "@/public/heroImage.png";
import BannerImage from "@/public/Frame 87.png";
import Button from "@/ui/components/Button";
import ParagraphSplit from "@/animation/ParagraphSplit";
import TextSplit from "@/animation/TextSplit";
import { motion } from "motion/react";
export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <div
      id="hero"
      className="w-full h-screen bg-black center-center text-white relative overflow-hidden"
    >
      {/* BACKGROUND HERO IMAGE FIX */}
      <div className="absolute inset-0 z-0">
        <Image
          src={HeroImage}
          alt="hero background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Decorative Card Layer */}
      <div className="hidden sm:flex card w-[250px] sm:w-[400px] md:w-[500px] h-full absolute top-0 left-[40px] overflow-hidden z-10" />

      {/* CONTENT & OVERLAY BANNER CONTAINER */}
      <div className="w-full center-center justify-start! absolute bottom-42 sm:bottom-56 lg:bottom-24 z-20">
        <div className="w-full relative px-6! sm:px-12! md:px-20!">
          <div className="w-auto flex relative">
            <div className="text-white">
              <TextSplit
                Tag={"h1"}
                className={
                  "uppercase text-[clamp(3.5rem,13vw,200px)] font-extrabold leading-none bg-clip-text text-transparent"
                }
                text={"seattle"}
                speed={0.05}
              />

              <TextSplit
                Tag={"h1"}
                className={
                  "uppercase text-[clamp(1.75rem,6.5vw,125px)] leading-none mt-1"
                }
                text={"business club"}
                speed={0.04}
              />

              <ParagraphSplit
                text={
                  "Seattle Business Club is a media and community platform that helps Seattle businesses get discovered, connected, and grow."
                }
                className={
                  "w-[80%] text-[12px] md:text-[14px] lg:text-[12px] xl:text-[20px] text-white/80 font-thin tracking-wider capitalize pt-6! xl:pt-10! 2xl:pt-12!"
                }
              />
            </div>
            {/* 1. Image Container Layer */}
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} // Smooth cubic-bezier
              // origin-bottom forces the height expansion to grow from bottom to top
              className="w-[150px] hidden md:flex h-[180px] sm:h-[140px] lg:h-[130px] xl:h-[180px] 2xl:h-[220px] origin-bottom overflow-hidden"
            >
              {/* The Image inside scales up from 0 to 1 and rotates simultaneously */}
              <motion.div
                initial={{
                  clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
                }} // Hidden at the bottom line
                animate={{
                  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                }} // Wipes open up to the top
                transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }} // Smooth, slow ease-out curve
                className="w-[200px] hidden md:flex h-[180px] sm:h-[140px] lg:h-[130px] xl:h-[180px] 2xl:h-[220px]"
              >
                {/* Nested scaling layer */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
                  className="w-full h-full"
                >
                  <Image
                    src={BannerImage}
                    alt="banner overlay"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
          <motion.div
            variants={{
              hidden: { y: 40, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.6,
                  ease: "easeOut",
                  // Delays the button slide until the image height animation is mostly done
                  delay: 0.4,
                },
              },
            }}
            initial="hidden"
            animate="visible"
            className="flex flex-col md:flex-row gap-4 pt-6! xl:pt-12!"
          >
            <Button text={"see what we do"} href={"/"} style={"custom"} />
            <Button text={"join the club"} href={"/"} style={"without_arrow"} />
          </motion.div>
        </div>

        {/* OVERLAY BANNER IMAGE FIX */}
      </div>
    </div>
  );
}
