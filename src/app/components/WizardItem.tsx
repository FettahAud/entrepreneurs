"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "../utils/gsap";
import { Item } from "../sections/Wizard";
import { useGSAP } from "@gsap/react";

export default function WizardItem({
  item,
  index,
}: {
  item: Item;
  index: number;
}) {
  const itemRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>();
  useGSAP(() => {
    if (itemRef.current !== null) {
      const numbers =
        itemRef.current?.parentElement?.querySelectorAll(".number");
      const highlight: HTMLElement | undefined | null =
        itemRef.current?.parentElement?.parentElement?.querySelector(
          ".highlight"
        );
      tlRef.current = gsap.timeline({
        scrollTrigger: {
          trigger: itemRef.current,
          start: "top 50%",
          end: "bottom 50%",
          markers: false,
          onEnter: () => {
            numbers![index]?.classList.add("current");
            highlight!.style.top = `${(index + 1) * 230}px`;
          },
          onLeave: () => {
            numbers![index]?.classList.remove("current");
            numbers![index]?.classList.add("passed");
          },
          onLeaveBack: () => {
            numbers![index]?.classList.remove("current");
          },
          onEnterBack: () => {
            numbers![index]?.classList.remove("passed");
            numbers![index]?.classList.add("current");
            highlight!.style.top = `${(index + 1) * 230}px`;
          },
        },
      });
    }
  });
  return (
    <div ref={itemRef} className={`item ${index % 2 ? "even" : "odd"}`}>
      <div className="icon">
        <Image src={item.icon} alt="" />
      </div>
      <h1 className="title">{item.title}</h1>
      <p className="des">{item.des}</p>
      {item.buttonText && <div className="button">{item.buttonText}</div>}
    </div>
  );
}
