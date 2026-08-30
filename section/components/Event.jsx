"use client";
import React from "react";
import Title from "../../ui/components/Title";
import Button from "../../ui/components/Button";
import EventCard from "@/ui/components/EventCard";
import Thump1 from "@/public/4 1.png";
import { motion } from "motion/react";
import Headline from "@/ui/components/Headline";

export default function Event() {
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
    <div id="event" className="w-full h-auto">
      <div className="w-auto mx-0 md:mx-10! 2xl:mx-12! pt-12! md:pt-20! 2xl:pt-28! pb-6! md:pb-12! 2xl:pb-16! px-6! md:px-8! 2xl:px-10! border-0 md:border-x-2 border-[#1E1E1E]/10">
        <motion.div
          variants={leftToRightVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Title title={"Event Coverage"} />
        </motion.div>
        <div className="center-center justify-between! items-start! lg:items-center! flex-col lg:flex-row gap-4 lg:gap-0">
          <motion.div
            variants={leftToRightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Headline header={"We bring a camera and guest list"} />
          </motion.div>
          <motion.div
            variants={rightToLeftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="w-full center-center justify-start! lg:justify-end! mt-2! lg:mt-0!"
          >
            <Button text={"explore events"} style={"blue_default"} href={"/"} />
          </motion.div>
        </div>
      </div>

      <div className="w-full h-full py-12! md:py-20! bg-[#1E1E1E]">
        <motion.div className="center-center flex-col gap-16 mx-6! md:mx-16! lg:mx-40! 2xl:mx-64!">
          <EventCard
            imageSrc={Thump1}
            videoSrc={"/video.mp4"}
            title={"Capitol Hill Studio"}
            paragraph={"Brand Storytelling Night"}
            name1={"samantha T"}
            name2={"Angela sachmidt"}
            name3={"Amanda mizarahi"}
            name4={"Birttany moorer"}
          />
          <EventCard
            imageSrc={Thump1}
            videoSrc={"/video.mp4"}
            title={"Ballard Commons"}
            paragraph={"Creators × Local Brands Mixer"}
            name1={"samantha T"}
            name2={"Angela sachmidt"}
            name3={"Amanda mizarahi"}
            name4={"Birttany moorer"}
          />
        </motion.div>
      </div>
    </div>
  );
}
