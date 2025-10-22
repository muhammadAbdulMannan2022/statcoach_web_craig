import { PricingCard } from "../../../utils/PricingCard";

export default function Pricing() {
  const plans = [
    {
      icon: "/1.svg",
      title: "Trial",
      price: "Free",
      duration: null,
      description: "Temporary Number (50 Customer Calls)",
      features: [
        "Basic Dashboard / No Booking Calendar",
        "Integration (Only Inquiri.al's platform)",
        "Calendar (FREE)",
      ],
      buttonText: "Try now",
      popular: false,
    },
    {
      icon: "/2.svg",
      title: "Professional",
      price: "$29",
      duration: "month",
      description: "Perfect for growing teams and coaches",
      features: [
        "Advanced Analytics Dashboard",
        "Full Calendar Integration",
        "Up to 500 Customer Calls",
        "Email Support",
        "Custom Branding",
      ],
      buttonText: "Get Started",
      popular: true,
    },
    {
      icon: "/3.svg",
      title: "Enterprise",
      price: "$99",
      duration: "month",
      description: "For large organizations and teams",
      features: [
        "Everything in Professional",
        "Unlimited Customer Calls",
        "Priority Support",
        "Advanced Team Management",
        "Custom Integrations",
        "Dedicated Account Manager",
      ],
      buttonText: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <section
      id="pricing"
      className="py-20 px-4 bg-gradient-to-t from-[#F4F6FB] via-white to-[#F4F6FB]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#453F5B] mb-4">
            Our <span className="text-[#2D8609]">Pricing</span> Plan
          </h2>
          <p className="text-[20px] text-[#8881A3] max-w-2xl mx-auto">
            Find your best package here
          </p>
        </div>

        {/* Pricing grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch justify-between">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className={`${
                plan.popular ? "relative" : ""
              } items-center justify-center flex flex-col   ${
                plan.popular
                  ? "bg-[#EDEDED] rounded-t-2xl rounded-b-4xl"
                  : "pt-14"
              }`}
            >
              {plan.popular && (
                <div className="py-3 text-xl font-bold text-light-green">
                  Standard
                </div>
              )}
              <PricingCard
                icon={plan.icon}
                title={plan.title}
                price={
                  plan.duration ? `${plan.price}/${plan.duration}` : plan.price
                }
                description={plan.description}
                features={plan.features}
                buttonText={plan.buttonText}
                popular={plan.popular}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
