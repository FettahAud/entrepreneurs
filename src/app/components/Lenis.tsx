"use client";

import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

const SmoothScroller = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
    };
  }, []);

  return <></>;
};

export default SmoothScroller;
