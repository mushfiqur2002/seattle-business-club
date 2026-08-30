import React from "react";

export default function Headline({ header, para, span, dark, center }) {
  return (
    <div
      className={`pt-4! md:pt-8! flex flex-col gap-2 ${dark ? "text-white" : "text-[#1e1e1e]"}`}
    >
      {header && (
        <h1
          className={`capitalize w-full text-[32px] md:text-[36px] lg:text-[40px] leading-none ${center && "text-center"}`}
        >
          {header} {span && <span className="text-[#4A5DF9]">{span}</span>}
        </h1>
      )}
      {para && (
        <p
          className={`text-[16px] pt-2! lg:pt-4! ${dark ? "text-white/60" : "text-[#1e1e1]"} ${center && "text-center"}`}
        >
          {para}
        </p>
      )}
    </div>
  );
}
