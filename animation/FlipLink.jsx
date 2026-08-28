"use client";
import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Arrow from "@/public/icons/Arrow up-right (1).png";
import ArrowBlack from "@/public/icons/Arrow up-right (black]).png";

export default function FlipLink({ fhref, fstyle, ftext }) {
  const capitalizedText = ftext
    ? ftext
        .split(" ")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ")
    : "";

  // 1. Text sliding rules
  const textVariants1 = { initial: { y: 0 }, hovered: { y: "-150%" } };
  const textVariants2 = { initial: { y: "150%" }, hovered: { y: 0 } };
  const arrowVariants1 = {
    initial: { x: 0, y: 0 },
    hovered: { x: 24, y: -24 },
  };
  const arrowVariants2 = {
    initial: { x: -24, y: 24 }, // Starts hidden in the bottom-left corner
    hovered: { x: 0, y: 0 },
  };

  const transitionSettings = { duration: 0.35, ease: "easeInOut" };

  return (
    <motion.a
      href={fhref}
      className="relative flex items-center justify-center gap-2 shrink-0 select-none"
      initial="initial"
      whileHover="hovered"
    >
      {/* Container for the text flip layers */}
      <div
        className={`relative overflow-hidden text-[12px] xl:text-[14px] font-thin text-white flex items-center
          ${fstyle === "default" && ""}      
          ${fstyle === "blue_default" && "text-[#4A5DF9]!"}      
          ${fstyle === "without_arrow" && ""}      
          ${fstyle === "custom" && ""}      
          ${fstyle === "link" && "text-[#1e1e1e]! uppercase text-[14px]! font-medium!"}`}
      >
        <motion.div variants={textVariants1} transition={transitionSettings}>
          {capitalizedText}
        </motion.div>

        <motion.div
          variants={textVariants2}
          transition={transitionSettings}
          className="absolute inset-0 flex items-center justify-center"
        >
          {capitalizedText}
        </motion.div>
      </div>

      {/* Container for the Arrow layout */}
      <span
        className={`w-[30px] md:w-[34px] h-[30px] md:h-[34px] flex justify-center items-center overflow-hidden shrink-0 relative
    ${fstyle === "without_arrow" && "hidden"}
    ${fstyle === "default" && "ml-4! bg-radial-[at_80%_-110%] from-[rgba(255,255,255,1)] to-[#4A5DF9] to-70%"}
    ${fstyle === "blue_default" && "ml-4! bg-radial-[at_80%_-110%] from-[rgba(255,255,255,1)] to-[#4A5DF9] to-70%"}
    ${fstyle === "custom" && "bg-transparent"}
    ${fstyle === "link" && "bg-transparent"}
  `}
      >
        {/* Layer 1: Visible by default, slides out on hover */}
        <motion.div
          variants={arrowVariants1}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          className="w-[12px] xl:w-[18px] h-[12px] xl:h-[18px] flex items-center justify-center"
        >
          {["blue_default", "default", "custom"].includes(fstyle) && (
            <Image
              src={Arrow}
              alt="arrow"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          )}
          {fstyle === "link" && (
            <Image
              src={ArrowBlack}
              alt="arrow"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          )}
        </motion.div>

        {/* Layer 2: Hidden below by default, slides in on hover */}
        <motion.div
          initial={{ y: 24, x: -24 }} // FIX: Explicitly hides this arrow below the container boundary initially
          variants={arrowVariants2}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          className="absolute w-[12px] xl:w-[18px] h-[12px] xl:h-[18px] flex items-center justify-center"
        >
          {["blue_default", "default", "custom"].includes(fstyle) && (
            <Image
              src={Arrow}
              alt="arrow"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          )}
          {fstyle === "link" && (
            <Image
              src={ArrowBlack}
              alt="arrow"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          )}
        </motion.div>
      </span>
    </motion.a>
  );
}
