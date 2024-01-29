import { useLottie, useLottieInteractivity } from "lottie-react";

import graph from "@/app/Lotties/Lottie1.json";
import graph2 from "@/app/Lotties/chart2.json";

const HeroGraph = () => {
  const lottieObj = useLottie({
    renderer: "svg",
    loop: false,
    autoplay: false,
    animationData: graph,
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
  const lottieObj = useLottie({
    renderer: "svg",
    loop: false,
    autoplay: false,
    animationData: graph2,
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

export { HeroGraph, BenefitGraph };
