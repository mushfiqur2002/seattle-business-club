import React from "react";
import Title from "@/ui/components/Title";
import Card from "@/ui/components/Card";

export default function Service() {
  return (
    <div id="service" className="w-full h-auto center-center">
      <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-5 gap-12 xl:gap-0 mx-0 md:mx-10! 2xl:mx-12! py-12! md:py-24! 2xl:py-40! px-6! md:px-8! 2xl:px-10! border-0 md:border-x-2 border-[#1E1E1E]/10">
        <div className="2xl:col-span-3 pr-0 xl:pr-8! 2xl:pr-12! center-center items-start! flex-col">
          <Title title={"what we do"} />
          <p className="text-[22px] md:text-[28px] 2xl:text-[32px] text-[#1E1E1E] pt-4! md:pt-8!">
            We’re an event management club dedicated to helping local
            organizations thrive through expert planning, promotion, and
            execution. From small gatherings to large-scale events, we craft
            seamless experiences and memorable moments that foster community
            engagement and lasting connections.
          </p>
        </div>
        <div className="relative gap-6 w-full h-full grid md:grid-cols-2 md:grid-row-2 2xl:col-span-2">
          <Card
            number={"01"}
            heading={"Media"}
            title={"discover"}
            paragraph={
              "Spotlights, founder stories, and new openings that put local businesses on the map."
            }
          />
          <Card
            number={"02"}
            heading={"Community"}
            title={"Connect"}
            paragraph={
              "A network of owners, operators, and creators who show up for each other."
            }
          />
          <Card
            number={"03"}
            heading={"Events"}
            title={"Experience"}
            paragraph={
              "Mixers, panels, and coverage that turn a room full of strangers into regulars."
            }
          />
          <Card
            number={"04"}
            heading={"Growth"}
            title={"Grow"}
            paragraph={
              "Creative support to build your brand, design your product, and tell your story."
            }
          />
        </div>
      </div>
    </div>
  );
}
