import React from "react";

export default function Card({ heading, title, paragraph, number }) {
  return (
    <div className="sticky top-0 md:relative w-full h-full bg-[#EAECF8] border border-[#4A5DF9]/12 p-6!">
      <div className="absolute top-0 right-0">
        <p className="text-[#4A5DF9]/20 text-[48px] font-extrabold leading-none">
          {number}
        </p>
      </div>
      <div>
        <p className="capitalize text-[24px] font-semibold text-[#1e1e1e]">
          {heading}
        </p>
        <p className="capitalize text-[12px] pt-2!">{title}</p>
        <p className="text-[14px] text-[#1C1A17]/65 pt-6!">{paragraph}</p>
      </div>
    </div>
  );
}
