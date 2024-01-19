"use client";

import redArrow from "@/../public/red-bg-rarrow.svg";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "../utils/gsap";
import RedArrRight from "./RedArrRight";

export default function DoubleBut({ text }: { text: string }) {
  const but = useRef<HTMLButtonElement>(null);
  const tl = gsap.timeline({ paused: true });
  useEffect(() => {
    if (but.current) {
      tl.add("start", 0);
      tl.to(
        but.current.querySelector("span"),
        {
          flex: "1 1 1",
        },
        "start"
      ).to(
        but.current,
        {
          width: " 19.1875rem",
          paddingTop: "0.5rem",
          paddingRight: "0.5rem",
          paddingBottom: "0.5rem",
          paddingLeft: "1.5rem",
        },
        "start+=0.25"
      );
    }
    return () => {
      tl.kill();
    };
  }, [tl]);

  return (
    <button
      ref={but}
      className="but double-border"
      onMouseOver={() => tl.play()}
      onMouseLeave={() => tl.reverse()}
    >
      <span>{text}</span>
      <Image src={redArrow} alt="" />
      {/* <RedArrRight /> */}
    </button>
  );
}
