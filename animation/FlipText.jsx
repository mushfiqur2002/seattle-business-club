"use client";
import React from "react";
import { motion } from "motion/react";

export default function FlipText({ text }) {
  const capitalizedText = text
    ? text
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    : "";

  // FIX: This timing configuration makes text slide transitions feel instantaneous and fluid
  const smoothTransition = {
    duration: 0.45,
    ease: [0.215, 0.61, 0.355, 1], // Cinematic easeOut cubic curve
  };

  return (
    <motion.span
      className="relative block overflow-hidden whitespace-nowrap select-none"
      initial="initial"
      whileHover="hovered"
    >
      {/* Top Layer */}
      <motion.div
        variants={{
          initial: { y: 0 },
          hovered: { y: "-100%" },
        }}
        transition={smoothTransition} // Applied smooth transition here
      >
        {capitalizedText}
      </motion.div>

      {/* Bottom Layer sliding into view */}
      <motion.div
        className="absolute inset-0"
        variants={{
          initial: { y: "100%" },
          hovered: { y: 0 },
        }}
        transition={smoothTransition} // Applied smooth transition here
      >
        {capitalizedText}
      </motion.div>
    </motion.span>
  );
}
