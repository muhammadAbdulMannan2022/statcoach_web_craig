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
    question: "What is StatCoachLive in one sentence?",
    answer:
      "A live, AFL‑first coaching companion that uses your key stats, patterns, and strategies as the match unfolds—then builds reports, heatmaps and suggestions you can actually use in-game.",
    isOpen: false,
  },
  {
    id: 2,
    question: "Who is it for?",
    answer:
      "Male and Female Teams, Community clubs, Junior clubs, Talent Pathways, School Programs, and Professional Clubs who want elite‑style insight without an analyst’s budget. Most Junior Coaches are parents without any experience. Imagine having an educated AI Assistant Coach supporting you on Game Day.",
    isOpen: false,
  },
  {
    id: 3,
    question: "What makes it different?",
    answer:
      "In-Game Coaching. Simple visuals. AI‑assisted prompts. You won’t be arguing with spreadsheets when you should be moving magnets.",
    isOpen: false,
  },
  {
    id: 4,
    question: "Does it work out of the box for one coach?",
    answer:
      "Yes. Solo mode is quick to set up and works perfectly off one tablet.",
    isOpen: false,
  },
  {
    id: 5,
    question: "What does “AI‑assisted” actually do?",
    answer:
      "It spots trends (e.g., repeat entries conceded on the same flank), nudges you with timely prompts (e.g., “Press too high last 6 mins?”), and assembles tidy in‑match summaries. You stay the head coach; the AI is the loud assistant who never loses the whiteboard marker.",
    isOpen: false,
  },
  {
    id: 6,
    question: "What can I track live?",
    answer:
      "Core AFL indicators out of the box (contested/uncontested possession chains, inside 50s, repeat entries, turnovers, stoppage outcomes, scores from source). You choose the most important statistics to support your coaching needs (up to 5) from a list of over 30.",
    isOpen: false,
  },
  {
    id: 7,
    question: "Do I need a data analyst to run it?",
    answer:
      "No. We’ve built a coach‑first mentality (big buttons, minimal menus, presets). You just need one person to hit the stats buttons.",
    isOpen: false,
  },
  {
    id: 8,
    question: "Will this replace my match review tools?",
    answer:
      "It can export clean reports to sit alongside your video workflow. If you already use a video solution, keep it; StatCoachLive is the real‑time brains and quick‑review muscle.",
    isOpen: false,
  },
  {
    id: 9,
    question: "Can I customise the Statistics?",
    answer:
      "Yes. You choose the most relevant 5 stats from the library to track – you can change these from game-to-game",
    isOpen: false,
  },
  {
    id: 10,
    question: "Will it work for other sports?",
    answer:
      "AFL is first. Basketball, rugby codes, football (soccer), and netball are on the roadmap. If you’re keen to pilot, tell us.",
    isOpen: false,
  },
  {
    id: 11,
    question: "What devices do we need on the day?",
    answer:
      "One tablet (iPad recommended). You can use a phone but would need very dainty fingers…",
    isOpen: false,
  },
  {
    id: 12,
    question: "Does it work offline?",
    answer:
      "It is App-based so you will need a connection. If your tablet doesn’t have it’s own data, you can hot-spot it.",
    isOpen: false,
  },
  {
    id: 13,
    question: "How fast are the “live” updates?",
    answer: "Immediate on your device.",
    isOpen: false,
  },
  {
    id: 14,
    question: "Can we pre‑load our match plan?",
    answer:
      "Yes. Via your AI Assistant Coach Sam you can use preloaded coaching strategies, or teach Sam your own.",
    isOpen: false,
  },
  {
    id: 15,
    question: "Does it support quarter‑by‑quarter notes?",
    answer:
      "Yep. Timestamped notes, colour‑coded by statistic, ready for review quarter-on-quarter. As well as Heatmaps and AI recommendations.",
    isOpen: false,
  },
  {
    id: 16,
    question: "Where is our data stored?",
    answer:
      "In reputable cloud infrastructure. Ask us about data residency if your club has requirements.",
    isOpen: false,
  },
  {
    id: 17,
    question: "Who owns the data?",
    answer:
      "You do—club/team is the data controller. We process it to provide the service and nothing else.",
    isOpen: false,
  },
  {
    id: 18,
    question: "Is it safe for juniors?",
    answer: "Yes. Junior accounts use privacy‑first defaults.",
    isOpen: false,
  },
  {
    id: 19,
    question: "Can we delete data?",
    answer: "Any owner/admin can export and delete match data at any time.",
    isOpen: true,
  },
  {
    id: 20,
    question: "Are you compliant with Aussie privacy law?",
    answer:
      "Built with the Australian Privacy Principles in mind. We’ll provide a plain‑English privacy policy and a data‑processing summary for clubs.",
    isOpen: false,
  },
  {
    id: 21,
    question: "How is StatCoachLive priced?",
    answer:
      "We offer packages for Solo Coach, Mini Club Pack, Maxi Club Pack, and Club/Enterprise. Monthly and annual options. Volume pricing for multi‑team clubs and schools.",
    isOpen: false,
  },
  {
    id: 22,
    question: "Do you offer refunds?",
    answer:
      "Self‑serve cancellation any time on monthly plans, refunds as per fair‑use policy for annual plans",
    isOpen: false,
  },
  {
    id: 23,
    question: "Can we switch plans mid‑season?",
    answer:
      "Yes, upgrades prorate instantly; downgrades take effect at the next renewal.",
    isOpen: false,
  },
  {
    id: 24,
    question: "What devices are supported?",
    answer:
      "iPads & Tablets (primary), plus modern iPhone and Android phones for companion access. Web dashboard for post‑match review.",
    isOpen: false,
  },
  {
    id: 25,
    question: "Does it integrate with GPS wearables and video?",
    answer:
      "Native links to popular GPS/video platforms are on the near‑term roadmap. We’re happy to prioritise based on demand.",
    isOpen: false,
  },
  {
    id: 26,
    question: "Can we export?",
    answer:
      "One click to a neat PDF export of reports, statistics and heatmaps.",
    isOpen: false,
  },
  {
    id: 27,
    question: "How do we get started?",
    answer:
      "Choose your plan, choose your AI Assistant Coach and begin. If you choose a ‘multi-seat’ subscription you will have an administrator who assigns seats.",
    isOpen: false,
  },
  {
    id: 28,
    question: "Do you offer live training?",
    answer:
      "Yes—short webinars for coaches and operators. Clubs can book private sessions.",
    isOpen: false,
  },
  {
    id: 29,
    question: "Will this be used to pick teams?",
    answer:
      "Coaches can use objective data to support decisions, but human judgement stays front and centre. The aim is development, not selection.",
    isOpen: false,
  },
  {
    id: 30,
    question: "Can parents see data?",
    answer:
      "Only if the club officials have access to the data. Juniors’ privacy comes first.",
    isOpen: false,
  },
  {
    id: 31,
    question: "Language support?",
    answer: "English at launch. Additional languages on request.",
    isOpen: false,
  },
  {
    id: 32,
    question: "What’s next on the roadmap?",
    answer:
      "Deeper GPS/video harmonisation, opponent scout packs, player specific statistics and more sports. We publish a public roadmap and love coach input.",
    isOpen: false,
  },
  {
    id: 33,
    question: "Can we request features?",
    answer:
      "Please do. The best ideas usually come from the coaches actually pacing the boundary.",
    isOpen: false,
  },
  {
    id: 34,
    question: "Are there any usage restrictions on match day?",
    answer:
      "Follow your league’s technology rules. StatCoachLive is designed to be compliant with typical community and state‑league guidelines, but regulations vary.",
    isOpen: false,
  },
  {
    id: 35,
    question: "Any liability caveats?",
    answer:
      "Standard “decision support, not medical advice; use in accordance with rules and conditions” applies.",
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
    <>
      <div id="faq" className="mb-20"></div>
      <div className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header - Full width on mobile, left column on lg+ */}
          <div className="flex items-center justify-center">
            <div className="mb-8 lg:mb-12  flex flex-col items-center justify-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#504B63] text-center mb-4 sm:mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-[#696868] text-sm sm:text-base mb-4 sm:mb-6 text-center">
                Still have questions? Contact our Team via{" "}
                <a
                  href="mailto:demopdf@statcoachlive.com"
                  className="underline hover:text-green-600 transition-colors"
                >
                  Demopdf@statcoachlive.com
                </a>
              </p>
              <div className="flex items-center gap-2">
                <img
                  className="h-14"
                  src="/logo.png"
                  alt="StatCoachLive Logo"
                />
              </div>
            </div>
          </div>

          {/* FAQ Grid - 1 col on mobile, 2 cols on md+ */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              faqs.slice(0, Math.ceil(faqs.length / 2)),
              faqs.slice(Math.ceil(faqs.length / 2)),
            ].map((column, colIndex) => (
              <div key={colIndex} className="flex flex-col gap-4 sm:gap-6">
                {column.map((faq) => (
                  <div
                    key={faq.id}
                    className="bg-white rounded-lg shadow-md shadow-[#19196214] transition-all hover:shadow-lg duration-300 overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFAQ(faq.id)}
                      className="w-full px-4 sm:px-5 py-4 sm:py-5 hover:cursor-pointer flex items-start justify-between text-left hover:bg-gray-50 transition-colors"
                    >
                      <span
                        className={`text-sm sm:text-base font-medium pr-4 sm:pr-6 leading-tight ${
                          faq.isOpen ? "text-green-600" : "text-gray-700"
                        }`}
                      >
                        {faq.question}
                      </span>

                      <span className="flex-shrink-0">
                        {faq.isOpen ? (
                          <svg
                            className="w-5 h-5 text-green-600"
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
                            className="w-5 h-5 text-gray-400"
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

                    <div
                      className="overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
                      style={{
                        height: faq.isOpen
                          ? `${
                              contentRefs.current.get(faq.id)?.scrollHeight + 24
                            }px`
                          : "0px",
                      }}
                    >
                      <div
                        ref={(el) => setContentRef(faq.id, el)}
                        className={`px-4 sm:px-5 pb-4 sm:pb-5 pt-2 text-gray-600 text-sm sm:text-base leading-relaxed ${
                          faq.isOpen ? "opacity-100" : "opacity-0"
                        } transition-opacity duration-300`}
                      >
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQAccordion;
