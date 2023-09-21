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

export type NavSideLink = {
  href: string;
  name: string;
  icon: LucideIcon;
};

export type FilterOption = {
  label: string;
  value: string;
  icon?: React.ComponentType<{ className?: string }>;
};
