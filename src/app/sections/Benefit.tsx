"use client";

import { gsap, SplitText } from "../utils/gsap";
import Image from "next/image";

import icon1 from "@/../public/icons/Icon-4.png";
import icon2 from "@/../public/icons/Icon-5.png";
import icon3 from "@/../public/icons/Icon-6.png";
import { useEffect, useRef } from "react";

export default function Benefit() {
  const header = useRef<HTMLDivElement>(null);
  const cards = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline>();

  useEffect(() => {
    if (!header.current || !cards.current) return;
    tlRef.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#benefits",
        pin: true,
        markers: false,
      },
    });
    const tl = tlRef.current;
    const split1 = new SplitText(header.current?.querySelectorAll("h1 span"), {
      type: "words",
    });
    const split2 = new SplitText(header.current?.querySelector("p"), {
      type: "words",
    });
    const cardSplits = Array.from(
      cards.current?.querySelectorAll(".card h2")
    ).map((el) => {
      const split = new SplitText(el, {
        type: "words",
      });
      return split;
    });

    tl.add("start", 0);
    tl.fromTo(
      header.current.querySelector(".small-badge"),
      { y: 150, opacity: 0 },
      { y: 0, opacity: 1 },
      "start"
    )
      .fromTo(split1.words, { y: 150 }, { y: 0, stagger: 0.1 }, "start+=.25")
      .fromTo(
        split2.words,
        { opacity: 0 },
        { opacity: 1, stagger: 0.05 },
        "start+=0.5"
      )
      .fromTo(
        gsap.utils.toArray(cards.current?.querySelectorAll(".card img")),
        {
          opacity: 0,
        },
        {
          opacity: 1,
          stagger: 0.2,
        },
        "start+=.5"
      )
      .fromTo(
        cards.current.querySelectorAll(".card .border-line"),
        {
          width: "0%",
        },
        {
          width: "100%",
          duration: 0.75,
          stagger: 0.2,
        },
        "start+=.65"
      )
      .fromTo(
        gsap.utils.toArray(cards.current?.querySelectorAll(".card img")),
        {
          rotateY: 90,
          translateX: -60,
        },
        {
          rotateY: 0,
          translateX: 0,
          stagger: 0.15,
          // duration: 0.5,
        },
        "start+=.75"
      )
      .fromTo(
        cardSplits.map((split) => split.words),
        {
          opacity: 0,
        },
        {
          opacity: 1,
          stagger: 0.1,
        },
        "start+=.75"
      );

    return () => {
      split1?.revert();
      split2?.revert();
      cardSplits?.forEach((split) => split?.revert());
      tlRef.current?.scrollTrigger?.kill();
      tlRef.current?.kill();
    };
  }, []);

  return (
    <div id="benefits">
      <div className="highlight highlight-red"></div>
      <div ref={header} className="header">
        <div className="small-badge">Nos programmes</div>
        <h1 className="section-title">
          <span>Nous aidons les</span>
          <span>Entrepreneurs</span>
        </h1>
        <p>
          Qui sont conscients de leur potentiel et qui savent
          <br /> qu&apos;ils ne sont qu&apos;à une étape de propulser leur
          activité, online ou offline, à un niveau supérieur. <br /> Nous sommes
          cette étape cruciale pour votre business.
        </p>
      </div>
      <div className="cards" ref={cards}>
        <div className="card">
          <Image src={icon1} alt="" />
          <h2>Transformation dès la 1ère H</h2>
          <div className="border-line"></div>
        </div>
        <div className="card">
          <Image src={icon2} alt="" />
          <h2>
            Acquisition d&apos;une maîtrise Business, transmise par les
            meilleurs experts
          </h2>
          <div className="border-line"></div>
        </div>
        <div className="card">
          <Image src={icon3} alt="" />
          <h2>Croissance constante et prédictible</h2>
          <div className="border-line"></div>
        </div>
      </div>
    </div>
  );
}
