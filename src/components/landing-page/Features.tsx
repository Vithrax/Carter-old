import Link from "next/link";
import Text from "../Text";
import FeatureCard from "./FeatureCard";
import { landingPageFeatures } from "@/config/landing-page";
import { ArrowDown } from "lucide-react";

const Features = () => {
  return (
    <section
      id="features"
      className="flex h-[100dvh] min-h-fit snap-center flex-col items-center justify-center gap-2 bg-primary/5"
    >
      <Text variant="h1">Features</Text>
      <Text role="subtitle" className="text-center">
        Cartapp is a feature-rich, free to use application to improve overall
        efficency of the shopping. Here&apos;s how we do it.
      </Text>
      <div className="mt-4 grid grid-cols-3 gap-3">
        {landingPageFeatures.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default Features;
