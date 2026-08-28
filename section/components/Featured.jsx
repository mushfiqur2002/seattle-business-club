"use client";
import React from "react";
import Title from "@/ui/components/Title";
import BannerImage from "@/public/bannerImage.png";
import Image from "next/image";
import FeaturedCard from "@/ui/components/FeaturedCard";
import CardImage1 from "@/public/pexels-rachel-claire-5865195 1.png";
import { motion } from "motion/react";

export default function Featured() {
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
    <div id="featured" className="w-full h-auto relative">
      {/* banner image */}
      <div className="w-full h-full absolute top-0 left-0">
        <Image
          src={BannerImage}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            zIndex: "1",
            background: "#000",
          }}
          alt="banner image"
        />
        <div className="w-full h-full bg-[rgb(0,0,0,.5)] absolute top-0 left-0 z-10" />
      </div>
      {/* context */}
      <div className="w-auto h-auto mx-0 md:mx-10! 2xl:mx-12! pt-12! md:pt-20! 2xl:pt-28! pb-6! md:pb-12! 2xl:pb-16! px-0 2xl:px-10! border-0 md:border-x-2 border-[#1E1E1E]/10 z-10 relative">
        <motion.div
          variants={leftToRightVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="px-6! md:px-8! 2xl:px-0!"
        >
          <Title title={"featured businesses"} />
          <p className="w-full text-[36px] lg:text-[40px] pt-4! md:pt-8! text-white leading-none">
            The names worth knowing this month
          </p>
        </motion.div>

        <motion.div
          variants={rightToLeftVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pt-12! px-6! md:px-0"
        >
          <FeaturedCard
            image={CardImage1}
            title={"Café · Roaster"}
            heading={"Fremont Roasting Co."}
            paragraph={
              "A second-generation roaster turning a corner shop into the neighborhood’s living room."
            }
          />
          <FeaturedCard
            image={CardImage1}
            title={"Restaurant"}
            heading={"Pike & Vine"}
            paragraph={
              "Market-driven plates from two chefs who met working the same lunch rush."
            }
          />
          <FeaturedCard
            image={CardImage1}
            title={"Maker · Retail"}
            heading={"Salt Marsh Ceramics"}
            paragraph={
              "Wheel-thrown tableware sold to the restaurants that inspired it."
            }
          />
          <FeaturedCard
            image={CardImage1}
            title={"Café · Roaster"}
            heading={"Fremont Roasting Co."}
            paragraph={
              "A second-generation roaster turning a corner shop into the neighborhood’s living room."
            }
          />
        </motion.div>
      </div>
    </div>
  );
}
