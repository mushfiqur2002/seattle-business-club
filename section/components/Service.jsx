"use client";
import React from "react";
import Title from "@/ui/components/Title";
import Card from "@/ui/components/Card";
import { motion } from "motion/react";

export default function ServiceSection() {
  // Left-to-Right layout variants
  const leftToRightVariants = {
    hidden: { x: -60, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
    },
  };

  // Right-to-Left layout variants
  const rightToLeftVariants = {
    hidden: { x: 60, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
    },
  };

  return (
    <div id="service" className="w-full h-auto center-center overflow-hidden">
      <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-5 gap-12 xl:gap-0 mx-0 md:mx-10! 2xl:mx-12! pt-12! md:pt-20! 2xl:pt-28! pb-6! md:pb-12! 2xl:pb-16! px-6! md:px-8! 2xl:px-10! border-0 md:border-x-2 border-[#1E1E1E]/10">
        {/* 1st Container: Slides Left to Right */}
        <motion.div
          variants={leftToRightVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="2xl:col-span-3 pr-0 xl:pr-8! 2xl:pr-12! center-center items-start! flex-col"
        >
          <Title title={"what we do"} />

          <p className="text-[22px] md:text-[28px] 2xl:text-[32px] text-[#1E1E1E] pt-4! md:pt-8!">
            We’re an event management club dedicated to helping local
            organizations thrive through expert planning, promotion, and
            execution. From small gatherings to large-scale events, we craft
            seamless experiences and memorable moments that foster community
            engagement and lasting connections.
          </p>
        </motion.div>

        {/* 2nd Container: Slides Right to Left */}
        <motion.div
          variants={rightToLeftVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative gap-6 w-full h-full grid md:grid-cols-2 md:grid-row-2 2xl:col-span-2"
        >
          <Card
            number={"01"}
            heading={"Media"}
            title={"discover"}
            paragraph={
              "Spotlights, founder stories, and new openings that put local businesses on the map."
            }
          />
          <Card
            number={"02"}
            heading={"Community"}
            title={"Connect"}
            paragraph={
              "A network of owners, operators, and creators who show up for each other."
            }
          />
          <Card
            number={"03"}
            heading={"Events"}
            title={"Experience"}
            paragraph={
              "Mixers, panels, and coverage that turn a room full of strangers into regulars."
            }
          />
          <Card
            number={"04"}
            heading={"Growth"}
            title={"Grow"}
            paragraph={
              "Creative support to build your brand, design your product, and tell your story."
            }
          />
        </motion.div>
      </div>
    </div>
  );
}
