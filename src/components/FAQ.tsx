"use client";

import React, { useState } from "react";
import Image from "next/image";
import Heading from "./common/Heading";

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What services does Unmatched Consultancy provide?",
      answer:
        "We offer expert services in Taxation, Accounting & Bookkeeping, Audit & Assurance, Business Advisory, and Regulatory Compliance tailored for businesses and individuals.",
    },
    {
      question: "How can I get started with your consultancy?",
      answer:
        "Simply contact us via our website or call our office. We provide personalized consultations to understand your needs and suggest the best financial solutions.",
    },
    {
      question: "Are your services suitable for small businesses?",
      answer:
        "Absolutely! We specialize in helping startups, SMEs, and growing enterprises optimize their financial processes and ensure compliance.",
    },
    {
      question: "Do you offer remote or online consultations?",
      answer:
        "Yes, we provide both in-person and remote consultations to accommodate clients locally and globally.",
    },
    {
      question: "Can I customize your services for my business?",
      answer:
        "Definitely! We tailor our services to your business requirements and goals.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-primary-50/40 py-16">
      {/* Heading */}
      <Heading
        label="FAQ"
        title="Got Questions? We’ve Got Answers"
        description="Everything you need to know about our services."
      />

      {/* Soft brand glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-900/10 blur-[220px]" />

      {/* Decorative Left Image */}
      <div className="pointer-events-none absolute left-0 top-1/2 hidden -translate-y-1/2 lg:block">
        <Image
          src="/images/faq/faq-shape-4.png"
          alt="FAQ decoration left"
          width={220}
          height={220}
          className="opacity-60 blur-[0.3px]"
        />
      </div>

      {/* Decorative Right Image */}
      <div className="pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 lg:block">
        <Image
          src="/images/faq/faq-shape-2-3.png"
          alt="FAQ decoration right"
          width={220}
          height={220}
          className="opacity-60 blur-[0.3px]"
        />
      </div>

      {/* FAQ Content */}
      <div className="relative z-10 mx-auto mt-12 max-w-3xl px-4 sm:px-6">
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className={`
                  cursor-pointer rounded-xl bg-white
                  px-5 py-4 transition-all duration-300
                  border
                  ${
                    isOpen
                      ? "border-transparent shadow-lg ring-1 ring-primary-600/30"
                      : "border-primary-900/10 hover:border-primary-600/30 hover:shadow-md"
                  }
                `}
              >
                {/* Question */}
                <div className="flex items-center justify-between gap-4">
                  <h3
                    className={`text-base font-semibold transition-colors ${
                      isOpen
                        ? "text-primary-900"
                        : "text-primary-900/80"
                    }`}
                  >
                    {faq.question}
                  </h3>

                  <div
                    className={`
                      flex h-9 w-9 items-center justify-center rounded-full
                      transition-all
                      ${
                        isOpen
                          ? "bg-secondary-600 text-white"
                          : "bg-secondary-100 text-secondary-600"
                      }
                    `}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 18 18"
                      fill="none"
                      className={`transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <path
                        d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out
                    ${
                      isOpen
                        ? "max-h-40 opacity-100 mt-3"
                        : "max-h-0 opacity-0"
                    }
                  `}
                >
                  <p className="text-sm leading-relaxed text-primary-900/70">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;