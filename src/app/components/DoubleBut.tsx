import redArrow from "@/../public/red-bg-rarrow.svg";
import Image, { StaticImageData } from "next/image";

export default function DoubleBut({ text }: { text: string }) {
  return (
    <button className="but double-border">
      <span>{text}</span>
      <Image src={redArrow} alt="" />
    </button>
  );
}
