import DoubleBut from "@/app/components/DoubleBut";
import eFullLogo from "@/../public/e-full-logo.svg";
import Image from "next/image";
import lIn from "@/../public/social-icons/in.svg";
import instagram from "@/../public/social-icons/instagram.svg";
import xTwitter from "@/../public/social-icons/x.svg";
import tiktok from "@/../public/social-icons/tiktok.svg";
import youtube from "@/../public/social-icons/youtube.svg";
import Link from "next/link";
export default function Footer() {
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
  return (
    <footer id="footer">
      <div className="highlight highlight-red"></div>
      <div className="header">
        <div className="section-title">
          <span>
            Réserve ton appel
            <br /> d’audit avec
          </span>
          <span>un membre de l’équipe</span>
        </div>
        <div className="text-wrapper">
          <p>
            Pour ceux prêts à agir, des membres d'Entrepreneurs.com offrent un
            appel d'audit gratuit pour évaluer votre business et objectifs, et
            discuter des solutions.
          </p>
          <DoubleBut text="Réserver un Appel" />
        </div>
      </div>
      <div className="footer">
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1920"
            height="2"
            viewBox="0 0 1920 2"
            fill="none"
          >
            <path d="M0 1H1920" stroke="url(#paint0_linear_178_3874)" />
            <defs>
              <linearGradient
                id="paint0_linear_178_3874"
                x1="0"
                y1="1"
                x2="1920"
                y2="1"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" stop-opacity="0" />
                <stop offset="0.532909" stop-color="white" stop-opacity="0.4" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
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
