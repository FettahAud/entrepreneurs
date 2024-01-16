import Faq from "../components/Faq";
import { FAQType } from "../components/Faq";
import { gsap } from "../utils/gsap";

export default function FAQs() {
  const faqs: FAQType[] = [
    {
      question: "J'ai un business physique, est-ce que vous pouvez m'aider ?",
      answer:
        "Oui, nous pouvons vous aider à développer votre business physique. Nous avons des experts dans tous les domaines.",
    },
    {
      question: "Qui sont les intervenants de vos accompagnements ?",
      answer: "Nous avons des experts dans tous les domaines.",
    },
    {
      question: "A qui s'adresse vos accompagnements ?",
      answer: "Nous avons des experts dans tous les domaines.",
    },
    {
      question: "Combien coûte vos services ?",
      answer: "Nous avons des experts dans tous les domaines.",
    },
    {
      question: "Quel est votre taux de réussite avec vos accompagnements ?",
      answer: "Nous avons des experts dans tous les domaines.",
    },
    {
      question: "A quoi ressemble votre accompagnement ?",
      answer: "Nous avons des experts dans tous les domaines.",
    },
    {
      question:
        "Je suis intéressé.e pour en savoir plus. Comment ça se passe ?",
      answer: "Nous avons des experts dans tous les domaines.",
    },
    {
      question:
        "Je ne vends pas de formation en ligne. Vous pouvez quand même m'aider ?",
      answer: "Nous avons des experts dans tous les domaines.",
    },
    {
      question:
        "Cela fait combien de temps que vous accompagnez des entreprises à se développer ?",
      answer: "Nous avons des experts dans tous les domaines.",
    },
    {
      question: "Combien de clients avez-vous pu accompagner ?",
      answer: "Nous avons des experts dans tous les domaines.",
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
