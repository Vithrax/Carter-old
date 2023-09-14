import { pricingData } from "@/config/landing-page";
import Text from "../Text";
import PricingCard from "./PricingCard";

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="flex h-[100dvh] min-h-fit snap-center flex-col items-center justify-center gap-4 bg-primary/5"
    >
      <Text variant="h1">Pricing and plans</Text>
      <Text role="subtitle" className="text-center">
        All features are available for free, but for the users that want to
        support the project, we prepared additional plans!
      </Text>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {pricingData.map((data) => {
          return <PricingCard key={data.name} {...data}></PricingCard>;
        })}
      </div>
    </section>
  );
};

export default Pricing;
