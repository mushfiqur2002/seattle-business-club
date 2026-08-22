import React from "react";
import Title from "../../ui/components/Title";
import NetworkCard from "../../ui/components/NetworkCard";
import Image01 from "../../public/bannerImage.png";

export default function Network() {
  return (
    <div
      id="network"
      className="w-full h-auto mx-0 md:mx-10! 2xl:mx-12! pt-12! md:pt-24! 2xl:pt-40! pb-6! md:pb-12! 2xl:pb-20! border-0 md:border-x-2 border-[#1E1E1E]/10"
    >
      <div className="w-auto center-center flex-col">
        <Title title={"Network Events"} />
        <div className="center-center justify-between! items-start! lg:items-center! flex-col pt-4! md:pt-8! gap-4 lg:gap-0">
          <p className="w-full text-[36px] lg:text-[40px] text-[#1e1e1e] leading-none">
            Come meet the people{" "}
            <span className="text-[#4A5DF9]">building Seattle</span>
          </p>
          <p className="text-[16px] text-[#1e1e1] pt-4!">
            Talks, workshops, and mixers. Click any event for details and to
            register.
          </p>
        </div>
      </div>

      <div>
        <NetworkCard
          date={"aug 14"}
          week={"thu"}
          imageSrc={Image01}
          heading={"Brand Storytelling Night"}
          time={"6:30 – 9:00 PM "}
          place={" Capitol Hill Studio"}
          link={"/"}
        />
      </div>
    </div>
  );
}
