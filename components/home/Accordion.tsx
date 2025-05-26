"use client";
import React, { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Minus, Plus } from "lucide-react";

type Props = {
  isAccordionOpen?: boolean;
  question: string;
  answer: string;
};

export default function Accordion(props: Props) {
  const [animationParent] = useAutoAnimate();
  const [isAccordionOpen, setAccordion] = useState(
    props.isAccordionOpen || false
  );

  function toggleAccordion() {
    setAccordion(!isAccordionOpen);
  }

  return (
    <div ref={animationParent} className="flex flex-col gap-4 py-4 px-4">
      {/* Question */}
      <p
        onClick={toggleAccordion}
        className="flex justify-between gap-2 sm:text-lg font-semibold cursor-pointer"
      >
        <span>{props.question}</span>
        {isAccordionOpen ? (
          <Minus className="shrink-0" />
        ) : (
          <Plus className="shrink-0" />
        )}
      </p>
      {/* Answer */}
      {isAccordionOpen && (
        <p className="text-sm sm:text-base text-muted-foreground">{props.answer}</p>
      )}
    </div>
  );
}