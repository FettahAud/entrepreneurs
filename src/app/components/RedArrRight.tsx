import Image from "next/image";
import arrRight from "@/../public/arrow-right.svg";

export default function RedArrRight() {
  return (
    <div className="red-arr-wrapper">
      <Image src={arrRight} alt="" />
    </div>
  );
}
