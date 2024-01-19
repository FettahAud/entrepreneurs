import { useLottie, useLottieInteractivity } from "lottie-react";

import graph from "@/app/Lotties/Lottie1.json";

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

export { HeroGraph };
