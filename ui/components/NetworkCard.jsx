import Image from "next/image";
import React from "react";
import Button from "../../ui/components/Button";

export default function NetworkCard({
  date,
  week,
  imageSrc,
  heading,
  time,
  place,
  link,
}) {
  return (
    <div className="grid grid-cols-10 text-[#1e1e1e] p-6! border-y-2 border-[#1E1E1E]/10 gap-4 lg:gap-8">
      <div className="hidden lg:flex col-span-1 flex-col justify-end gap-2">
        <p className="text-[20px] xl:text-[24px] capitalize text-base/7">
          {date}
        </p>
        <p className="text-[14px] text-[#1e1e1e]/60 uppercase">{week}</p>
      </div>

      <div className="hidden md:flex col-span-2 place-content-end w-full h-[120px] lg:h-[160px]">
        <Image
          src={imageSrc}
          alt="image"
          width={100}
          height={100}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      <div className="col-span-7 md:col-span-5 lg:col-span-5 place-content-end flex flex-col">
        <h1 className="text-[28px] xl:text-[32px] text-base/7">{heading}</h1>
        <p className="text-[14px] text-[#1e1e1e]/60 pt-2!">
          {time} . {place}
        </p>
        <div className="flex lg:hidden items-end! pt-1!">
          <p className="text-[20px] xl:text-[24px] capitalize">{date}, </p>
          <p className="text-[20px] text-[#1e1e1e]/60 uppercase">{week}</p>
        </div>
      </div>

      <div className="col-span-3 md:col-span-3 lg:col-span-2 place-content-start place-items-end">
        <div className="flex md:hidden w-full h-[120px] lg:h-[160px]">
          <Image
            src={imageSrc}
            alt="image"
            width={100}
            height={100}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
        <Button href={link} text={"limited seats"} style={"link"} />
      </div>
    </div>
  );
}
