import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "@/components/Providers";
import { Toaster } from "@/components/ui/Toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cartapp | Your Shopping assistant",
  description:
    "Cartapp is a free for use, shopping assistant that enhances your spending efficiency",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="h-screen antialiased">{children}</div>
        </Providers>
        <Toaster />
      </body>
    </html>
  );
}
