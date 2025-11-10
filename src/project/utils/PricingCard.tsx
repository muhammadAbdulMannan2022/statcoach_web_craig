interface PricingCardProps {
  icon?: string; // now it's a URL
  title: string;
  price: string;
  duration?: string | null;
  description: string;
  features: string[];
  buttonText?: string;
  onButtonClick?: () => void;
  popular?: boolean;
  gstNote?: string;
}

export function PricingCard({
  icon,
  title,
  price,
  duration,
  description,
  features,
  buttonText = "Try now",
  onButtonClick,
  popular = false,
  gstNote,
}: PricingCardProps) {
  return (
    <div
      className="relative flex flex-col justify-between w-full h-full max-w-[28rem] rounded-2xl border p-6 border-gray-200 bg-white"
      style={{ boxShadow: "rgba(25, 25, 98, 0.08) 0px 7px 29px 0px" }}
    >
      <div className="mt-5 lg:mt-8">
        {/* Icon */}
        {icon && (
          <div
            className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-[#3E9E17] to-[#79BB5F]"
            style={{
              boxShadow: `
      inset 0 2.85px 3.8px 0px rgba(223, 254, 255, 0.3),
      inset 0 0.95px 0.95px 0px rgba(255, 255, 255, 0.35)
    `,
            }}
          >
            <img
              src={icon}
              alt={`${title} icon`}
              className="h-7 md:h-10 w-7 md:w-10"
            />
          </div>
        )}

        {/* Title */}
        <h3 className="mb-2 text-2xl font-semibold text-dark-gray">{title}</h3>

        {/* Description */}
        <p className="mb-6 text-sm text-dark-gray">{description}</p>

        {/* Features */}
        <ul className="mb-8 space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="text-sm text-dark-gray">
              • {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Price + Button section (sticks to bottom) */}
      <div className="mt-auto">
        <p className="mb-4 text-2xl font-bold text-dark-gray">
          {price}
          {duration && (
            <span className="text-sm text-gray-500"> / {duration}</span>
          )}
        </p>

        <button
          onClick={onButtonClick}
          className={`w-full rounded-lg  px-4  text-sm font-medium transition-all duration-200 hover:cursor-pointer ${
            popular
              ? " bg-[#2D8609] py-2.5 text-white hover:bg-[#256e08] shadow-[inset_0_2.85px_3.8px_0_rgba(223,238,255,0.1),inset_0_0.95px_0.95px_0_rgba(255,255,255,0.1)]"
              : "border-2 py-2 border-[#2D8609] text-[#2D8609] hover:bg-green-50"
          }`}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}
