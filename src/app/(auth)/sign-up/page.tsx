import Logo from "@/components/Logo";
import Text from "@/components/Text";
import SignIn from "@/components/auth/SignIn";
import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Page = async () => {
  return (
    <main className="relative flex h-screen w-screen flex-col items-center justify-center bg-primary/5 pb-10">
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: "link" }),
          "absolute right-0 top-0",
        )}
      >
        Back to home
      </Link>
      <header className="flex flex-col items-center justify-center gap-5">
        <Logo />
        <Text variant="h1">Sign up</Text>
      </header>
      <SignIn />
      <p>
        Already a member?{" "}
        <Link
          href="/sign-in"
          className={buttonVariants({ variant: "link", size: "xs" })}
        >
          Sign in
        </Link>
      </p>
    </main>
  );
};

export default Page;
