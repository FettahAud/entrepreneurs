"use client";
import { useLottie, useLottieInteractivity } from "lottie-react";
import Lottie from "lottie-react";

import heroGraph1 from "@/app/Lotties/HERO GRAPH/1920.json";
import heroGraph2 from "@/app/Lotties/HERO GRAPH/1280.json";
import heroGraph3 from "@/app/Lotties/HERO GRAPH/768.json";
import heroGraph4 from "@/app/Lotties/HERO GRAPH/375.json";
import benefitGraph1 from "@/app/Lotties/SECOND GRAPH/1920.json";
import benefitGraph2 from "@/app/Lotties/SECOND GRAPH/1280.json";
import benefitGraph3 from "@/app/Lotties/SECOND GRAPH/768.json";
import benefitGraph4 from "@/app/Lotties/SECOND GRAPH/375.json";
import bgLines1 from "@/app/Lotties/BACKGROUND LINES/1920.json";
import bgLines2 from "@/app/Lotties/BACKGROUND LINES/1280.json";
import bgLines3 from "@/app/Lotties/BACKGROUND LINES/768.json";
import bgLines4 from "@/app/Lotties/BACKGROUND LINES/375.json";

import storeDevice from "../utils/store";
import { useEffect, useState } from "react";

const HeroGraph = () => {
  const { device } = storeDevice();
  const [animation, setAnimation] = useState(
    device === "desktop"
      ? heroGraph1
      : device === "laptop"
      ? heroGraph2
      : device === "tablet"
      ? heroGraph3
      : heroGraph4
  );
  useEffect(() => {
    setAnimation(
      device === "desktop"
        ? heroGraph1
        : device === "laptop"
        ? heroGraph2
        : device === "tablet"
        ? heroGraph3
        : heroGraph4
    );
  }, [device]);
  const lottieObj = useLottie({
    renderer: "svg",
    loop: false,
    autoplay: false,
    animationData: animation,
    className: "hero-graph",
  });
  const Animation = useLottieInteractivity({
    lottieObj,
    mode: "scroll",
    actions: [
      {
        visibility: [0.2, 0.6],
        frames: [0, 400],
        type: "seek",
      },
    ],
  });

  return Animation;
};

const BenefitGraph = () => {
  const { device } = storeDevice();
  const [animation, setAnimation] = useState(
    device === "desktop"
      ? benefitGraph1
      : device === "laptop"
      ? benefitGraph2
      : device === "tablet"
      ? benefitGraph3
      : benefitGraph4
  );
  useEffect(() => {
    setAnimation(
      device === "desktop"
        ? benefitGraph1
        : device === "laptop"
        ? benefitGraph2
        : device === "tablet"
        ? benefitGraph3
        : benefitGraph4
    );
  }, [device]);
  const lottieObj = useLottie({
    renderer: "svg",
    loop: false,
    autoplay: false,
    animationData: animation,
    className: "benefit-2-graph",
  });
  const Animation = useLottieInteractivity({
    lottieObj,
    mode: "scroll",
    actions: [
      {
        visibility: [0, 0.4],
        frames: [0, 200],
        type: "seek",
      },
    ],
  });
  return Animation;
};

const BGAnimatedLines = () => {
  const { device } = storeDevice();
  const [animation, setAnimation] = useState(
    device === "desktop"
      ? bgLines1
      : device === "laptop"
      ? bgLines2
      : device === "tablet"
      ? bgLines3
      : bgLines4
  );
  useEffect(() => {
    setAnimation(
      device === "desktop"
        ? bgLines1
        : device === "laptop"
        ? bgLines2
        : device === "tablet"
        ? bgLines3
        : bgLines4
    );
    console.log(device);
  }, [device]);

  return <Lottie animationData={animation} className="bg-animated-grid" />;
};

export { HeroGraph, BenefitGraph, BGAnimatedLines };
