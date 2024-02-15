"use client";

import Image from "next/image";
import storeDevice from "../store";
import { useEffect, useState } from "react";

export default function BGGRid({ images }: { images: string[] }) {
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
      setImage(images[3]);
    }
  }, [device, images]);

  return <Image className="bg-grid" src={image} alt="" />;
}
