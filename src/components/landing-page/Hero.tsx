import { ChevronDown } from "lucide-react";
import Navigation from "./Navigation";
import Link from "next/link";
import { buttonVariants } from "../ui/Button";
import Text from "../Text";

const HeroPage = () => {
  return (
    <section className="flex h-[100dvh] min-h-fit snap-center flex-col justify-between">
      <Navigation />
      <div className="flex flex-col items-center justify-center gap-6 pb-10 text-center">
        <Link
          href={"https://github.com/Vithrax/Carter"}
          className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium hover:text-primary"
          target="_blank"
        >
          Fully open source? Get me to github!
        </Link>
        <Text variant="h1">
          Complete, personalized shopping planning experience
        </Text>
        <p className="max-w-2xl leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          <span className="underline decoration-primary decoration-2">
            Simplify
          </span>{" "}
          your shopping list by using your{" "}
          <span className="underline decoration-primary decoration-2">
            {" "}
            own
          </span>{" "}
          recipies and products. Save and{" "}
          <span className="underline decoration-primary decoration-2">
            reuse
          </span>
          . View and{" "}
          <span className="underline decoration-primary decoration-2">
            analyze
          </span>
          .
        </p>
        <div className="space-x-2">
          <Link href="/sign-up" className={buttonVariants()}>
            Join for FREE
          </Link>
          <Link href="/" className={buttonVariants({ variant: "outline" })}>
            Learn more
          </Link>
        </div>
      </div>
      <Link
        href="#features"
        className="flex h-8 items-center justify-center bg-primary text-lg font-semibold text-primary-foreground md:h-12"
      >
        Find out how it works <ChevronDown />
      </Link>
    </section>
  );
};

export default HeroPage;
