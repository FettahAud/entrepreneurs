"use client";

import Image from "next/image";
import storeDevice from "../utils/store";
import { useEffect, useState } from "react";

export default function BGGRid({
  images,
  className = "",
}: {
  images: string[];
  className?: string;
}) {
  const { device } = storeDevice();
  const [image, setImage] = useState(images[0]);
  useEffect(() => {
    if (device === "desktop") {
      setImage(images[0]);
    } else if (device === "laptop") {
      setImage(images[1]);
    } else if (device === "tablet") {
      setImage(images[2]);
    } else {
      if (images[3]) {
        setImage(images[3]);
      } else {
        setImage("");
      }
    }
  }, [device, images]);

  return (
    image && <Image className={`bg-grid ${className}`} src={image} alt="" />
  );
}
