"use client";

import React from "react";
import { motion } from "motion/react";

export default function TextSplit({ text, Tag = "h1", className, speed }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: speed },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: "100%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  };

  // 1. Separate gradient styles so they apply directly to the letters
  const isGradient = className.includes("bg-clip-text");

  // Clean up the parent class if it has gradient modifiers
  const parentClassName = className
    .replace("bg-clip-text", "")
    .replace("text-transparent", "");

  return (
    <Tag className={`overflow-hidden py-1 ${parentClassName}`}>
      <motion.span
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-wrap"
      >
        {text.split("").map((char, index) => (
          <span key={index} className="inline-block overflow-hidden">
            <motion.span
              variants={letterVariants}
              // 2. Inject gradient classes onto the individual letters so it renders perfectly
              className={`inline-block ${
                isGradient
                  ? "bg-[linear-gradient(60deg,white_0%,white_20%,#4A5DF9_100%,#4A5DF9_10%)] bg-clip-text text-transparent"
                  : ""
              }`}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
