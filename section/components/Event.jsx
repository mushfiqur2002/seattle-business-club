import React from "react";
import Title from "../../ui/components/Title";
import Button from "../../ui/components/Button";
import EventCard from "@/ui/components/EventCard";
import Thump1 from "@/public/4 1.png";

export default function Event() {
  return (
    <div id="event" className="w-full h-auto">
      <div className="w-auto mx-0 md:mx-10! 2xl:mx-12! pt-12! md:pt-24! 2xl:pt-40! pb-6! md:pb-12! 2xl:pb-20! px-6! md:px-8! 2xl:px-10! border-0 md:border-x-2 border-[#1E1E1E]/10">
        <Title title={"Event Coverage"} />
        <div className="center-center justify-between! items-start! lg:items-center! flex-col lg:flex-row pt-4! md:pt-8! gap-4 lg:gap-0">
          <p className="w-full text-[36px] lg:text-[40px] text-[#1e1e1e] leading-none">
            We bring a camera and guest list
          </p>
          <div className="w-full center-center justify-end!">
            <Button text={"explore events"} style={"blue_default"} href={"/"} />
          </div>
        </div>
      </div>

      <div className="w-full h-full py-12! md:py-20! bg-[#1E1E1E]">
        <div className="center-center flex-col gap-16 mx-6! md:mx-16! lg:mx-40! 2xl:mx-64!">
          <EventCard
            imageSrc={Thump1}
            videoSrc={"/video.mp4"}
            title={"Capitol Hill Studio"}
            paragraph={"Brand Storytelling Night"}
            name1={"samantha T"}
            name2={"Angela sachmidt"}
            name3={"Amanda mizarahi"}
            name4={"Birttany moorer"}
          />
          <EventCard
            imageSrc={Thump1}
            videoSrc={"/video.mp4"}
            title={"Ballard Commons"}
            paragraph={"Creators × Local Brands Mixer"}
            name1={"samantha T"}
            name2={"Angela sachmidt"}
            name3={"Amanda mizarahi"}
            name4={"Birttany moorer"}
          />
        </div>
      </div>
    </div>
  );
}
