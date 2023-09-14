import { Github, Linkedin, Facebook, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import Text from "../Text";
import { buttonVariants } from "../ui/Button";

const Footer = () => {
  return (
    <section
      id="footer"
      className="grid h-[100dvh] min-h-fit snap-center grid-rows-[1fr,auto]"
    >
      <div className="flex flex-col items-center justify-center gap-4">
        <Text variant="h1">Boost your efficency. Join us now.</Text>
        <Text role="subtitle" className="mb-5 text-center">
          Experience all the benefits of using Cartapp yourself.
        </Text>
        <Link href="/sign-in" className={buttonVariants({ size: "lg" })}>
          Start for FREE
        </Link>
      </div>
      <footer className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-8">
          <span>&copy;2023 Cartapp, Inc. All rights reserved</span>
          <ul className="flex items-center gap-3">
            <li>
              <Link href="/">
                <Github
                  className="h-8 w-8 rounded-full p-1 hover:bg-muted-foreground"
                  strokeWidth={1.5}
                />
              </Link>
            </li>
            <li>
              <Link href="/">
                <Linkedin
                  className="h-8 w-8 rounded-full p-1 hover:bg-muted-foreground"
                  strokeWidth={1.5}
                />
              </Link>
            </li>
            <li>
              <Link href="/">
                <Facebook
                  className="h-8 w-8 rounded-full p-1 hover:bg-muted-foreground"
                  strokeWidth={1.5}
                />
              </Link>
            </li>
            <li>
              <Link href="/">
                <Twitter
                  className="h-8 w-8 rounded-full p-1 hover:bg-muted-foreground"
                  strokeWidth={1.5}
                />
              </Link>
            </li>
            <li>
              <Link href="/">
                <Youtube
                  className="h-9 w-9 rounded-full p-1 hover:bg-muted-foreground"
                  strokeWidth={1.5}
                />
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
