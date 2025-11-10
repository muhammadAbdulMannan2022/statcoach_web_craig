import { PricingCard } from "../../../utils/PricingCard";
import { useState } from "react";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [enterpriseSeats, setEnterpriseSeats] = useState(11);

  const toggleBilling = () => setIsAnnual(!isAnnual);

  // GST
  const addGST = (price: number) => (price * 1.1).toFixed(2);

  /* ---------- Fixed Plans ---------- */
  const plans = [
    {
      title: "Solo Coach",
      monthly: 15.95,
      annual: 159.5,
      description: "Perfect for individual coaches",
      features: [
        "1 Coach Seat",
        "Full Dashboard & Analytics",
        "Booking Calendar",
        "Email Support",
        "Custom Branding",
      ],
      buttonText: "Get Started",
      popular: false,
    },
    {
      title: "Mini Club Pack",
      monthly: 69.75,
      annual: 697.5,
      description: "Up to 5 coaches",
      features: [
        "5 Coach Seats",
        "Team Analytics",
        "Shared Calendar",
        "Priority Email Support",
        "Custom Branding",
      ],
      buttonText: "Get Started",
      popular: true,
    },
    {
      title: "Maxi Club Pack",
      monthly: 129.5,
      annual: 1295,
      description: "Up to 10 coaches",
      features: [
        "10 Coach Seats",
        "Advanced Team Management",
        "Dedicated Support",
        "Custom Integrations",
        "White-Label Option",
      ],
      buttonText: "Get Started",
      popular: false,
    },
  ];

  /* ---------- Enterprise per-seat pricing ---------- */
  const enterpriseMonthlyPerSeat = 10.95;
  const enterpriseAnnualPerSeat = 109.5;

  const enterpriseMonthlyTotal = enterpriseSeats * enterpriseMonthlyPerSeat;
  const enterpriseAnnualTotal = enterpriseSeats * enterpriseAnnualPerSeat;

  return (
    <section
      id="pricing"
      className="py-20 px-4 bg-gradient-to-t from-[#ffffff] via-white to-[#ffffff]"
    >
      <div className="max-w-7xl mx-auto">
        {/* ----- Header ----- */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#453F5B] mb-4">
            Our <span className="text-[#2D8609]">Pricing</span> Plan
          </h2>
          <p className="text-[20px] text-[#8881A3] max-w-2xl mx-auto">
            To suit your coaching needs.
          </p>
        </div>

        {/* ----- Billing Toggle ----- */}
        <div className="flex justify-center items-center mb-12">
          <span
            className={`mr-3 text-lg ${
              !isAnnual ? "text-[#453F5B]" : "text-[#8881A3]"
            }`}
          >
            Monthly
          </span>

          <button
            onClick={toggleBilling}
            className="relative w-14 h-8 bg-[#EDEDED] rounded-full transition-all duration-300 focus:outline-none hover:cursor-pointer"
          >
            <div
              className={`absolute top-1 w-6 h-6 bg-[#2D8609] rounded-full shadow-md transform transition-transform duration-300 ${
                isAnnual ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>

          <span
            className={`ml-3 text-lg ${
              isAnnual ? "text-[#453F5B]" : "text-[#8881A3]"
            }`}
          >
            Annual{" "}
            <span className="text-[#2D8609] text-sm font-medium">
              (Save 16.7%)
            </span>
          </span>
        </div>

        {/* ----- 3 Fixed Plans (grid) ----- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan) => {
            const base = isAnnual ? plan.annual : plan.monthly;
            const price = addGST(base);
            const duration = isAnnual ? "year" : "month";

            return (
              <div
                key={plan.title}
                className={`relative flex flex-col ${
                  plan.popular
                    ? "bg-[#EDEDED] rounded-t-2xl rounded-b-4xl pt-10"
                    : "pt-14"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#2D8609] text-white px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                )}

                <PricingCard
                  icon={`/${
                    plan.title.includes("Solo")
                      ? 1
                      : plan.title.includes("Mini")
                      ? 2
                      : 3
                  }.svg`}
                  title={plan.title}
                  price={`$${price}`}
                  duration={duration}
                  description={plan.description}
                  features={plan.features}
                  buttonText={plan.buttonText}
                  popular={plan.popular}
                  gstNote="All prices +GST"
                />
              </div>
            );
          })}
        </div>

        {/* ----- Enterprise Custom Card (below) ----- */}
        <div className="max-w-2xl mx-auto">
          <div className="relative flex flex-col bg-white rounded-2xl border border-gray-200 p-6 shadow-lg">
            {/* Icon */}
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-[#3E9E17] to-[#79BB5F]">
              <img src="/2.svg" alt="Enterprise" className="h-8 w-8" />
            </div>

            {/* Title & Subtitle */}
            <h3 className="mb-2 text-2xl font-semibold text-[#453F5B]">
              Enterprise Coach
            </h3>
            <p className="mb-4 text-sm text-[#8881A3]">
              11+ seats – custom pricing per seat
            </p>

            {/* Slider */}
            <div className="mb-6">
              <div className="flex justify-between text-sm text-[#453F5B] mb-2">
                <span>{enterpriseSeats} seats</span>
                <span>100 seats</span>
              </div>

              <input
                type="range"
                min="11"
                max="100"
                value={enterpriseSeats}
                onChange={(e) => setEnterpriseSeats(Number(e.target.value))}
                className="w-full h-2 bg-[#EDEDED] rounded-lg appearance-none cursor-pointer slider"
                style={{
                  background: `linear-gradient(to right, #2D8609 0%, #2D8609 ${
                    ((enterpriseSeats - 11) / 89) * 100
                  }%, #EDEDED ${
                    ((enterpriseSeats - 11) / 89) * 100
                  }%, #EDEDED 100%)`,
                }}
              />

              <div className="flex justify-between text-xs text-[#8881A3] mt-1">
                <span>11</span>
                <span>100</span>
              </div>
            </div>

            {/* Dynamic Price */}
            <div className="mb-6">
              <p className="text-3xl font-bold text-[#453F5B]">
                $
                {isAnnual
                  ? addGST(enterpriseAnnualTotal)
                  : addGST(enterpriseMonthlyTotal)}
                <span className="text-sm text-[#8881A3]">
                  {" "}
                  /{isAnnual ? "year" : "month"}
                </span>
              </p>
              <p className="text-xs text-[#8881A3] mt-1">
                ${isAnnual ? enterpriseAnnualPerSeat : enterpriseMonthlyPerSeat}
                /seat +GST
              </p>
            </div>

            {/* Features */}
            <ul className="mb-8 space-y-2 text-sm text-[#453F5B]">
              <li>• Everything in Maxi Pack</li>
              <li>• Unlimited Seats</li>
              <li>• Dedicated Account Manager</li>
              <li>• Custom Integrations</li>
              <li>• SLA & Priority Support</li>
            </ul>

            {/* CTA */}
            <div className="mt-auto">
              <button className="w-full rounded-lg bg-[#2D8609] py-3 text-white font-medium hover:bg-[#256e08] transition-all shadow-md">
                Contact Sales
              </button>
              <p className="text-xs text-center text-[#8881A3] mt-2">
                All prices +GST
              </p>
            </div>
          </div>
        </div>

        {/* ----- Global GST note ----- */}
        <p className="text-center text-sm text-[#8881A3] mt-8">
          * All prices are in USD and include 10 % GST for Australian customers.
        </p>
      </div>

      {/* ----- Slider thumb styles ----- */}
      <style jsx>{`
        input[type="range"]::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #2d8609;
          cursor: pointer;
          box-shadow: 0 0 8px rgba(45, 134, 9, 0.3);
        }
        input[type="range"]::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #2d8609;
          cursor: pointer;
          border: none;
          box-shadow: 0 0 8px rgba(45, 134, 9, 0.3);
        }
      `}</style>
    </section>
  );
}
