"use client";

import { cn } from "@/lib/utils";
import { Button } from "./ui/Button";
import { Bell, Settings } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import Logo from "./Logo";
import SideBarItem from "./SideBarItem";
import {
  navAnalyticsLinks,
  navDashboardLinks,
  navFavoriteLinks,
} from "@/config/navigation";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  favorites?: string[];
}

export function Sidebar({ className, favorites }: SidebarProps) {
  return (
    <aside className={cn("h-full overflow-auto", className)}>
      <nav className="flex h-full flex-col gap-4 py-4">
        <div className="px-3 py-2">
          <Logo className="mb-8 block" />
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Dashboard
          </h2>
          <div className="space-y-1">
            {navDashboardLinks.map((navLink) => (
              <SideBarItem key={navLink.name} {...navLink} />
            ))}
          </div>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Analytics
          </h2>
          <div className="space-y-1">
            {navAnalyticsLinks.map((navLink) => (
              <SideBarItem key={navLink.name} {...navLink} />
            ))}
          </div>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Favorites
          </h2>
          {navFavoriteLinks.map((navLink) => (
            <SideBarItem key={navLink.name} {...navLink} />
          ))}
        </div>
        <div className="mt-auto flex w-full justify-around">
          <Button variant="ghost" className="justify-start">
            <Settings className="mr-2 h-4 w-4 text-primary" />
            My account
          </Button>
          <div className="flex items-center">
            <Button variant="ghost" size="icon">
              <Bell className="h-[1.2rem] w-[1.2rem]" />
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </aside>
  );
}
