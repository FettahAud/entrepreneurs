"use client";

import "./styles/index.scss";
import { useEffect } from "react";
import { calculateRem } from "./utils/calculateRem";
import Hero from "@/app/sections/Hero";
import Benefit from "@/app/sections/Benefit";
import Pricing from "@/app/sections/Pricing";
import Benefit2 from "@/app/sections/Benefit2";
import Wizard from "@/app/sections/Wizard";
import FAQs from "@/app/sections/FAQs";

export default function Home() {
  useEffect(() => {
    calculateRem();
    window.addEventListener("resize", calculateRem);
    return () => {
      window.removeEventListener("resize", calculateRem);
    };
  }, []);
  return (
    <div id="home">
      <Hero />
      <Benefit />
      <Pricing />
      <Benefit2 />
      <Wizard />
      <FAQs />
    </div>
  );
}
