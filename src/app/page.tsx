"use client";

import "./styles/index.scss";
import { useEffect, useState } from "react";
import { calculateRem } from "./utils/calculateRem";
import Hero from "@/app/sections/Hero";
import Benefit from "@/app/sections/Benefit";
import Pricing from "@/app/sections/Pricing";
import Benefit2 from "@/app/sections/Benefit2";
import Wizard from "@/app/sections/Wizard";
import FAQs from "@/app/sections/FAQs";
import { handleResize } from "./utils/currentDevice";
import storeDevice from "./utils/store";
// import screenSizer from "./utils/currentDevice";
// TODO: fix highlight not visible on on mobile
export default function Home() {
  const { setDevice } = storeDevice();

  useEffect(() => {
    calculateRem();
    window.addEventListener("resize", () => {
      calculateRem();
      setDevice(handleResize());
    });
    return () => {
      window.removeEventListener("resize", () => {
        calculateRem();
        setDevice(handleResize());
      });
    };
  }, []);
  return (
    <div id="home">
      {/* <Hero /> */}
      <Benefit />
      <Pricing />
      <Benefit2 />
      <Wizard />
      <FAQs />
    </div>
  );
}
