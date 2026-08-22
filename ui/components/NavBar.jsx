"use client";
import React, { useState } from "react";
import Logo from "@/public/Group 1.png";
import Image from "next/image";
import Link from "next/link";
import Button from "@/ui/components/Button";

export default function NavBar() {
  const [clicked, setClicked] = useState(false);

  return (
    <div
      id="navbar"
      className="flex justify-between items-center h-[100px]" // Swapped center-space-between to explicit Tailwind classes for safety
    >
      {/* logo */}
      <div>
        <Image
          src={Logo}
          alt="logo"
          width={100}
          height={100}
          priority // Added priority tag because this image asset sits strictly above the fold layout line
          style={{ height: "40px", width: "auto" }}
        />
      </div>

      {/* links and button */}
      <div className="hidden lg:flex justify-center items-center gap-12 xl:gap-24">
        {/* links */}
        <div>
          <ul className="flex justify-center items-center gap-8 xl:gap-12 text-[12px] xl:text-[14px] font-thin tracking-widest text-white/80 uppercase">
            <li>
              {/* Target sections will now scroll neatly below your fixed header height banner */}
              <Link
                href="#service"
                className="hover:text-white transition-colors duration-200"
              >
                services
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="hover:text-white transition-colors duration-200"
              >
                features
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="hover:text-white transition-colors duration-200"
              >
                network events
              </Link>
            </li>
          </ul>
        </div>
        {/* button */}
        <div>
          <Button text={"join the club"} href={"/"} style={"default"} />
        </div>
      </div>

      {/* menu bar toggle button */}
      <div className="flex lg:hidden text-white">
        <div
          onClick={() => setClicked(!clicked)}
          className="w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-white/[0.075] border border-white/15 backdrop-blur-xs cursor-pointer flex justify-center items-center"
        >
          <p className="text-xl font-thin">=</p>
        </div>
      </div>

      {/* mobile drawer panel menu */}
      <div
        className={`${
          clicked === false ? "-translate-y-full" : "translate-y-0"
        } flex lg:hidden transition-transform duration-300 ease-in-out flex flex-col justify-center items-center gap-12 xl:gap-24 fixed top-0 right-0 w-full sm:w-[80%] h-[100vh] bg-neutral-900 z-50`}
      >
        {/* close bar button */}
        <div
          onClick={() => setClicked(false)}
          className="w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-white/[0.075] border border-white/15 backdrop-blur-xs cursor-pointer flex justify-center items-center absolute top-10 right-10" // Removed duplicate w-12 tag
        >
          <p className="text-xl font-thin text-white/40">X</p>
        </div>
        {/* mobile menu navigation links */}
        <div>
          <ul className="flex flex-col justify-center items-center gap-8 xl:gap-12 text-[18px] font-thin tracking-widest text-white/80 uppercase">
            <li onClick={() => setClicked(false)}>
              <Link
                href="#service"
                className="hover:text-white transition-colors duration-200"
              >
                services
              </Link>
            </li>
            <li onClick={() => setClicked(false)}>
              <Link
                href="/"
                className="hover:text-white transition-colors duration-200"
              >
                features
              </Link>
            </li>
            <li onClick={() => setClicked(false)}>
              <Link
                href="/"
                className="hover:text-white transition-colors duration-200"
              >
                network events
              </Link>
            </li>
          </ul>
        </div>
        {/* mobile menu button wrapper target */}
        <div onClick={() => setClicked(false)}>
          <Button text={"join the club"} href={"/"} style={"default"} />
        </div>
      </div>
    </div>
  );
}
