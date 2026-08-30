"use client";
import React, { useState, useEffect, useRef } from "react";
import Logo from "@/public/icons/Group 1.png";
import Image from "next/image";
import Button from "@/ui/components/Button";
import FlipText from "@/animation/FlipText";
import { motion, AnimatePresence } from "motion/react";

export default function NavBar() {
  const [clicked, setClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const hideTimeoutRef = useRef | (null > null);

  useEffect(() => {
    // 1. DESKTOP MOUSE POSITION WATCHER
    const handleMouseMove = (e) => {
      if (window.innerWidth >= 1024) {
        if (e.clientY <= 100) {
          setIsVisible(true);
        } else if (!clicked) {
          setIsVisible(false);
        }
      }
    };

    // 2. MOBILE SCROLL WATCHER (Set to 6 seconds)
    const handleScrollWatcher = () => {
      if (window.innerWidth < 1024) {
        setIsVisible(true);

        if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);

        hideTimeoutRef.current = setTimeout(() => {
          if (!clicked) {
            setIsVisible(false);
          }
        }, 6000);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScrollWatcher);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScrollWatcher);
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    };
  }, [clicked]);

  // FIX: Custom Smooth Scroll Handler that guarantees redirection and respects layout padding
  const handleAnchorClick = (e, targetId) => {
    e.preventDefault();
    setClicked(false); // Closes mobile menu tray immediately

    const element = document.getElementById(targetId.replace("#", ""));
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const magnetHover = {
    initial: { y: 0, x: 0 },
    hover: {
      y: -3,
      scale: 1.05,
      transition: { duration: 0.3, ease: [0.25, 1, 0.5, 1] },
    },
  };

  const listContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const mobileLinkVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.div
      id="navbar"
      animate={{ y: isVisible ? 0 : "-100%" }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="flex items-center justify-between -translate-x-1/2 px-6! md:px-8! lg:px-18! py-4! md:py-6! select-none fixed top-0 left-0 w-full z-50 bg-neutral-950/20 backdrop-blur-md border-b border-white/5"
    >
      {/* logo */}
      <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.2 }}>
        <Image
          src={Logo}
          alt="logo"
          width={100}
          height={100}
          priority
          style={{ height: "40px", width: "auto" }}
        />
      </motion.div>

      {/* desktop links and button */}
      <div className="hidden lg:flex justify-center items-center gap-12 xl:gap-24">
        <div>
          <ul className="flex justify-center items-center gap-8 xl:gap-12 text-[12px] xl:text-[14px] font-thin tracking-widest text-white/80 uppercase">
            {/* FIX: Swapped Next.js Link out for standard anchors driven by the custom onClick runner */}
            <motion.li
              variants={magnetHover}
              initial="initial"
              whileHover="hover"
            >
              <a
                href="#service"
                onClick={(e) => handleAnchorClick(e, "service")}
                className="hover:text-white transition-colors duration-200 block py-1"
              >
                <FlipText text={"service"} />
              </a>
            </motion.li>
            <motion.li
              variants={magnetHover}
              initial="initial"
              whileHover="hover"
            >
              <a
                href="#featured"
                onClick={(e) => handleAnchorClick(e, "featured")}
                className="hover:text-white transition-colors duration-200 block py-1"
              >
                <FlipText text={"features"} />
              </a>
            </motion.li>
            <motion.li
              variants={magnetHover}
              initial="initial"
              whileHover="hover"
            >
              <a
                href="#event"
                onClick={(e) => handleAnchorClick(e, "event")}
                className="hover:text-white transition-colors duration-200 block py-1"
              >
                <FlipText text={"network events"} />
              </a>
            </motion.li>
          </ul>
        </div>
        <div>
          <Button text={"join the club"} href={"/"} style={"default"} />
        </div>
      </div>

      {/* menu bar toggle button */}
      <div className="flex lg:hidden text-white">
        <motion.div
          onClick={() => setClicked(!clicked)}
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.95 }}
          className="w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-white/[0.075] border border-white/15 backdrop-blur-xs cursor-pointer flex justify-center items-center"
        >
          <p className="text-xl font-thin">=</p>
        </motion.div>
      </div>

      {/* mobile drawer panel menu */}
      <AnimatePresence>
        {clicked && (
          <motion.div
            initial={{
              opacity: 0,
              clipPath: "circle(30px at calc(100% - 40px) 40px)",
            }}
            animate={{
              opacity: 1,
              clipPath: "circle(150% at calc(100% - 40px) 40px)",
            }}
            exit={{
              opacity: 0,
              clipPath: "circle(30px at calc(100% - 40px) 40px)",
            }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="flex lg:hidden flex-col justify-center items-center gap-16 fixed inset-0 w-full h-[100vh] bg-neutral-950/98 backdrop-blur-md z-50"
          >
            {/* close bar button */}
            <motion.div
              onClick={() => setClicked(false)}
              whileHover={{ scale: 1.1, rotate: -90 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-white/[0.075] border border-white/15 backdrop-blur-xs cursor-pointer flex justify-center items-center absolute top-10 right-10"
            >
              <p className="text-xl font-thin text-white/60">X</p>
            </motion.div>

            {/* mobile menu navigation links */}
            <motion.div
              variants={listContainerVariants}
              initial="hidden"
              animate="visible"
            >
              <ul className="flex flex-col justify-center items-center gap-8 text-[22px] font-light tracking-widest text-white/80 uppercase">
                {/* FIX: Handled mobile link clicks identically */}
                <motion.li
                  variants={mobileLinkVariants}
                  whileHover={{ scale: 1.08, x: 5 }}
                >
                  <a
                    href="#service"
                    onClick={(e) => handleAnchorClick(e, "service")}
                    className="hover:text-white transition-colors duration-200"
                  >
                    Service
                  </a>
                </motion.li>
                <motion.li
                  variants={mobileLinkVariants}
                  whileHover={{ scale: 1.08, x: 5 }}
                >
                  <a
                    href="#featured"
                    onClick={(e) => handleAnchorClick(e, "featured")}
                    className="hover:text-white transition-colors duration-200"
                  >
                    Features
                  </a>
                </motion.li>
                <motion.li
                  variants={mobileLinkVariants}
                  whileHover={{ scale: 1.08, x: 5 }}
                >
                  <a
                    href="#event"
                    onClick={(e) => handleAnchorClick(e, "event")}
                    className="hover:text-white transition-colors duration-200"
                  >
                    Network Events
                  </a>
                </motion.li>
              </ul>
            </motion.div>

            <motion.div
              variants={mobileLinkVariants}
              initial="hidden"
              animate="visible"
            >
              <Button text={"join the club"} href={"/"} style={"default"} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
