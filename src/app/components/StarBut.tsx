import Image from "next/image";

import star1 from "@/../public/star-1.svg";
import star2 from "@/../public/star-2.svg";
import star3 from "@/../public/star-3.svg";

export default function StarBut({ text }: { text: string }) {
  return (
    <div className="but star-but">
      <span>{text}</span>
      <Image className="star-1" src={star1} alt="" />
      <Image className="star-2" src={star2} alt="" />
      <Image className="star-3" src={star2} alt="" />
    </div>
  );
}
