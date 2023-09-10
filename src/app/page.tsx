import Features from "@/components/landing-page/Features";
import HeroPage from "@/components/landing-page/Hero";

export default function Home() {
  return (
    <main className="max-h-screen snap-y snap-mandatory overflow-auto">
      <HeroPage />
      <Features />
    </main>
  );
}
