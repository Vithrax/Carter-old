import Features from "@/components/landing-page/Features";
import Footer from "@/components/landing-page/Footer";
import HeroPage from "@/components/landing-page/Hero";
import Pricing from "@/components/landing-page/Pricing";
import Testimonials from "@/components/landing-page/Testimonials";

export default function Home() {
  return (
    <main className="max-h-screen snap-y overflow-auto scroll-smooth">
      <HeroPage />
      <Features />
      <Testimonials />
      <Pricing />
      <Footer />
    </main>
  );
}
