"use client";
import { gsap, ScrollTrigger, SplitText } from "../utils/gsap";
import Image from "next/image";
import StarBut from "../components/StarBut";
import graph from "@/../public/graph-chart-2.png";
import arrRight from "@/../public/arrow-right.svg";
import { useEffect, useRef } from "react";

export default function Benefit2() {
  const header = useRef<HTMLDivElement>(null);
  const buttons = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline>();

  useEffect(() => {
    if (!header.current || !buttons.current) return;
    tlRef.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#benefit2",
        start: "top center",
        end: "bottom center",
        // on development
        // toggleActions: "play reset play reset",
        // markers: true,
      },
    });
    const tl = tlRef.current;
    const split1 = new SplitText(header.current?.querySelectorAll("h1 span"), {
      type: "words",
    });

    tl.add("start", 0);
    tl.fromTo(
      header.current.querySelector(".small-badge"),
      { y: 150, opacity: 0 },
      { y: 0, opacity: 1 },
      "start"
    )
      .fromTo(
        split1.words,
        { y: 150 },
        { y: 0, stagger: 0.05, duration: 0.5 },
        "start+=.25"
      )
      .fromTo(
        buttons.current?.querySelectorAll(".but"),
        {
          opacity: 0,
          blur: 30,
        },
        {
          opacity: 1,
          blur: 0,
        },
        "start+=0.5"
      );

    return () => {
      split1?.revert();
      tlRef.current?.scrollTrigger?.kill();
      tlRef.current?.kill();
    };
  }, []);

  return (
    <div id="benefit2">
      <div ref={header} className="header">
        <div className="small-badge">Nos programmes</div>
        <h1 className="section-title">
          <span>
            L&apos;impact d&apos;Entrepreneurs.com
            <br /> sur la vie de milliers{" "}
          </span>
          <span>d&apos;entrepreneurs en un graphique.</span>
        </h1>
      </div>
      <div className="body">
        <div ref={buttons} className="buttons">
          <StarBut text="Voir le témoignage de Khadija" />
          <div className="but empty-but">
            <span>Réserver un Appel</span>
            <Image src={arrRight} alt="" />
          </div>
        </div>
        <Image className="graph" src={graph} alt="" />
      </div>
    </div>
  );
}
