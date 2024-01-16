import plus from "@/../public/plus.svg";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gsap } from "../utils/gsap";

export type FAQType = {
  question: string;
  answer: string;
};

export default function Faq({ faq, index }: { faq: FAQType; index: number }) {
  const [isAnswerVisible, setIsAnswerVisible] = useState<boolean>(false);
  const answerRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  const toggleAnswerVisibility = () => {
    setIsAnswerVisible(!isAnswerVisible);
  };

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: {
        ease: "power2.inOut",
        duration: 0.5,
      },
    });
    if (isAnswerVisible) {
      tl.to(answerRef.current, {
        autoAlpha: 0.6,
        maxHeight: "200px",
        paddingTop: ".625rem",
      });
    } else {
      tl.to(answerRef.current, {
        autoAlpha: 0,
        maxHeight: "0px",
        paddingTop: "0rem",
      });
    }
  }, [isAnswerVisible]);

  return (
    <div className="faq-item">
      <span className="index">
        {index + 1 < 10 ? `0${index + 1}` : `${index + 1}`}
      </span>
      <div
        className="faq"
        ref={faqRef}
        onClick={() => toggleAnswerVisibility()}
      >
        <div className="question">{faq.question}</div>
        <div className="answer" ref={answerRef} style={{ maxHeight: "0px" }}>
          {faq.answer}
        </div>
      </div>
      <Image src={plus} alt="" />
    </div>
  );
}
