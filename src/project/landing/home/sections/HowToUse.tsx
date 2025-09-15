"use client";

import { BarChart3, Clock, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function HowToUse() {
  const [steps] = useState([
    {
      title: "Subscribe",
      description:
        "Create & share your booking page in minutes. No technical skills required.",
      icon: <Clock className="h-7 w-7 text-light-green" />,
    },
    {
      title: "Schedule Game",
      description:
        "Create & share your booking page in minutes. No technical skills required.",
      icon: <MessageCircle className="h-7 w-7 text-light-green" />,
    },
    {
      title: "Start analysis during game",
      description:
        "Create & share your booking page in minutes. No technical skills required.",
      icon: <BarChart3 className="h-7 w-7 text-light-green" />,
    },
  ]);

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-light via-mid-gray/20 to-light">
      <div className="max-w-7xl mx-auto h-full">
        {/* parent must use items-stretch */}
        <div className="flex flex-col lg:flex-row items-stretch gap-16 h-full">
          {/* left column */}
          <div className="lg:w-1/2 flex flex-col justify-between content-stretch lg:items-start text-center lg:text-left">
            <div className="mb-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-dark-gray mb-4">
                AFL Strategies
              </h2>
              <p className="text-lg text-dark-gray/80">
                Simple tools that make a big difference
              </p>
            </div>
            <div className="bg-[url('/Vector2.svg')] bg-contain w-full grow bg-top-right bg-no-repeat flex items-end justify-center lg:justify-start">
              <img
                src="/section2.png"
                alt="Football player in red uniform"
                className="relative h-full w-auto"
              />
            </div>
          </div>

          {/* right column */}
          <div className="lg:w-1/2 flex flex-col justify-center h-full">
            <div className="mb-12 text-center lg:text-left">
              <p className="text-sm font-semibold text-dark-gray/70 mb-3 uppercase tracking-wider">
                Easy and Fast
              </p>
              <h1 className="text-4xl lg:text-6xl font-bold text-dark-gray mb-2">
                How To Use
              </h1>
              <h1 className="text-4xl lg:text-6xl font-bold">
                <span className="text-light-green">StatCoachLive</span>
                <span className="text-dark-gray">?</span>
              </h1>
            </div>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="flex items-center gap-6 group rounded-lg py-2 px-3 flex-shrink-0 shadow-lg shadow-dark-gray/10 border border-mid-gray/50 group-hover:shadow-xl group-hover:shadow-light-green/20 transition-all duration-300"
                >
                  <div className="p-4 rounded-2xl border border-gray-50 bg-gradient-to-tr from-[#E6E4F7] to-[#FBFAFC]">
                    <span className="text-light-green font-semibold text-lg">
                      {step.icon}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-dark-gray mb-2">
                      {step.title}
                    </h3>
                    <p className="text-dark-gray/80 leading-relaxed line-clamp-1">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
