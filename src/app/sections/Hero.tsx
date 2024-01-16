"use client";

import Image from "next/image";
// import highlight2 from "@/../public/highlight-2.svg";
import overlay from "@/../public/overlay.png";
import { ReactSVG } from "react-svg";
import { useEffect, useRef, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { gsap, ScrollTrigger, SplitText } from "../utils/gsap";

import "@splidejs/react-splide/css";

import logo1 from "@/../public/logos/logo-1.png";
import logo2 from "@/../public/logos/logo-2.png";
import logo3 from "@/../public/logos/logo-3.png";
import logo4 from "@/../public/logos/logo-4.png";
import logo5 from "@/../public/logos/logo-5.png";
import logo6 from "@/../public/logos/logo-6.png";
import logo7 from "@/../public/logos/logo-7.png";
import logo8 from "@/../public/logos/logo-8.png";
import logo9 from "@/../public/logos/logo-9.png";
import graph from "@/../public/graph-chart.png";
import DoubleBut from "@/app/components/DoubleBut";

export default function Hero() {
  const video = useRef<HTMLVideoElement>(null);
  const [videoState, setVideoState] = useState(false);
  const header = useRef<HTMLDivElement>(null);
  const videoWrapper = useRef<HTMLDivElement>(null);
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

  useEffect(() => {
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
        );
      // .fromTo(
      //   videoWrapper.current,
      //   {
      //     opacity: 0,
      //   },
      //   {
      //     opacity: 1,
      //   }
      // );
    }

    window.addEventListener("load", () => {
      ScrollTrigger.create({
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        markers: true,
        scrub: true,
        // animation: tl,
      });
    });

    return () => {
      window.removeEventListener("load", () => {
        ScrollTrigger.create({
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          markers: true,
          scrub: true,
          animation: tl,
        });
      });
      tl.kill();
      split1?.revert();
      split2?.revert();
    };
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
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
              <stop stop-color="#EE0000" stop-opacity="0.42" />
              <stop
                offset="0.493857"
                stop-color="#EE0000"
                stop-opacity="0.68"
              />
              <stop offset="1" stop-color="#EE0000" stop-opacity="0" />
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
        <h1>
          <span>Propulsez l'Entrepreneur que</span>
          <span>vous êtes à un niveau supérieur</span>
        </h1>
        <p>oeuvrez sereinement vers l'accomplissement de votre mission.</p>
        <DoubleBut text="En savoir plus" />
      </div>
      <div className="video-wrapper" ref={videoWrapper}>
        <video
          ref={video}
          src="/Animation.mp4"
          autoPlay
          loop
          controls
          onClick={() => handleVideoState()}
        ></video>
        <div
          className={`play-but ${videoState && "active"}`}
          onClick={() => handleVideoState()}
        >
          <ReactSVG src="/play.svg" />
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
          en l'espace de quelques mois,
          <br />
          en adoptant une stratégie globale pour votre business plutôt que de
          vous limiter à sa gestion quotidienne ?
        </div>
        <Image src={graph} alt="" />
      </div>
    </div>
  );
}
