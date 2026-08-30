import Image from "next/image";
import React from "react";
import Title from "./Title";

export default function FeaturedCard({ image, title, heading, paragraph }) {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full h-[150px] lg:h-[180px]">
        <Image
          src={image}
          alt="image1"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
      <div className="w-full h-full bg-[rgba(255,255,255,.1)] backdrop-blur-xl                                                                           p-[20px]! border border-white/10">
        <Title title={title} />
        <p className="text-[18px] lg:text-[24px] text-white pt-2! md:pt-4! lg:pt-[24px]!">
          {heading}
        </p>
        <p className="text-[12px] lg:text-[16px] text-white/60 pt-1! md:pt-2! lg:pt-[12px]!">
          {paragraph}
        </p>
      </div>
    </div>
  );
}
