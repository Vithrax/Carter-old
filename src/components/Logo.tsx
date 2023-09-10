import { FC } from "react";
import { Playfair_Display } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";

const font = Playfair_Display({ subsets: ["latin"] });

interface LogoProps {
  className?: string;
}

const Logo: FC<LogoProps> = ({ className }) => {
  return (
    <Link
      href="/"
      className={cn(
        font.className,
        className,
        "text-3xl tracking-tight underline decoration-primary underline-offset-2",
      )}
    >
      <span className="font-bold text-primary">Cart</span>
      <span className="font-light">app</span>
      <span className="text-primary">.</span>
    </Link>
  );
};

export default Logo;
