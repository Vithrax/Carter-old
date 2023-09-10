import { ThemeToggle } from "@/components/ThemeToggle";
import SignIn from "@/components/auth/SignIn";

export default function Home() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center p-2 text-center">
      <h1 className="text-3xl font-bold tracking-tight text-primary">
        Achieve full typesafety with T3++ stack
      </h1>
      <p className="text-muted-foreground">
        Typescript, Tailwind, Prisma, Next-auth, tRCP, Shadcn/ui
      </p>
      <div className="mt-10 rounded-md border border-border p-4 text-center">
        <h2 className="mb-2 text-lg font-medium leading-6">Next Auth</h2>
        <SignIn />
      </div>

      <div className="fixed top-10">
        <ThemeToggle />
      </div>
    </div>
  );
}
