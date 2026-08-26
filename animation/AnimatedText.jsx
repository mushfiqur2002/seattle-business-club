"use client"; // Required for Next.js App Router client-side logic

import { motion } from "motion/react"; // Updated import for the modern 'motion' library

export default function AnimatedText({
  text,
  className,
  el: Tag = "h1",
  delay = 0.15,
}) {
  const words = text.split(" ");

  // Container configuration handles stagger
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: delay,
      },
    },
  };

  // Word configuration handles individual fade + slide up
  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 15,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <Tag className={className}>
      <motion.span
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-wrap gap-[0.23em] w-full"
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            variants={wordVariants}
            className="inline-block"
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
}
