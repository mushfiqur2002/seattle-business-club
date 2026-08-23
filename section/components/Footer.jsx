import React from "react";
import Logo from "../../public/icons/logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div>
      <div className="w-auto h-auto center-center flex-col mx-0 md:mx-10! 2xl:mx-12! pt-12! md:pt-24! 2xl:pt-40! pb-6! md:pb-12! 2xl:pb-20! border-0 md:border-x-2 border-[#1E1E1E]/10">
        <div className="w-full lg:w-[95%] h-auto bg-[#000710] center-center flex-col lg:flex-row justify-between! py-12! lg:py-0">
          <div className="center-center flex-col items-start! gap-6 px-8! md:px-12!">
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

          <div className="w-full px-8! md:px-0! pt-12! center-center justify-between! md:justify-center lg:justify-end! items-start!">
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
        </div>
        <div className="w-full uppercase py-4!">
          <h1 className="text-[clamp(2rem,15vw,291px)] font-extrabold text-[#1e1e1e] leading-none text-start">
            Seattle
          </h1>
          <h1 className="text-[clamp(2rem,15vw,291px)] font-extrabold text-[#979BA3] leading-none text-end">
            Business
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
