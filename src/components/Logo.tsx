import { FC } from "react";
import { Playfair_Display } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";

const font = Playfair_Display({ subsets: ["latin"] });

interface LogoProps {
  className?: string;
  href?: string;
}

const Logo: FC<LogoProps> = ({ className, href = "/" }) => {
  return (
    <Link
      href={href}
      className={cn(
        font.className,
        className,
        "text-center text-3xl leading-7 tracking-tight underline decoration-primary underline-offset-2",
      )}
    >
      <span className="font-bold text-primary">Cart</span>
      <span className="font-light">app</span>
      <span className="text-primary">.</span>
    </Link>
  );
};

export default Logo;
