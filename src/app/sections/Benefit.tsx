import icon1 from "@/../public/icons/Icon-4.png";
import icon2 from "@/../public/icons/Icon-5.png";
import icon3 from "@/../public/icons/Icon-6.png";
import Image from "next/image";

export default function Benefit() {
  return (
    <div id="benefits">
      <div className="highlight highlight-red"></div>
      <div className="header">
        <div className="small-badge">Nos programmes</div>
        <h1 className="section-title">
          <span>Nous aidons les</span>
          <span>Entrepreneurs</span>
        </h1>
        <p>
          Qui sont conscients de leur potentiel et qui savent
          <br /> qu&apos;ils ne sont qu&apos;à une étape de propulser leur
          activité, online ou offline, à un niveau supérieur. <br /> Nous sommes
          cette étape cruciale pour votre business.
        </p>
      </div>
      <div className="cards">
        <div className="card">
          <Image src={icon1} alt="" />
          <h2>Transformation dès la 1ère H</h2>
        </div>
        <div className="card">
          <Image src={icon2} alt="" />
          <h2>
            Acquisition d&apos;une maîtrise Business, transmise par les
            meilleurs experts
          </h2>
        </div>
        <div className="card">
          <Image src={icon3} alt="" />
          <h2>Croissance constante et prédictible</h2>
        </div>
      </div>
    </div>
  );
}
