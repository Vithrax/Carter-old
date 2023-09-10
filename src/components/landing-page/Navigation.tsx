import Link from "next/link";
import Logo from "../Logo";
import { buttonVariants } from "../ui/Button";
import { getUserAuth } from "@/lib/auth/utils";

const Navigation = async () => {
  const session = await getUserAuth();

  return (
    <header className="h-[7vh] border-b">
      <nav className="mx-auto flex h-full  max-w-7xl items-center justify-between px-4">
        <Logo />
        <div>{/* TODO: Nav links */}</div>
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
          <Link className={buttonVariants()} href="/app">
            Start
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
