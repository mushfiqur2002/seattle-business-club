import Image from "next/image";
import React from "react";

export default function GrowthCard({ logo, heading, paragraph }) {
  return (
    <div className="w-full h-[180px] md:h-[200px] xl:h-[220px] bg-[rgba(255,255,255,0.1)] border border-white/20 backdrop-blur-sm relative">
      <div className="w-[24px] h-[24px] absolute top-5 right-5">
        <Image
          src={logo}
          alt="logo"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
      <div className="absolute bottom-0 left-0 p-4!">
        <h1 className="text-[16px] md:text-[20px] xl:text-[24px] text-white font-medium capitalize">
          {heading}
        </h1>
        <p className="text-[12px] md:text-[14px] xl:text-[16px] text-white/60">
          {paragraph}
        </p>
      </div>
    </div>
  );
}
