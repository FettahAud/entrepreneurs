"use client";

import DoubleBut from "@/app/components/DoubleBut";
import eFullLogo from "@/../public/e-full-logo.svg";
import Image from "next/image";
import lIn from "@/../public/social-icons/in.svg";
import instagram from "@/../public/social-icons/instagram.svg";
import xTwitter from "@/../public/social-icons/x.svg";
import tiktok from "@/../public/social-icons/tiktok.svg";
import youtube from "@/../public/social-icons/youtube.svg";
import Link from "next/link";
import gridDesktop from "@/../public/sections-grids/footer/bg-grid-1920.svg";
import gridLaptop from "@/../public/sections-grids/footer/bg-grid-1280.svg";
import gridTablet from "@/../public/sections-grids/footer/bg-grid-768.svg";
import gridMobile from "@/../public/sections-grids/footer/bg-grid-375.svg";
import BGGRid from "./BgGrid";
import storeDevice from "../utils/store";

export default function Footer() {
  const grids = [gridDesktop, gridLaptop, gridTablet, gridMobile];
  const lists = [
    {
      title: "Plan du site",
      items: [
        "Accueil",
        "La communauté",
        "Le système",
        "Avis",
        "Actualités",
        "Le Declic",
      ],
    },
    {
      title: "Informations Légales et Entreprise",
      items: [
        "CGV",
        "Politiques de confidentialité",
        "Mentions Légales",
        "Contact",
        "À propos",
      ],
    },
  ];
  const { device } = storeDevice();
  return (
    <footer id="footer">
      <div className="highlight highlight-red"></div>
      <div className="header">
        <div className="section-title">
          <span>
            Réserve ton appel
            <br /> d&apos;audit avec
          </span>
          <span>un membre de l&apos;équipe</span>
        </div>
        <div className="text-wrapper">
          <p>
            Pour ceux prêts à agir, des membres d&apos;Entrepreneurs.com offrent
            un appel d&apos;audit gratuit pour évaluer votre business et
            objectifs, et discuter des solutions.
          </p>
          <DoubleBut text="Réserver un Appel" disableAnimation={true} />
        </div>
      </div>
      <div className="footer">
        <BGGRid images={grids} />
        <div className="upper-section">
          <div className="logos">
            <Image src={eFullLogo} alt="" />
            <div className="social-icons">
              <Link href="" className="s-icon">
                <Image src={lIn} alt="LinkedIn" />
              </Link>
              <Link href="" className="s-icon">
                <Image src={instagram} alt="Instagram" />
              </Link>
              <Link href="" className="s-icon">
                <Image src={youtube} alt="Youtube" />
              </Link>
              <Link href="" className="s-icon">
                <Image src={tiktok} alt="Tiktok" />
              </Link>
              <Link href="" className="s-icon">
                <Image src={xTwitter} alt="X(Twitter)" />
              </Link>
            </div>
          </div>
          <div className="lists">
            {lists.map((list) => (
              <ul key={list.title} className="list">
                <h4>{list.title}</h4>
                {list.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="copyright">
          {device === "mobile" && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="375"
              height="2"
              viewBox="0 0 375 2"
              fill="none"
            >
              <path d="M0 1H375" stroke="url(#paint0_linear_1832_2186)" />
              <defs>
                <linearGradient
                  id="paint0_linear_1832_2186"
                  x1="0"
                  y1="1"
                  x2="375"
                  y2="1"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" stop-opacity="0" />
                  <stop
                    offset="0.532909"
                    stop-color="white"
                    stop-opacity="0.4"
                  />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
          )}
          {device === "desktop" && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1281"
              height="2"
              viewBox="0 0 1281 2"
              fill="none"
            >
              <path
                d="M0.556152 0.916992H1920.56"
                stroke="url(#paint0_linear_1801_1581)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1801_1581"
                  x1="0.556152"
                  y1="0.916992"
                  x2="1920.56"
                  y2="0.916992"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" stop-opacity="0" />
                  <stop
                    offset="0.532909"
                    stop-color="white"
                    stop-opacity="0.4"
                  />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
          )}
          <p>
            ARIES Consulting FZCO, Dubai Silicon Oasis, DDP Building A2
            <br />
            Dubai, Emirats Arabes Unis
          </p>
          <p>Copyright © 2024 Entrepreneurs.com</p>
        </div>
      </div>
    </footer>
  );
}
