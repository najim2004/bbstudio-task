import { Minus, Plus } from "lucide-react";
import React from "react";

const FAQItem = ({ faq }) => {
  return (
    <details className="mb-0 border-b border-gray-300 last:border-none p-7">
      <summary className="cursor-pointer list-none">
        <div className="font-medium text-xl flex justify-between items-center w-full">
          <h2>{faq.question}</h2>
          <span>
            <Plus className="plus-icon" />
            <Minus className="minus-icon hidden" />
          </span>
        </div>
      </summary>
      <div className="px-0 pb-2 text-gray-500">
        <div className="prose prose-ul:pl-4 pt-4">{faq.answer}</div>
      </div>
    </details>
  );
};

export default FAQItem;
