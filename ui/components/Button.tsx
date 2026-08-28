import FlipLink from "@/animation/FlipLink"

interface ButtonType {
  text: string;
  href: string;
  style: "default" | "blue_default" | "without_arrow" | "custom" | "link";
}

export default function Button({ text, href, style }: ButtonType) {
  return (
    <div
      className={`w-fit center-center backdrop-filter-blur-xs p-1! 
    ${style === "default" && "pl-6! bg-[rgba(255,255,255,.15)]"}
    ${style === "blue_default" && "pl-6! bg-[rgba(74,93,249,.15)]"}
    ${style === "without_arrow" && "px-6! bg-[rgba(255,255,255,.15)]"}
    ${style === "custom" && "pl-6! bg-radial-[at_80%_-110%] from-[rgba(255,255,255,1)] to-[#4A5DF9] to-70%"}
    ${style === "link" && "p-0! bg-transparent border-b-[1.5px]"}
  `}
    >
      <FlipLink fhref={href} ftext={text} fstyle={style} />
    </div>

  );
}