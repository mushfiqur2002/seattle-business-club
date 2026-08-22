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
    <div className="grid grid-cols-7">
      <div className="col-span-1">
        <p>{date}</p>
        <p>{week}</p>
      </div>
      <div className="col-span-1">
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
      <div className="col-span-4">
        <h1>{heading}</h1>
        <p>
          {time} . {place}
        </p>
      </div>
      <div className="col-span-1">
        <Button href={link} text={"limited seats"} style={"link"} />
      </div>
    </div>
  );
}
