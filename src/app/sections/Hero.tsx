"use client";

import { useRef, useState } from "react";
import { gsap, SplitText } from "../utils/gsap";

import "@splidejs/react-splide/css";

import DoubleBut from "@/app/components/DoubleBut";
import { BGAnimatedLines, HeroGraph } from "../components/LottieGraphs";
import gridDesktop1 from "@/../public/sections-grids/hero/bg-grid-1920-1.svg";
import gridDesktop2 from "@/../public/sections-grids/hero/bg-grid-1920-2.svg";
import gridLaptop1 from "@/../public/sections-grids/hero/bg-grid-1280-1.svg";
import gridLaptop2 from "@/../public/sections-grids/hero/bg-grid-1280-2.svg";
import gridTablet1 from "@/../public/sections-grids/hero/bg-grid-768-1.svg";
import gridTablet2 from "@/../public/sections-grids/hero/bg-grid-768-2.svg";
import gridMobile1 from "@/../public/sections-grids/hero/bg-grid-375.svg";
// import gridMobile2 from "@/../public/sections-grids/hero/bg-grid-375-2.svg";
import { useGSAP } from "@gsap/react";
import BGGRid from "../components/BgGrid";
import ClientLogos from "../components/ClientLogos";

/**
 * TODO: Fix client-logos image sizes on 375px
 */
export default function Hero() {
  const videoWrapper = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const header = useRef<HTMLDivElement>(null);
  const [videoState, setVideoState] = useState(false);
  const grids1 = [gridDesktop1, gridLaptop1, gridTablet1, gridMobile1];
  const grids2 = [gridDesktop2, gridLaptop2, gridTablet2];

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
          .forEach(
            (span) => ((span as HTMLElement).style.overflow = "visible")
          );
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
        <BGGRid images={grids1} />
        <BGAnimatedLines />
      </div>
      <div className="header" ref={header}>
        <div className="badge">
          +10 000 entrepreneurs francophones ont vu leurs vies transformées
        </div>
        <h1 className="section-title">
          <span>Propulsez l&apos;Entrepreneur que</span>
          <span>vous êtes à un niveau supérieur</span>
        </h1>
        <p>oeuvrez sereinement vers l&apos;accomplissement de votre mission.</p>
        <DoubleBut text="En savoir plus" disableAnimation={false} />
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
      <ClientLogos />
      <div className="graph">
        <div className="highlight highlight-red"></div>
        <BGGRid images={grids2} />
        <div className="text-quote">
          Êtes-vous prêt à transformer radicalement votre quotidien et votre vie
          en l&apos;espace de quelques mois,
          <br />
          en adoptant une stratégie globale pour votre business plutôt que de
          vous limiter à sa gestion quotidienne ?
        </div>
        <HeroGraph />
        <BGAnimatedLines />
      </div>
    </div>
  );
}
