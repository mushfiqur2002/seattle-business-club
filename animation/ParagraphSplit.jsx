"use client";

import React from "react";
import { motion } from "motion/react";

export default function ParagraphSplit({ text, className, speed = 1 }) {
  // Container variant handles the sequential line entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: speed, // Time delay between each paragraph block or line
      },
    },
  };

  // Line variant reveals the line by sliding it up out of an overflow box
  const lineVariants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.25, 1, 0.5, 1], // Smooth cinematic ease-out curve
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={className}
    >
      {/* We look for line breaks (\n) to split the paragraphs into distinct layout blocks */}
      {text.split("|\n").map((line, index) => {
        if (!line.trim()) return null; // Skip empty rows

        return (
          <div key={index} className="overflow-hidden inline-block py-1">
            <motion.p variants={lineVariants} className="m-0 leading-relaxed">
              {line}
            </motion.p>
          </div>
        );
      })}
    </motion.div>
  );
}
