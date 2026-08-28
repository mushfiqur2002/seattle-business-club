"use client";
import React from "react";
import FlipText from "@/animation/FlipText";

export default function Title({ title }) {
  return (
    <div>
      <p className="uppercase text-[14px] text-[#4A5DF9] font-bold">
        <FlipText text={title} />
      </p>
    </div>
  );
}
