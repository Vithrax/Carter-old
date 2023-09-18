import { NavSideLink } from "@/types";
import {
  BarChart2,
  CalendarHeart,
  DollarSign,
  FileHeart,
  Home,
  ListChecks,
  Package,
  ScrollText,
  TrendingUp,
} from "lucide-react";

export const navDashboardLinks: NavSideLink[] = [
  {
    href: "/a",
    name: "Overview",
    icon: Home,
  },
  {
    href: "/a/items",
    name: "Items",
    icon: Package,
  },
  {
    href: "/a/recipes",
    name: "Recipies",
    icon: ScrollText,
  },
  {
    href: "/a/lists",
    name: "Shoping Lists",
    icon: ListChecks,
  },
];

export const navAnalyticsLinks: NavSideLink[] = [
  {
    href: "/a/popular",
    name: "Popular Items",
    icon: TrendingUp,
  },
  {
    href: "/a/expenses",
    name: "Expenses tracker",
    icon: DollarSign,
  },
  {
    href: "/a/stats",
    name: "Statistics",
    icon: BarChart2,
  },
];

export const navFavoriteLinks: NavSideLink[] = [
  {
    href: "/a/favorite/lists",
    name: "Popular Items",
    icon: CalendarHeart,
  },
  {
    href: "/a/favorite/recipes",
    name: "Expenses tracker",
    icon: FileHeart,
  },
];
