import React from "react";
import Title from "../../ui/components/Title";
import NetworkCard from "../../ui/components/NetworkCard";
import Image01 from "../../public/networkImage01.png";
import Image03 from "../../public/networkImage02.png";
import Image02 from "../../public/networkImage03.png";

export default function Network() {
  return (
    <div
      id="network"
      className="w-auto h-auto mx-0 md:mx-10! 2xl:mx-12! pt-12! md:pt-24! 2xl:pt-40! pb-6! md:pb-12! 2xl:pb-20! border-0 md:border-x-2 border-[#1E1E1E]/10"
    >
      <div className="w-auto center-center flex-col px-6! md:px-8!">
        <Title title={"Network Events"} />
        <div className="center-center text-center justify-between! flex-col pt-4! md:pt-8! gap-4 lg:gap-0">
          <p className="w-full text-[36px] lg:text-[40px] text-[#1e1e1e] leading-none">
            Come meet the people{" "}
            <span className="text-[#4A5DF9]">building Seattle</span>
          </p>
          <p className="text-[16px] text-[#1e1e1] lg:pt-4!">
            Talks, workshops, and mixers. Click any event for details and to
            register.
          </p>
        </div>
      </div>

      <div className="pt-12!">
        <NetworkCard
          date={"aug 14"}
          week={"thu"}
          imageSrc={Image01}
          heading={"Brand Storytelling Night"}
          time={"6:30 – 9:00 PM "}
          place={" Capitol Hill Studio"}
          link={"/"}
        />
        <NetworkCard
          date={"aug 14"}
          week={"thu"}
          imageSrc={Image02}
          heading={"SEO & GEO Workshop"}
          time={"5:00 – 7:30 PM "}
          place={" South Lake Union"}
          link={"/"}
        />
        <NetworkCard
          date={"aug 14"}
          week={"thu"}
          imageSrc={Image03}
          heading={"Creators × Local Brands Mixer"}
          time={"2:00 – 5:00 PM "}
          place={"  Ballard Commons"}
          link={"/"}
        />
      </div>
    </div>
  );
}
