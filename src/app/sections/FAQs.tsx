import Faq from "../components/Faq";
import { FAQType } from "../components/Faq";

export default function FAQs() {
  const faqs: FAQType[] = [
    {
      question: "J'ai un business physique, est-ce que vous pouvez m'aider ?",
      answer:
        "Oui, tous les accompagnements d'Entrepreneurs.com s'adapte à tout type de business, autant en ligne que physique.",
    },
    {
      question: "Qui sont les intervenants de vos accompagnements ?",
      answer: "Nous avons des experts dans tous les domaines.",
    },
    {
      question: "A qui s'adresse vos accompagnements ?",
      answer:
        "Les coachs d'Entrepreneurs.com sont des experts de leur discipline, eux-mêmes entrepreneurs, sélectionnés avec rigueur pour leur maîtrise, leurs expériences et leur volonté d'aider les Entrepreneurs à accomplir leur mission.",
    },
    {
      question: "A qui s'adresse vos accompagnements ?",
      answer: `Nous accompagnons les débutants, qui commencent leur vie entrepreneuriale aux gérants d'entreprise à plusieurs millions par an.
      Tous les accompagnements sont conçus pour faire passer un Business au niveau supérieur, de la création de l'activité jusqu'à devenir leader de son industrie.`,
    },
    {
      question: "Combien coûte vos services ?",
      answer: `Chez Entrepreneurs.com nous vendons les résultats que vous voulez atteindre.
              Les différents accompagnements dépendent de vos besoins et de vos objectifs. Chaque accompagnement est conçu pour vous assurer un retour sur investissement exponentiel et durable.`,
    },
    {
      question: "Quel est votre taux de réussite avec vos accompagnements ?",
      answer:
        "Chaque accompagnement réside dans un écosystème de réussite où tous les membres d'Entrepreneurs.comm s'investissent à 100% pour garantir les résultats annoncés aux entrepreneurs qui s'investissent à 100%.",
    },
    {
      question: "À quoi ressemble votre accompagnement ?",
      answer: `Nos accompagnements s'adaptent à chaque business, industrie et Entrepreneur.
      Vous bénéficiez d'une mise à disposition des ressources dont vous avez besoin pour atteindre vos objectifs : la formation en ligne adéquate, l'équipe de coachs, une mise en relation avec le réseau d'Alec, la communauté des membres d'Entrepreneurs.com.`,
    },
    {
      question:
        "Je suis intéressé.e pour en savoir plus. Comment ça se passe ?",
      answer: `Vous rencontrez via un appel téléphonique un membre de l'équipe pour tout d'abord comprendre votre situation et s'assurer que l'on peut vous aider.
      Nous vous présentons un accompagnement uniquement si nous avons la certitude de pouvoir vous aider et vous apporter des résultats.`,
    },
    {
      question:
        "Je ne vends pas de formation en ligne. Vous pouvez quand même m'aider ?",
      answer: `Oui, tous les accompagnements d'Entrepreneurs.com s'adaptent à tout type de business et d'offre : en ligne ou hors ligne.`,
    },
    {
      question:
        "Cela fait combien de temps que vous accompagnez des entreprises à se développer ?",
      answer:
        "Alec Henry et son équipe accompagnent depuis + de 6ans les Entrepreneurs francophones à passer leur business au niveau supérieur, quelque soit leur industrie, leur offre ou leurs enjeux.",
    },
    {
      question: "Combien de clients avez-vous pu accompagner ?",
      answer: `On a accompagné +10.000 entrepreneurs à devenir libre et +32 entrepreneurs jusqu’au premier million d’euros.`,
    },
  ];

  return (
    <div id="faq">
      <div className="highlight highlight-red"></div>
      <h1 className="section-title">
        <span>Questions</span>
        <span>Fréquentes</span>
      </h1>
      <div className="faqs-wrapper">
        {faqs.map((faq, index) => (
          <Faq faq={faq} index={index} key={index} />
        ))}
      </div>
    </div>
  );
}
