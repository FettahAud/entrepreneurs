"use client";

import { gsap, ScrollTrigger, SplitText } from "../utils/gsap";
import Image from "next/image";
import arrRight from "@/../public/arrow-right.svg";
import cardBg from "@/../public/card-bg-hover.png";
import { useEffect, useRef } from "react";
import RedArrRight from "../components/RedArrRight";

type Card = {
  title: string;
  des: string;
  price?: {
    from: number;
    to: number;
  };
  priceText?: string;
  buttonText: string;
};

export default function Pricing() {
  const cards: Card[] = [
    {
      title: "Le Coaching Starter",
      price: {
        from: 0,
        to: 5000,
      },
      buttonText: "En savoir plus sur le Coaching Starter",
      des: `Tout ce dont vous avez besoin pour élever méthodiquement votre projet entrepreneurial.Le bon état d'esprit,La bonne posture,La bonne offresur le bon marché.`,
    },
    {
      title: "Le Systeme",
      buttonText: "En savoir plus sur Le Systeme",
      des: "Vous intégrez le Système en 4 étapes qui transforme aujourd'hui tout business en un business capable de générer 300 000€ de CA annuel.300 000 € ?Difficile lorsqu'on navigue à vue.Une ligne comptable lorsqu'on utilise les bons instruments de bord.",
      price: {
        from: 5000,
        to: 25000,
      },
    },
    {
      title: "Le Scaling",
      buttonText: "En savoir plus sur Le Scaling",
      des: "Plongés en immersion, conseillés par les meilleurs experts, chaque fragment de votre business est décortiqué, analysé, évalué.Vous prenez les mesures exactes dont votre business a besoin pour dépasser le million de CA annuel.",
      price: {
        from: 15000,
        to: 85000,
      },
    },
    {
      title: "Le Consulting",
      buttonText: "En savoir plus sur Le Consulting",
      des: "Vous vous libérez des tâches opérationnelles pour vous concentrer exclusivement sur les aspects stratégiques de votre entreprise.Vous disposez de toutes les ressources dont vous manquiez pour devenir le leader de votre marché.",
      priceText: "CA démultiplié et exponentiel sur le long terme.",
    },
  ];

  const header = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline>();

  useEffect(() => {
    if (!header.current || !cardsRef.current) return;
    tlRef.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#pricing",
        start: "top 40%",
        end: "60% 40%",
        markers: false,
        scrub: true,
        once: true,
      },
    });
    const tl = tlRef.current;
    const split1 = new SplitText(header.current?.querySelectorAll("h1 span"), {
      type: "words",
    });
    const split2 = new SplitText(header.current?.querySelector("p"), {
      type: "words",
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
        "start+=0.25"
      )
      .fromTo(
        cardsRef.current?.querySelectorAll(".card"),
        {
          y: 200,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
        },
        "start+=0.5"
      )
      .fromTo(
        gsap.utils.toArray(
          cardsRef.current?.querySelectorAll(".card .price .price-number.to")
        ), // select the price element
        {
          innerText: 0,
        },
        {
          innerText: (i: number) => cards[i].price?.to,
          roundProps: "innerText", // round to the nearest integer
          ease: "none", // linear animation
          duration: 1, // duration of the animation
          stagger: 0.2, // stagger the animation
        },
        "start+=1.5"
      )
      .fromTo(
        gsap.utils.toArray(
          cardsRef.current?.querySelectorAll(".card .price .price-number.from")
        ), // select the price element
        {
          innerText: 0,
        },
        {
          innerText: (i: number) => cards[i].price?.from,
          roundProps: "innerText", // round to the nearest integer
          ease: "none", // linear animation
          duration: 1, // duration of the animation
          stagger: 0.2, // stagger the animation
        },
        "start+=1.5"
      );
    return () => {
      split1?.revert();
      split2?.revert();
      tlRef.current?.scrollTrigger?.kill();
      tlRef.current?.kill();
    };
  }, []);

  return (
    <div id="pricing">
      <div className="highlight highlight-red"></div>
      <div ref={header} className="header">
        <div>
          <div className="small-badge">
            Appliqués et validés par +10.000 entrepreneurs francophones
          </div>
          <h1 className="section-title">
            <span>4 Accompagnements</span>
            <span>Proposés</span>
          </h1>
        </div>
        <p>
          Résultats de l&apos;expertise acquise par Alec Henry et
          Entrepreneurs.com depuis plus de 6 ans.
        </p>
      </div>
      <div ref={cardsRef} className="cards">
        {cards.map((card, i) => (
          <div className="card" key={i}>
            <Image className="card-bg" src={cardBg} alt="" />
            <div className="card-header">
              <h1>{card.title}</h1>
              <p>{card.des}</p>
            </div>
            <div className="card-footer">
              {card.price && (
                <div className="price">
                  <p>Pour les Entrepreneurs générant...</p>
                  <div>
                    <span>De</span>
                    <span className="price-number from">
                      {card.price?.from}
                    </span>
                    <span>à</span>
                    <span className="price-number to">{card.price?.to}</span>
                    <span>de CA/mois.</span>
                  </div>
                </div>
              )}
              {card.priceText && (
                <div className="price-text">{card?.priceText}</div>
              )}
              <button className="but">
                <span>{card.buttonText}</span>
                <RedArrRight />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
