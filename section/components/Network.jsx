"use client";
import React from "react";
import Title from "../../ui/components/Title";
import NetworkCard from "../../ui/components/NetworkCard";
import Image01 from "../../public/networkImage01.png";
import Image03 from "../../public/networkImage02.png";
import Image02 from "../../public/networkImage03.png";
import { motion } from "motion/react";
import Headline from "@/ui/components/Headline";

export default function Network() {
  // Left-to-Right layout variants
  const leftToRightVariants = {
    hidden: { y: -60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
    },
  };

  // Right-to-Left layout variants
  const rightToLeftVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
    },
  };
  return (
    <div
      id="network"
      className="w-auto h-auto mx-0 md:mx-10! 2xl:mx-12! pt-12! md:pt-20! 2xl:pt-28! pb-6! md:pb-12! 2xl:pb-16! border-0 md:border-x-2 border-[#1E1E1E]/10"
    >
      <motion.div
        variants={leftToRightVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="w-auto center-center flex-col px-6! md:px-8!"
      >
        <Title title={"Network Events"} />
        <Headline
          header={`Come meet the people`}
          span={`building Seattle`}
          para={`Talks, workshops, and mixers. Click any event for details and to register.`}
          center={true}
        />
      </motion.div>

      <motion.div
        variants={rightToLeftVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="pt-12!"
      >
        <NetworkCard
          date={"aug 14"}
          week={"thu"}
          imageSrc={Image01}
          heading={"Brand Storytelling Night"}
          time={"6:30 – 9:00 PM "}
          place={" Capitol Hill Studio"}
          link={"/"}
        />
        <NetworkCard
          date={"aug 14"}
          week={"thu"}
          imageSrc={Image02}
          heading={"SEO & GEO Workshop"}
          time={"5:00 – 7:30 PM "}
          place={" South Lake Union"}
          link={"/"}
        />
        <NetworkCard
          date={"aug 14"}
          week={"thu"}
          imageSrc={Image03}
          heading={"Creators × Local Brands Mixer"}
          time={"2:00 – 5:00 PM "}
          place={"  Ballard Commons"}
          link={"/"}
        />
      </motion.div>
    </div>
  );
}
