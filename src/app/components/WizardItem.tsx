"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "../utils/gsap";
import { Item } from "../sections/Wizard";

export default function WizardItem({
  item,
  index,
}: {
  item: Item;
  index: number;
}) {
  const itemRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>();
  useEffect(() => {
    if (itemRef.current !== null) {
      const numbers =
        itemRef.current?.parentElement?.querySelectorAll(".number");
      const highlight: HTMLElement | undefined | null =
        itemRef.current?.parentElement?.parentElement?.querySelector(
          ".highlight"
        );
      console.log(highlight);
      tlRef.current = gsap.timeline({
        scrollTrigger: {
          trigger: itemRef.current,
          start: "top center",
          end: "bottom center",
          markers: false,
          onEnter: () => {
            numbers![index]?.classList.add("current");
            highlight!.style.top = `${(index + 1) * 200}px`;
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
            highlight!.style.top = `${(index + 1) * 200}px`;
          },
        },
      });
    }
    return () => {
      tlRef.current?.kill();
    };
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
