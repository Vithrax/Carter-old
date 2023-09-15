import Link from "next/link";
import Logo from "../Logo";
import { buttonVariants } from "../ui/Button";
import { getUserAuth } from "@/lib/auth/utils";
import { landingPageLinks } from "@/config/landing-page";

const Navigation = async () => {
  const session = await getUserAuth();

  return (
    <header className="h-16 border-b">
      <nav className="mx-auto flex h-full max-w-7xl items-center justify-between px-4">
        <Logo />
        <ul className="flex gap-4">
          {landingPageLinks.map(({ section, title }) => {
            return (
              <li key={title}>
                <Link href={`#${section}`}>{title}</Link>
              </li>
            );
          })}
        </ul>
        {!session ? (
          <div className="space-x-2">
            <Link
              href="/sign-in"
              className={buttonVariants({ variant: "ghost", size: "sm" })}
            >
              Login
            </Link>
            <Link href="/sign-up" className={buttonVariants({ size: "sm" })}>
              Sign up
            </Link>
          </div>
        ) : (
          <Link className={buttonVariants()} href="/a">
            Start
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
