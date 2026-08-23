import Image from "next/image";
import Link from "next/link";
import React from "react";
import Arrow from "@/public/icons/Arrow up-right (1).png";

interface ButtonType {
  text: string;
  href: string;
  style: "default" | "blue_default" | "without_arrow" | "custom" | "link";
}

export default function Button({ text, href, style }: ButtonType) {
  return (
    <div
      className={`w-fit center-center backdrop-filter-blur-xs
        ${style === "default" ? "p-[3px]! bg-[rgba(255,255,255,.15)]" : ""}
        ${style === "blue_default" ? "p-[3px]! bg-[rgba(74,93,249,.15)]" : ""}
        ${style === "without_arrow" ? "p-[3px]! bg-[rgba(255,255,255,.15)]" : ""}
        ${style === "custom" ? "p-[3px]! bg-radial-[at_80%_-110%] from-[rgba(255,255,255,1)] to-[#4A5DF9] to-70%" : ""}
        ${style === "link" ? "p-0! bg-transparent border-b-2" : ""}
      `}
    >
      <Link href={href} className="center-center">
        <p
          className={`text-[12px] xl:text-[14px] capitalize font-thin 
            ${style === "default" ? "px-6! text-white" : ""}
            ${style === "blue_default" ? "px-6! text-[rgba(74,93,249,1)]" : ""}
            ${style === "link" ? "px-0! text-[#1e1e1e] uppercase text-[14px]" : ""}`
          }
        >
          {text}
        </p>
        <span
          className={`w-[30px] xl:w-[36px] h-[30px] xl:h-[36px] justify-center items-center
            ${style === "without_arrow" ? "hidden" : "flex bg"}
            ${style === "default" ? "bg-radial-[at_80%_-110%] from-[rgba(255,255,255,1)] to-[#4A5DF9] to-70%" : ""}
            ${style === "blue_default" ? "bg-radial-[at_80%_-110%] from-[rgba(255,255,255,1)] to-[#4A5DF9] to-70%" : ""}
            ${style === "custom" ? "bg-transparent" : ""}
            ${style === "link" ? "bg-transparent" : ""}
          `}
        >
          <div className="w-[12px] xl:w-[18px] h-[12px] xl:h-[18px]">
            {["blue_default", "default", "custom"].includes(style) && (
              <Image
                src={Arrow}
                alt="arrow"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            )}
            {style === "link" && (
              <Image
                src={Arrow}
                alt="arrow"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  rotate: "270deg"
                }}
              />
            )}
          </div>
        </span>
      </Link>
    </div>
  );
}