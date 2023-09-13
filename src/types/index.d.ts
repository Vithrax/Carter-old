import { LucideIcon } from "lucide-react";

export type NavItem = {
  section: string;
  title: string;
  disabled?: boolean;
};

export type FeatureCard = {
  title: string;
  description: string;
  icon: LucideIcon;
};
