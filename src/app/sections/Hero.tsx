"use client";

import Image from "next/image";
import { ReactSVG } from "react-svg";
import { useEffect, useRef, useState } from "react";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { gsap, SplitText } from "../utils/gsap";

import "@splidejs/react-splide/css";

import DoubleBut from "@/app/components/DoubleBut";
import { HeroGraph } from "../components/LottieGraphs";
import overlay from "@/../public/overlay.png";
import logo1 from "@/../public/logos/logo-1.png";
import logo2 from "@/../public/logos/logo-2.png";
import logo3 from "@/../public/logos/logo-3.png";
import logo4 from "@/../public/logos/logo-4.png";
import logo5 from "@/../public/logos/logo-5.png";
import logo6 from "@/../public/logos/logo-6.png";
import logo7 from "@/../public/logos/logo-7.png";
import logo8 from "@/../public/logos/logo-8.png";
import logo9 from "@/../public/logos/logo-9.png";
import { useGSAP } from "@gsap/react";

export default function Hero() {
  const videoWrapper = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const header = useRef<HTMLDivElement>(null);
  const [videoState, setVideoState] = useState(false);
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9];

  const handleVideoState = () => {
    if (video.current?.paused) {
      setVideoState(true);
      video.current.play();
    } else {
      setVideoState(false);
      video.current?.pause();
    }
  };

  useGSAP(() => {
    const tl = gsap.timeline();
    let split1: SplitText | null = null,
      split2: SplitText | null = null;
    if (header.current) {
      split1 = new SplitText(header.current?.querySelectorAll("h1 span"), {
        type: "words",
      });
      split2 = new SplitText(header.current?.querySelector("p"), {
        type: "words",
      });
      tl.then(() => {
        split1?.revert();
        split2?.revert();
        header.current
          ?.querySelectorAll("h1 span")
          .forEach((span) => (span.style.overflow = "visible"));
      });
      tl.add("start", 0);
      tl.fromTo(
        header.current.querySelector(".badge"),
        {
          opacity: 0,
        },
        { opacity: 1, duration: 1 },
        "start+=.25"
      )
        .fromTo(
          split1.words,
          {
            y: 100,
            z: -250,
          },
          {
            y: 0,
            z: 0,
            stagger: 0.2,
          },
          "start"
        )
        .fromTo(
          split2.words,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            stagger: 0.05,
          },
          "start+=1.5"
        )
        .fromTo(
          header.current.querySelector(".but"),
          {
            opacity: 0,
          },
          {
            opacity: 1,
          },
          "start+=1.5"
        )
        .fromTo(
          videoWrapper.current,
          { opacity: 0 },
          { opacity: 1 },
          "start+=1.5"
        )
        .fromTo(
          videoWrapper.current,
          {
            y: 100,
            z: -150,
          },
          {
            y: 0,
            z: 0,
          },
          "start+=1.75"
        );
    }
  });

  return (
    <div id="hero">
      <div className="highlight-wrapper">
        <div className="bg-gradient bg-gradient-1"></div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1608"
          height="1080"
          viewBox="0 0 1608 1080"
          fill="none"
        >
          <g opacity="0.1" filter="url(#filter0_f_177_2416)">
            <path
              d="M180 900L682.857 0H927.429L1428 900H180Z"
              fill="url(#paint0_linear_177_2416)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_177_2416"
              x="0"
              y="-180"
              width="1608"
              height="1260"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="90"
                result="effect1_foregroundBlur_177_2416"
              />
            </filter>
            <linearGradient
              id="paint0_linear_177_2416"
              x1="804.286"
              y1="-2.71092e-06"
              x2="804.286"
              y2="954.173"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#EE0000" stopOpacity="0.42" />
              <stop offset="0.493857" stopColor="#EE0000" stopOpacity="0.68" />
              <stop offset="1" stopColor="#EE0000" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="overlay">
        <Image src={overlay} alt="" />
      </div>
      <div className="header" ref={header}>
        <div className="badge">
          +10 000 entrepreneurs francophones ont vu leurs vies transformées
        </div>
        <h1 className="section-title">
          <span>Propulsez l&apos;Entrepreneur que</span>
          <span>vgous êtes à un niveau supérieur</span>
        </h1>
        <p>oeuvrez sereinement vers l&apos;accomplissement de votre mission.</p>
        <DoubleBut text="En savoir plus" />
      </div>
      <div className="video-wrapper" ref={videoWrapper}>
        <video
          ref={video}
          src="/video.mp4"
          poster="/thumbnail.png"
          loop
          muted
          onClick={() => handleVideoState()}
        ></video>
        <div
          className={`play-but ${videoState && "active"}`}
          onClick={() => handleVideoState()}
        >
          <img src="/play.svg" />
        </div>
      </div>
      <div className="client-logos">
        <Splide
          aria-label="My Favorite Images"
          options={{
            pagination: false,
            arrows: false,
            autoplay: true,
            gap: "3.84rem",
            type: "loop",
            rewind: true,
            autoWidth: true,
            autoPlay: "play",
            delay: 1000,
            speed: 1000,
          }}
        >
          {logos.map((logo, index) => (
            <SplideSlide key={index}>
              <Image src={logo} alt="" />
            </SplideSlide>
          ))}
        </Splide>
      </div>
      <div className="graph">
        <div className="highlight highlight-red"></div>
        <div className="text-quote">
          Êtes-vous prêt à transformer radicalement votre quotidien et votre vie
          en l&apos;espace de quelques mois,
          <br />
          en adoptant une stratégie globale pour votre business plutôt que de
          vous limiter à sa gestion quotidienne ?
        </div>
        <HeroGraph />
      </div>
    </div>
  );
}
