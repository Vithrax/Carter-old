"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";
import { buttonVariants } from "./ui/Button";
import { usePathname } from "next/navigation";
import { NavSideLink } from "@/types";

interface SideBarItemProps
  extends React.HTMLAttributes<HTMLAnchorElement>,
    NavSideLink {}

const SideBarItem: FC<SideBarItemProps> = ({
  href,
  name,
  icon,
  className,
  ...props
}) => {
  const pathname = usePathname();
  const isActive =
    href === "/a" ? pathname === href : pathname.startsWith(href);
  const variant = isActive ? "secondary" : "ghost";

  const IconComponent = icon;

  return (
    <Link
      href={href}
      className={cn(
        buttonVariants({ className, variant }),
        "w-full justify-start",
      )}
      {...props}
    >
      <IconComponent className="mr-2 h-4 w-4 text-primary" />
      {name}
    </Link>
  );
};

export default SideBarItem;
