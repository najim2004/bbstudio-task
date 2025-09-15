import { Minus, Plus } from "lucide-react";
import React from "react";

const FAQs = [
  {
    question: "What is Zuno?",
    answer:
      "Zuno combines AI technology with real psychology-based techniques, offering support that adapts to your mood, routine, and specific challenges like anxiety, sleep, libido, and focus.",
  },
  {
    question: "Is Zuno a replacement for therapy?",
    answer:
      "No. Zuno is a powerful daily tool for emotional well-being, but it’s not a medical service or a substitute for professional therapy. It’s here to support you, not replace clinical care",
  },
  {
    question: "Who is Zuno for?",
    answer:
      "Zuno is designed for women aged 18–35 who want to better understand their mental and emotional health using modern, tech-savvy tools — no stigma, no pressure.",
  },
  {
    question: "How does the AI actually help?",
    answer:
      "Zuno uses AI to learn your patterns, suggest personalized exercises, monitor your emotional shifts, and guide you through breathing, journaling, focus-building, and self-awareness practices.",
  },
  {
    question: "What kind of issues can Zuno help me with?",
    answer:
      "Zuno helps with everyday mental health challenges like anxiety, sleep issues, low libido, poor focus, emotional eating, and burnout — all in one gentle, beautiful space",
  },
  {
    question: "Can I use Zuno every day?",
    answer:
      "Absolutely. Zuno was built to support your daily rhythms—from your morning energy to nighttime rest.",
  },
];

function FAQSection() {
  return (
    <div className="font-bdogrotesk-vf flex flex-col gap-6 max-w-6xl mx-auto px-10 my-20">
      <div className="text-gray-700 text-center">
        <span className="text-sm px-4 py-1.5 rounded-full bg-gray-200">
          Questions?
        </span>
        <h1 className="text-3xl font-bold mt-4">We’re here to help</h1>
      </div>
      <div className="border-t border-b border-gray-300">
        {FAQs.map((FAQ, idx) => (
          <details
            key={idx}
            className="mb-0 border-b border-gray-300 last:border-none p-7"
          >
            <summary className="cursor-pointer list-none">
              <div className="font-medium text-xl flex justify-between items-center w-full">
                <h2>{FAQ.question}</h2>
                <span>
                  <Plus className="plus-icon" />
                  <Minus className="minus-icon hidden" />
                </span>
              </div>
            </summary>
            <div className="px-0 pb-2 text-gray-500">
              <div className="prose prose-ul:pl-4 pt-4">{FAQ.answer}</div>
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}

export default FAQSection;
