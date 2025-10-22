import Example from "./sections/Example";
import FAQAccordion from "./sections/FAQ";
import Hero from "./sections/Hero";
import HowToUse from "./sections/HowToUse";
import Pricing from "./sections/Pricing";
import Reviews from "./sections/Reviews";

export default function Landing() {
  return (
    <div>
      <Hero />
      <HowToUse />
      <Pricing />
      <Reviews />
      <Example />
      <FAQAccordion />
    </div>
  );
}
