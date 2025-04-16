/** @format */
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useAutoAnimate } from "@formkit/auto-animate/react";

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
    <div ref={animationParent} className="flex flex-col gap-4 py-4">
      {/* Question */}
      <p
        onClick={toggleAccordion}
        className="flex justify-between gap-2 sm:text-lg font-semibold cursor-pointer"
      >
        <span>{props.question}</span>
        {isAccordionOpen ? (
          <Image
            src="/icon-minus.svg"
            alt="minus-icon"
            width={24} 
            height={24} 
            className="h-6 w-auto"
          />
        ) : (
          <Image
            src="/icon-plus.svg"
            alt="plus-icon"
            width={24} 
            height={24} 
            className="h-6 w-auto"
          />
        )}
      </p>
      {/* Answer */}
      {isAccordionOpen && (
        <p className="text-sm sm:text-base text-gray-400">{props.answer}</p>
      )}
    </div>
  );
}