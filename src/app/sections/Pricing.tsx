type Card = {
  title: string;
  des: string;
  price?: {
    from: string;
    to: string;
  };
  priceText?: string;
  buttonText: string;
};

import Image from "next/image";
import redArr from "@/../public/red-bg-rarrow.svg";
import arrRight from "@/../public/arrow-right.svg";

export default function Pricing() {
  const cards: Card[] = [
    {
      title: "Le Coaching Starter",
      price: {
        from: "0",
        to: "5000",
      },
      buttonText: "En savoir plus sur le Coaching Starter",
      des: `Tout ce dont vous avez besoin pour élever méthodiquement votre projet entrepreneurial.Le bon état d'esprit,La bonne posture,La bonne offresur le bon marché.`,
    },
    {
      title: "Le Systeme",
      buttonText: "En savoir plus sur Le Systeme",
      des: "Vous intégrez le Système en 4 étapes qui transforme aujourd'hui tout business en un business capable de générer 300 000€ de CA annuel.300 000 € ?Difficile lorsqu'on navigue à vue.Une ligne comptable lorsqu'on utilise les bons instruments de bord.",
      price: {
        from: "5000",
        to: "25 000",
      },
    },
    {
      title: "Le Scaling",
      buttonText: "En savoir plus sur Le Scaling",
      des: "Plongés en immersion, conseillés par les meilleurs experts, chaque fragment de votre business est décortiqué, analysé, évalué.Vous prenez les mesures exactes dont votre business a besoin pour dépasser le million de CA annuel.",
      price: {
        from: "15 000",
        to: "+85 000",
      },
    },
    {
      title: "Le Consulting",
      buttonText: "En savoir plus sur Le Consulting",
      des: "Vous vous libérez des tâches opérationnelles pour vous concentrer exclusivement sur les aspects stratégiques de votre entreprise.Vous disposez de toutes les ressources dont vous manquiez pour devenir le leader de votre marché.",
      priceText: "CA démultiplié et exponentiel sur le long terme.",
    },
  ];
  return (
    <div id="pricing">
      <div className="highlight highlight-red"></div>
      <div className="header">
        <div>
          <div className="small-badge">
            Appliqués et validés par +10.000 entrepreneurs francophones
          </div>
          <h1 className="section-title">
            <span>4 Accompagnements</span>
            <span>Proposés</span>
          </h1>
        </div>
        <p>
          Résultats de l'expertise acquise par Alec Henry et Entrepreneurs.com
          depuis plus de 6 ans.
        </p>
      </div>
      <div className="cards">
        {cards.map((card, i) => (
          <div className="card" key={i}>
            {/* <img className="card-bg" src="/card-bg.svg" alt="" /> */}
            <div className="card-header">
              <h1>{card.title}</h1>
              <p>{card.des}</p>
            </div>
            <div className="card-footer">
              {card.price && (
                <div className="price">
                  <p>Pour les Entrepreneurs générant...</p>
                  <div>
                    <span>De</span>
                    <span className="price-number from">
                      {card.price?.from}
                    </span>
                    <span>à</span>
                    <span className="price-number to">{card.price?.to}</span>
                    <span>de CA/mois.</span>
                  </div>
                </div>
              )}
              {card.priceText && (
                <div className="price-text">{card?.priceText}</div>
              )}
              <button className="but">
                <span>{card.buttonText}</span>
                <div className="arr-wrapper">
                  <Image src={arrRight} alt="" />
                </div>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
