"use client";
import { gsap, SplitText, ScrollTrigger } from "../utils/gsap";
import { useEffect, useRef } from "react";

import icon1 from "@/../public/icons/Icon-8.png";
import icon2 from "@/../public/icons/Icon-7.png";
import icon3 from "@/../public/icons/Icon-1.png";
import icon4 from "@/../public/icons/Icon-2.png";
import icon5 from "@/../public/icons/Icon-3.png";
import gridDesktop from "@/../public/sections-grids/wizard/bg-grid-1920.svg";
import gridLaptop from "@/../public/sections-grids/wizard/bg-grid-1280.svg";
import gridTablet from "@/../public/sections-grids/wizard/bg-grid-768.svg";
import gridMobile from "@/../public/sections-grids/wizard/bg-grid-375.svg";

import Image, { StaticImageData } from "next/image";
import React from "react";
import WizardItem from "../components/WizardItem";
import { useGSAP } from "@gsap/react";
import BGGRid from "../components/BgGrid";
import { BGAnimatedLines } from "../components/LottieGraphs";

export type Item = {
  icon: StaticImageData;
  title: string;
  des: string;
  buttonText?: string;
};

export default function Wizard() {
  const grids = [gridDesktop, gridLaptop, gridTablet, gridMobile];
  const header = useRef<HTMLDivElement>(null);
  const wizard = useRef<HTMLDivElement>(null);

  const items: Item[] = [
    {
      icon: icon1,
      title:
        "L’accompagnement qu’il vous faut pour ne plus être seule.e face aux enjeux de croissance de votre business en ligne ou physique.",
      des: "Une stratégie adaptée à votre marché et vos enjeux pour ne plus paniquer au milieu des requins.",
      buttonText: "Clarté et Sérénité dans vos décisions et actions.",
    },
    {
      icon: icon2,
      title:
        "L’expertise, la vision et le soutien, d’une équipe de coachs qui vous accompagnera individuellement, collectivement et quotidiennement.",
      des: "Vous enlevez ce qui vous freinent et ajoutez ce qui vous manque.",
    },
    {
      icon: icon3,
      title:
        "Des ressources inestimables accessibles à vie pour soutenir votre montée en compétences.",
      des: "Révélant des opportunités insoupçonnées.",
    },
    {
      icon: icon4,
      title:
        "L’accès à la communauté d’Entrepreneurs.com pour vous construire un réseau solide.",
      des: "L’accès à la communauté d’Entrepreneurs.com pour vous construire un réseau solide.",
    },
    {
      icon: icon5,
      title: "L’ouverture d’une voie entrepreneuriale novatrice,",
      des: "Grâce à vos initiatives, vous guidera vers la réalisation de vos aspirations et vous positionnera là où vous devriez être dans l'écosystème entrepreneurial.",
      buttonText: "Vous positionnez votre business à sa vraie place.",
    },
  ];

  useGSAP(() => {
    if (!header.current || !wizard.current) return;
    const mm = gsap.matchMedia();
    const tl = gsap.timeline();
    mm.add("(min-width: 420px)", () => {
      ScrollTrigger.create({
        trigger: wizard.current,
        start: "top 80%",
        end: "20% 80%",
        markers: false,
        scrub: true,
        once: true,
        animation: tl,
      });
    });
    mm.add("(max-width: 420px)", () => {
      ScrollTrigger.create({
        trigger: wizard.current,
        start: "top 100%",
        end: "20% 90%",
        markers: false,
        scrub: true,
        once: true,
        animation: tl,
      });
    });
    const split1 = new SplitText(header.current?.querySelectorAll("span"), {
      type: "lines,words",
    });

    tl.add("start", 0);
    tl.fromTo(split1.words, { y: 100 }, { y: 0, stagger: 0.05 }, "0");
  });

  return (
    <div id="wizard" ref={wizard}>
      <BGGRid images={grids} />
      <BGAnimatedLines />
      <div className="highlight highlight-red"></div>
      <h1 ref={header} className="section-title">
        <span>
          Ce que vous obtiendrez <br />
          en décidant de franchir le pas
        </span>
        <span>avec Entrepreneurs.com</span>
      </h1>
      <div className="items-wrapper">
        <div className="numbers-line">
          {items.map((_, index) => (
            <React.Fragment key={index}>
              <div key={index} className="number">
                <span>{index + 1}</span>
              </div>
              {index !== items.length - 1 && <div className="line"></div>}
            </React.Fragment>
          ))}
        </div>
        {items.map((item, index) => (
          <WizardItem key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  );
}
