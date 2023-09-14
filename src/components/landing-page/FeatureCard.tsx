import { FC } from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/Card";
import { FeatureCard } from "@/types";

const FeatureCard: FC<FeatureCard> = ({ description, icon, title }) => {
  const IconComponent = icon;

  return (
    <Card>
      <CardHeader>
        <IconComponent className="mb-1 h-10 w-10 text-primary" />
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
};

export default FeatureCard;
