"use client";

import { useRef } from "react";
import { gsap, SplitText } from "../utils/gsap";
import Image from "next/image";
import Lottie from "lottie-react";

import icon1 from "@/../public/icons/Icon-4.png";
import icon2 from "@/../public/icons/Icon-5.png";
import icon3 from "@/../public/icons/Icon-6.png";
import letter from "@/app/Lotties/E.json";
import { useGSAP } from "@gsap/react";

export default function Benefit() {
  const header = useRef<HTMLDivElement>(null);
  const cards = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!header.current || !cards.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#benefits",
        scrub: true,
        markers: false,
        start: "top 70%",
        end: "80% 80%",
        // once: true,
      },
    });
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
          stagger: 0.5,
          duration: 0.75,
        },
        "start+=3.5"
      )
      .fromTo(
        cards.current.querySelectorAll(".card .border-line"),
        {
          width: "0%",
        },
        {
          width: "100%",
          duration: 0.75,
          stagger: 0.5,
        },
        "start+=3.5"
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
          stagger: 0.5,
          // duration: 0.5,
        },
        "start+=3.5"
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
        "start+=3.5"
      );
  });

  return (
    <div id="benefits">
      <Lottie animationData={letter} className="letter-e" />
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
            Acquisition d'une maîtrise Business, transmise par les meilleurs
            experts
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
