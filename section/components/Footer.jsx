"use client";
import React from "react";
import Logo from "../../public/icons/logo.png";
import Image from "next/image";
import Link from "next/link";
import TextSplit from "@/animation/TextSplit";
import { motion } from "motion/react";

export default function Footer() {
  const rightToLeftVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
    },
  };
  return (
    <div>
      <div className="w-auto h-auto center-center flex-col mx-0 md:mx-10! 2xl:mx-12! pt-12! md:pt-20! 2xl:pt-28! pb-6! md:pb-12! 2xl:pb-16! border-0 md:border-x-2 border-[#1E1E1E]/10">
        <motion.div
          variants={rightToLeftVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="w-full lg:w-[95%] h-auto bg-[#000710] center-center flex-col lg:flex-row justify-between! py-12! lg:py-0"
        >
          <div className="center-center flex-col items-start! gap-6 px-6! md:px-12!">
            <Image
              src={Logo}
              alt="logo"
              style={{
                width: "auto",
                height: "40px",
                objectFit: "contain",
              }}
            />
            <p className="text-[16px] text-white/60">
              A media & creative agency helping Seattles local businesses grow
              through storytelling.
            </p>
          </div>

          <div className="w-full px-6! md:px-0! pt-12! center-center justify-between! md:justify-center lg:justify-end! items-start!">
            <div className="w-auto h-full lg:border-l-2 border-white/10 lg:px-12! lg:py-16! flex flex-col md:flex-row lg:flex-col center-center items-start! gap-4 lg:gap-0">
              <h1 className="text-[14px] text-white font-medium uppercase md:-rotate-90 lg:rotate-0 origin-bottom-right leading-none">
                Explore
              </h1>
              <ul className="text-[14px] text-white/60 capitalize flex flex-col gap-3 lg:pt-4!">
                <li>
                  <Link href="#service">service</Link>
                </li>
                <li>
                  <Link href="#growth">work</Link>
                </li>
                <li>
                  <Link href="/">pricing</Link>
                </li>
                <li>
                  <Link href="#event">network event</Link>
                </li>
              </ul>
            </div>

            <div className="w-auto h-full lg:border-l-2 border-white/10 lg:px-12! lg:py-16! flex flex-col md:flex-row lg:flex-col center-center items-start! gap-4 lg:gap-0">
              <h1 className="text-[14px] text-white font-medium uppercase md:-rotate-90 lg:rotate-0 origin-bottom-right leading-none">
                say hello
              </h1>
              <ul className="text-[14px] text-white/60 capitalize flex flex-col gap-3 lg:pt-4!">
                <li>
                  <p>hello@seattlebusiness.co</p>
                </li>
                <li>
                  <p>Capitol Hill, Seattle WA</p>
                </li>
                <li>
                  <p>(206) 555-0147</p>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        <div className="w-full uppercase py-4! relative px-4!">
          {/* FIX: Removed absolute. Now this pushes the parent container's height open naturally */}
          <h1 className="">
            <TextSplit
              text={"seattle"}
              className="text-[clamp(2rem,15vw,291px)] font-extrabold text-[#1e1e1e] leading-none text-start"
              speed={0.06}
            />
          </h1>

          {/* Keeps absolute right alignment layer */}
          <h1 className="center-center justify-end!">
            <TextSplit
              text={"Business"}
              className="text-[clamp(2rem,15vw,291px)] font-extrabold text-[#979BA3] leading-none text-end"
              speed={0.06}
            />
          </h1>
        </div>
      </div>
      <div className="w-full bg-[#1E1E1E] py-4! lg:py-5! center-center">
        <p className="text-[14px] text-white/60">
          © 2026 Seattle Business. All rights reserved.
        </p>
      </div>
    </div>
  );
}
