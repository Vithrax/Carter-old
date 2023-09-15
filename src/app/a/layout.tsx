import Logo from "@/components/Logo";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/Button";
import { checkAuth } from "@/lib/auth/utils";
import { Bell, ShoppingBag } from "lucide-react";
import Link from "next/link";

const layout = async ({ children }: { children: React.ReactNode }) => {
  // await checkAuth();

  return (
    <div className="flex h-screen w-screen flex-col bg-white dark:bg-zinc-900">
      <nav className="flex items-center justify-between border-b border-zinc-200 px-6 py-4 dark:border-zinc-800">
        <div className="flex items-center gap-2">
          <ShoppingBag className="mt-1 h-7 w-7" />
          <Logo href="/a" />
        </div>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Button size="icon" variant="ghost">
            <Bell className="h-[1.2rem] w-[1.2rem]" />
            <span className="sr-only">View notifications</span>
          </Button>
        </div>
      </nav>
      <div className="flex flex-1 overflow-hidden">
        <aside className="w-64 overflow-auto border-r border-zinc-200 dark:border-zinc-800">
          <nav className="flex h-full flex-col px-4">
            <h2 className="my-4 text-lg font-semibold">Categories</h2>
            <Button variant="ghost" className="flex justify-start">
              Products
            </Button>
            <Button variant="ghost" className="flex justify-start">
              Recipies
            </Button>
            <h2 className="my-4 text-lg font-semibold">Categories</h2>
            <Button variant="ghost" className="mb-4 mt-auto flex justify-start">
              My account
            </Button>
          </nav>
        </aside>
        <main className="flex-1 overflow-auto p-4">{children}</main>
      </div>
      <footer className="flex items-center justify-between border-t border-zinc-200 px-6 py-4 dark:border-zinc-800">
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          © 2023 Cartapp Inc.
        </p>
        <nav className="flex items-center space-x-4">
          <Link
            className="text-sm text-zinc-500 dark:text-zinc-400"
            href="/terms"
          >
            Terms
          </Link>
          <Link
            className="text-sm text-zinc-500 dark:text-zinc-400"
            href="/privacy"
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
};

export default layout;
