import { FC } from "react";
import { ThemeProvider } from "./ThemeProvider";
import TrpcProvider from "@/lib/trpc/Provider";
import NextAuthProvider from "@/lib/auth/Provider";

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <TrpcProvider>
        <NextAuthProvider>{children}</NextAuthProvider>
      </TrpcProvider>
    </ThemeProvider>
  );
};

export default Providers;
