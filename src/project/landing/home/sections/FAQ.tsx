// @ts-nocheck
import React, { useState, useRef } from "react";

// Define the interface for FAQ data
interface FAQ {
  id: number;
  question: string;
  answer: string;
  isOpen: boolean;
}

// Sample FAQ data with a longer answer for testing
const faqData: FAQ[] = [
  {
    id: 1,
    question: "Can I enroll in multiple courses at once?",
    answer:
      "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
    isOpen: true,
  },
  {
    id: 2,
    question: "What kind of support can I expect from instructors?",
    answer:
      "Our instructors provide comprehensive support including Q&A sessions, assignment feedback, discussion forums, and one-on-one guidance when needed.",
    isOpen: false,
  },
  {
    id: 3,
    question: "What kind of support can I expect from instructors?",
    answer:
      "Our instructors provide comprehensive support including Q&A sessions, assignment feedback, discussion forums, and one-on-one guidance when needed.",
    isOpen: false,
  },
  {
    id: 4,
    question:
      "Are the courses self-paced or do they have specific start and end dates?",
    answer:
      "Most of our courses are self-paced, allowing you to learn at your own schedule. However, some specialized programs may have cohort-based learning with specific timelines.",
    isOpen: false,
  },
  {
    id: 5,
    question: "Are there any prerequisites for the courses?",
    answer:
      "Prerequisites vary by course. Each course page clearly lists any required prior knowledge or skills. Many introductory courses have no prerequisites at all.",
    isOpen: false,
  },
  {
    id: 6,
    question: "Can I download the course materials for offline access?",
    answer:
      "Yes! Most course materials including videos, PDFs, and resources can be downloaded for offline viewing. Some interactive elements may require an internet connection. Additionally, our platform supports downloading high-quality video lectures, detailed course notes, and supplementary materials in multiple formats to ensure you have access to all necessary resources anytime, anywhere. Our offline access feature is designed to provide flexibility for learners with busy schedules or limited internet connectivity, allowing you to continue your education seamlessly.",
    isOpen: false,
  },
];

const FAQAccordion: React.FC = () => {
  const [faqs, setFaqs] = useState(faqData);
  const contentRefs = useRef<Map<number, HTMLDivElement>>(new Map());

  const toggleFAQ = (id: number) => {
    setFaqs(
      faqs.map(
        (faq) =>
          faq.id === id
            ? { ...faq, isOpen: !faq.isOpen }
            : { ...faq, isOpen: false } // Close all other FAQs
      )
    );
  };

  // Set ref for each FAQ content to measure height
  const setContentRef = (id: number, element: HTMLDivElement | null) => {
    if (element) {
      contentRefs.current.set(id, element);
    }
  };

  return (
    <div className=" py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12">
          {/* Left Column - Header */}
          <div className="lg:col-span-5">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#504B63] mb-4 sm:mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-[#696868] text-sm sm:text-base mb-2 sm:mb-4">
              Still you have any questions? Contact our Team via{" "}
              <a href="mailto:demopdf@statcoachlive.com" className="underline">
                Demopdf@statcoachlive.com
              </a>
            </p>

            {/* Logo */}
            <div className="flex items-center gap-2">
              <img className="h-14" src="/logo.png" alt="" />
            </div>
          </div>

          {/* Right Column - FAQ Items */}
          <div className="lg:col-span-7 space-y-3 sm:space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="bg-white rounded-lg shadow-md shadow-[#19196214] transition-all hover:cursor-pointer duration-300"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-start justify-between text-left hover:bg-gray-50 transition-colors rounded-lg hover:cursor-pointer"
                >
                  <span
                    className={`text-sm sm:text-base md:text-lg font-medium pr-6 sm:pr-8 ${
                      faq.isOpen ? "text-green-600" : "text-gray-700"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <span className="flex-shrink-0 ml-4">
                    {faq.isOpen ? (
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M20 12H4"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    )}
                  </span>
                </button>

                {/* Answer */}
                <div
                  className="overflow-hidden transition-all duration-600 ease-[cubic-bezier(0.4,0,0.2,1)]"
                  style={{
                    height: faq.isOpen
                      ? `${
                          contentRefs.current.get(faq.id)?.scrollHeight + 20
                        }px` // Add buffer for long content
                      : "0px",
                    willChange: "height",
                  }}
                >
                  <div
                    ref={(el) => setContentRef(faq.id, el)}
                    className={`px-4 sm:px-6 pt-4 sm:pt-5 pb-4 sm:pb-5 transition-all duration-600 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                      faq.isOpen ? "opacity-100" : "opacity-0"
                    } text-gray-600 text-sm sm:text-base leading-relaxed`}
                  >
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQAccordion;
