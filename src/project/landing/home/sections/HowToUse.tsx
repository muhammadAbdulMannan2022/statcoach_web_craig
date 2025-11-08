"use client";

import {
  CreditCard,
  Bot,
  SlidersHorizontal,
  Zap,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";

export default function HowToUse() {
  const [steps] = useState([
    {
      title: "Subscribe",
      description:
        "Choose the plan that matches your coaching needs and get started instantly.",
      icon: <CreditCard className="h-7 w-7 text-light-green" />,
    },
    {
      title: "Choose Your AI Assistant Coach",
      description:
        "Select Sam — available in 4 versions (Junior Girls, Junior Boys, Senior Men, Senior Women), trained on strategies tailored to your team.",
      icon: <Bot className="h-7 w-7 text-light-green" />,
    },
    {
      title: "Select Statistics",
      description:
        "Choose up to 5 key stats to track live during games to power your coaching decisions.",
      icon: <SlidersHorizontal className="h-7 w-7 text-light-green" />,
    },
    {
      title: "Gameday",
      description:
        "Collect live stats in real-time. Sam generates reports, heatmaps, and in-game coaching suggestions instantly.",
      icon: <Zap className="h-7 w-7 text-light-green" />,
    },
    {
      title: "Follow Up",
      description:
        "Access full performance reports to plan targeted training and strategy for the week ahead.",
      icon: <TrendingUp className="h-7 w-7 text-light-green" />,
    },
  ]);

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto h-full">
        <div className="flex flex-col-reverse lg:flex-row items-stretch gap-16 h-full">
          {/* Left Column */}
          <div className="lg:w-1/2 flex flex-col justify-start lg:items-start text-center lg:text-left">
            <div className="mb-4">
              {/* <h2 className="text-2xl font-bold text-dark-gray mb-4">
                Live Statistics that Matter
              </h2> */}
              <img src="/logo.svg" alt="" />
              <p className="text-xl text-dark-gray/80">
                Giving you the coaching edge.
              </p>
            </div>
            <div className="bg-top-right bg-no-repeat flex items-end justify-center lg:justify-start">
              <img
                src="/B.png"
                alt="Football player in red uniform"
                className="relative  w-auto mix-blend-darken"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:w-1/2 flex flex-col justify-center h-full">
            <div className="mb-12 text-center lg:text-left">
              <p className="text-sm font-semibold text-dark-gray/70 mb-3 uppercase tracking-wider">
                5 Easy Steps
              </p>
              <h1 className="text-4xl lg:text-5xl font-bold text-dark-gray">
                Unlock Coaching Success
              </h1>
            </div>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="flex items-center gap-6 group rounded-lg py-2 px-3 flex-shrink-0 shadow-lg shadow-dark-gray/10 border border-mid-gray/50 group-hover:shadow-xl group-hover:shadow-light-green/20 transition-all duration-300"
                >
                  <div className="p-4 rounded-2xl border border-gray-50 bg-gradient-to-tr from-[#E6E4F7] to-[#FBFAFC] flex-shrink-0">
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-dark-gray mb-2">
                      {step.title}
                    </h3>
                    <p className="text-dark-gray/80 leading-relaxed">
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
