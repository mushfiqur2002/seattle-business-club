"use client";
import React, { useState } from "react";
import Logo from "@/public/Group 1.png";
import Image from "next/image";
import Link from "next/link";
import Button from "@/ui/components/Button";

export default function NavBar() {
  const [clicked, setClicked] = useState(false);

  return (
    <div id="navbar" className="center-space-between h-[100px]">
      {/* logo */}
      <div>
        <Image
          src={Logo}
          alt="logo"
          width={100}
          height={100}
          style={{ height: "40px", width: "auto" }}
        />
      </div>
      {/* links and button */}
      <div className="hidden lg:flex justify-center items-center gap-12 xl:gap-24">
        {/* links */}
        <div>
          <ul className="center-center gap-8 xl:gap-12 text-[12px] xl:text-[14px] font-thin tracking-widest text-white/80 uppercase">
            <li>
              <Link href="#service">services</Link>
            </li>
            <li>
              <Link href="/">features</Link>
            </li>
            <li>
              <Link href="/">network events</Link>
            </li>
          </ul>
        </div>
        {/* button */}
        <div>
          <Button text={"join the club"} href={"/"} style={"default"} />
        </div>
      </div>
      {/* menu bar  */}
      <div className="flex lg:hidden text-white">
        <div
          onClick={() => setClicked(!clicked)}
          className="w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-[rgba(255,255,255,.075)] border border-white/15 backdrop-blur-xs  cursor-pointer center-center"
        >
          <p className="text-xl font-thin">=</p>
        </div>
      </div>

      {/* menu */}
      <div
        className={`${
          clicked === false ? "translate-x-full" : "translate-x-0"
        } transition-transform duration-300 ease-in-out flex flex-col justify-center items-center gap-12 xl:gap-24 fixed top-0 right-0 w-full sm:w-[80%] h-[100vh] bg-neutral-900 z-50`}
      >
        {/* close bar  */}
        <div
          onClick={() => setClicked(!clicked)}
          className="w-12 sm:w-14 w-12 h-12 sm:h-14 rounded-full bg-[rgba(255,255,255,.075)] border border-white/15 backdrop-blur-xs cursor-pointer center-center absolute top-10 right-10"
        >
          <p className="text-xl font-thin text-white/40">X</p>
        </div>
        {/* links */}
        <div>
          <ul className="center-center flex-col gap-8 xl:gap-12 text-[18px] font-thin tracking-widest text-white/80 uppercase">
            <li onClick={() => setClicked(false)}>
              <Link href="#service">services</Link>
            </li>
            <li onClick={() => setClicked(false)}>
              <Link href="/">features</Link>
            </li>
            <li onClick={() => setClicked(false)}>
              <Link href="/">network events</Link>
            </li>
          </ul>
        </div>
        {/* button */}
        <div onClick={() => setClicked(false)}>
          <Button text="join the club" href="/" />
        </div>
      </div>
    </div>
  );
}
