"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";

import logo1 from "@/../public/logos/logo-1.svg";
import logo2 from "@/../public/logos/logo-2.svg";
import logo3 from "@/../public/logos/logo-3.svg";
import logo4 from "@/../public/logos/logo-4.svg";
import logo5 from "@/../public/logos/logo-5.svg";
import logo6 from "@/../public/logos/logo-6.svg";
import logo7 from "@/../public/logos/logo-7.svg";
import logo8 from "@/../public/logos/logo-8.svg";
import logo9 from "@/../public/logos/logo-9.svg";
import { useEffect, useState } from "react";
import storeDevice from "../utils/store";

export default function ClientLogos() {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9];
  const { device } = storeDevice();
  const [gsp, setGsp] = useState("0");

  useEffect(() => {
    device === "desktop" && setGsp("3.84rem");
    device === "mobile" && setGsp("2rem");
  }, []);

  useEffect(() => {
    console.log(device);
    if (device === "desktop") setGsp("3.84rem");
    if (device === "mobile") setGsp("2rem");
  }, [device]);

  return (
    <div className="client-logos">
      <Splide
        aria-label="My Favorite Images"
        options={{
          pagination: false,
          arrows: false,
          autoplay: true,
          gap: gsp,
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
  );
}
