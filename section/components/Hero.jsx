import Image from "next/image";
import React from "react";
import HeroImage from "@/public/heroImage.png";
import BannerImage from "@/public/Frame 87.png";
import Button from "@/ui/components/Button";

export default function Hero() {
  return (
    <div
      id="hero"
      className="w-full h-screen bg-black center-center text-white relative overflow-hidden"
    >
      {/* BACKGROUND HERO IMAGE FIX */}
      <div className="absolute inset-0 z-0">
        <Image
          src={HeroImage}
          alt="hero background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Decorative Card Layer */}
      <div className="hidden sm:flex card w-[250px] sm:w-[400px] md:w-[500px] h-full absolute top-0 left-[40px] overflow-hidden z-10" />

      {/* CONTENT & OVERLAY BANNER CONTAINER */}
      <div className="w-full center-center justify-start! absolute bottom-42 sm:bottom-56 lg:bottom-24 z-20">
        <div className="relative px-6! sm:px-10! md:pl-0! md:left-20 lg:left-34">
          <div className="w-auto flex flex-col-reverse relative">
            <div className="text-white">
              <h1 className="uppercase text-[clamp(3.5rem,13vw,250px)] font-extrabold tracking-tighter leading-none bg-[linear-gradient(60deg,white_0%,white_20%,#4A5DF9_100%,#4A5DF9_10%)] bg-clip-text text-transparent">
                seattle
              </h1>
              <h1 className="uppercase text-[clamp(1.75rem,6.5vw,125px)] leading-none mt-1">
                business club
              </h1>
              <p className="text-[12px] md:text-[14px] lg:text-[12px] xl:text-[20px] text-white/80 font-thin tracking-wider capitalize pt-6! xl:pt-10! 2xl:pt-12!">
                Seattle Business Club is a media and community platform that
                helps Seattle businesses get <br></br> discovered, connected,
                and grow.
              </p>
            </div>
            <div className="w-[150px] hidden md:flex h-[180px] sm:h-[140px] lg:h-[130px] xl:h-[180px] 2xl:h-[220px]">
              <Image
                src={BannerImage}
                alt="banner overlay"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 pt-6! xl:pt-12!">
            <Button text={"see what we do"} href={"/"} style={"custom"} />
            <Button text={"join the club"} href={"/"} style={"without_arrow"} />
          </div>
        </div>

        {/* OVERLAY BANNER IMAGE FIX */}
      </div>
    </div>
  );
}
