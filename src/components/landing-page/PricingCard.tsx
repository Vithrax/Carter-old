import { FC } from "react";
import { pricingData } from "@/config/landing-page";
import { Check } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/Card";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/Button";

const PricingCard: FC<(typeof pricingData)[0]> = ({
  description,
  features,
  name,
  price,
  suggested,
}) => {
  return (
    <Card className={`${suggested ? "border-2 border-primary" : ""}`}>
      <CardHeader>
        <CardTitle className={`${suggested ? "text-primary" : ""}`}>
          {name}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="my-2 text-5xl">
          ${price}
          <span className="text-base text-muted-foreground">/month</span>
        </p>
        <Link
          href="/"
          className={cn(
            buttonVariants({
              variant: `${!suggested ? "outline" : "default"}`,
            }),
            "my-5 w-full",
          )}
        >
          {name === "Starter" ? "Free!" : "Upgrade now"}
        </Link>
        <ul className="space-y-2 pt-5">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-1">
              <Check className="h-4 w-4" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default PricingCard;
