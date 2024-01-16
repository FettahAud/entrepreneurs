import Image from "next/image";
import StarBut from "../components/StarBut";
import graph from "@/../public/graph-chart-2.png";
import arrRight from "@/../public/arrow-right.svg";

export default function Benefit2() {
  return (
    <div id="benefit2">
      <div className="header">
        <div className="small-badge">Nos programmes</div>
        <h1 className="section-title">
          <span>
            L&apos;impact d&apos;Entrepreneurs.com
            <br /> sur la vie de milliers{" "}
          </span>
          <span>d&apos;entrepreneurs en un graphique.</span>
        </h1>
      </div>
      <div className="body">
        <div className="buttons">
          <StarBut text="Voir le témoignage de Khadija" />
          <div className="but empty-but">
            <span>Réserver un Appel</span>
            <Image src={arrRight} alt="" />
          </div>
        </div>
        <Image className="graph" src={graph} alt="" />
      </div>
    </div>
  );
}
