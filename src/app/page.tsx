import Features from "@/components/landing-page/Features";
import HeroPage from "@/components/landing-page/Hero";
import Testimonials from "@/components/landing-page/Testimonials";

export default function Home() {
  return (
    <main className="max-h-screen snap-y snap-mandatory overflow-auto scroll-smooth">
      <HeroPage />
      <Features />
      <Testimonials />
    </main>
  );
}
