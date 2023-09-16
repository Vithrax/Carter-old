import { cn } from "@/lib/utils";
import { Button } from "./ui/Button";
import { ScrollArea } from "./ui/ScrollArea";
import {
  BarChart2,
  Bell,
  DollarSign,
  Home,
  ListChecks,
  Package,
  ScrollText,
  Settings,
  TrendingUp,
} from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  favorites?: string[];
}

export function Sidebar({ className, favorites }: SidebarProps) {
  return (
    <div className={cn("h-full overflow-auto", className)}>
      <div className="flex h-full flex-col gap-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Dashboard
          </h2>
          <div className="space-y-1">
            <Button variant="secondary" className="w-full justify-start">
              <Home className="mr-2 h-4 w-4" />
              Overview
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Package className="mr-2 h-4 w-4" />
              Items
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <ScrollText className="mr-2 h-4 w-4" />
              Recipies
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <ListChecks className="mr-2 h-4 w-4" />
              Shopping Lists
            </Button>
          </div>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Analytics
          </h2>
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start">
              <TrendingUp className="mr-2 h-4 w-4" />
              Popular items
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <DollarSign className="mr-2 h-4 w-4" />
              Price tracker
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <BarChart2 className="mr-2 h-4 w-4" />
              Statistics
            </Button>
          </div>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Favorites
          </h2>
          <Button variant="ghost" className="w-full justify-start">
            <DollarSign className="mr-2 h-4 w-4" />
            Shopping Lists
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <BarChart2 className="mr-2 h-4 w-4" />
            Recipes
          </Button>
        </div>
        <div className="mt-auto flex w-full justify-around">
          <Button variant="ghost" className="justify-start">
            <Settings className="mr-2 h-4 w-4" />
            My account
          </Button>
          <div className="flex items-center">
            <Button variant="ghost" size="icon">
              <Bell className="h-[1.2rem] w-[1.2rem]" />
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  );
}
