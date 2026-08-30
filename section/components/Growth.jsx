"use client";
import React from "react";
import Title from "../../ui/components/Title";
import Button from "../../ui/components/Button";
import GrowthCard from "../../ui/components/GrowthCard";
import Image from "next/image";
import BannerImage from "../../public/shortHero.png";
import AiMagicIcon from "../../public/icons/ai-magic.png";
import PenToolIcon from "../../public/icons/pen-tool-03.png";
import ContentWriting from "../../public/icons/content-writing.png";
import { motion } from "motion/react";
import Headline from "@/ui/components/Headline";

export default function Growth() {
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
    <div className="w-full h-full bg-black relative">
      {/* background image  */}
      <div className="w-full h-full absolute top-0 left-0">
        {/* layout */}
        <div className="w-full h-full bg-[rgba(0,0,0,.65)] absolute top-0 left-0"></div>
        <Image
          src={BannerImage}
          alt="image"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            objectPosition: "bottom",
          }}
        />
      </div>

      <div className="w-auto h-auto flex flex-col gap-6 lg:gap-0 lg:grid grid-cols-10 mx-0 md:mx-10! 2xl:mx-12! pt-12! md:pt-20! 2xl:pt-28! pb-6! md:pb-12! 2xl:pb-16! px-6! md:px-0! border-0 md:border-x-2 border-[#1E1E1E]/10 z-10 relative">
        <motion.div
          variants={leftToRightVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="col-span-5 2xl:col-span-4 w-auto center-center items-start! flex-col"
        >
          <Title title={"Business growth"} />
          <div className="center-center text-start items-start! flex-col gap-4">
            <Headline
              header={`through our creative partner`}
              span={`seattle creative studio.`}
              para={`Businesses and startups get professional support to build their
              brands, design their products, and tell their stories — so growth
              isn’t left to chance.`}
              dark={true}
            />
            <Button text={"explore services"} href={"/"} style={"custom"} />
          </div>
        </motion.div>

        <motion.div
          variants={rightToLeftVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="col-span-5 2xl:col-span-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 2xl:grid-cols-3 gap-4"
        >
          <GrowthCard
            logo={AiMagicIcon}
            heading={"build you brand"}
            paragraph={"Branding & visual identity."}
          />
          <GrowthCard
            logo={PenToolIcon}
            heading={"Design Your Product"}
            paragraph={"UI/UX, MVP & SaaS design."}
          />
          <GrowthCard
            logo={ContentWriting}
            heading={"Tell Your Story"}
            paragraph={"Videos & content."}
          />
        </motion.div>
      </div>
    </div>
  );
}
