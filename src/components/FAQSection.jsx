import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

export default function FAQSection({ eyebrow, title, faqs = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        {/* Eyebrow */}
        {eyebrow && (
          <div className="text-center mb-2 text-sm text-gray-500 uppercase tracking-wide">
            {eyebrow}
          </div>
        )}

        {/* Title */}
        <h5 className="text-3xl md:text-4xl font-semibold text-center mb-10">
          {title}
        </h5>

        {/* FAQ Items */}
        <div className="divide-y">
          {faqs.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <div key={index} className="py-4">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center text-left"
                >
                  <span className="font-medium text-gray-900">
                    {item.question}
                  </span>
                  <FiChevronDown
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <p className="mt-3 text-gray-600 leading-relaxed">
                    {item.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
