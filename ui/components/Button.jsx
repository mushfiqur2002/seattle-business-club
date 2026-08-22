import Image from "next/image";
import Link from "next/link";
import React from "react";
import Arrow from "@/public/icons/Arrow up-right (1).png";

export default function Button({ text, href, style }) {
  return (
    <div
      className={`w-fit center-center p-[3px]! backdrop-filter-blur-xs
        ${style === "default" && "bg-[rgba(255,255,255,.15)]"}
        ${style === "blue_default" && "bg-[rgba(74,93,249,.15)]"}
        ${style === "without_arrow" && "bg-[rgba(255,255,255,.15)]"}
        ${style === "custom" && "bg-radial-[at_80%_-110%] from-[rgba(255,255,255,1)] to-[#4A5DF9] to-70%"}
        `}
    >
      <Link href={href} className="center-center">
        <p
          className={`text-[12px] xl:text-[14px] capitalize px-6! font-thin ${style === "blue_default" ? "text-[rgba(74,93,249,1)]" : "text-white"}`}
        >
          {text}
        </p>
        <span
          className={`w-[30px] xl:w-[36px] h-[30px] xl:h-[36px] justify-center items-center
            ${style === "without_arrow" ? "hidden" : "flex bg"}
            ${style === "default" && "bg-radial-[at_80%_-110%] from-[rgba(255,255,255,1)] to-[#4A5DF9] to-70%"}
            ${style === "blue_default" && "bg-radial-[at_80%_-110%] from-[rgba(255,255,255,1)] to-[#4A5DF9] to-70%"}
            ${style === "custom" && "bg-transparent"}
            `}
        >
          <div className="w-[12px] xl:w-[18px] h-[12px] xl:h-[18px]">
            <Image
              src={Arrow}
              alt="arrow"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </span>
      </Link>
    </div>
  );
}
