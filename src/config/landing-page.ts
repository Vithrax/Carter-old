import { NavItem, FeatureCard } from "@/types";
import { faker } from "@faker-js/faker";
import {
  BadgeDollarSign,
  PersonStanding,
  LineChart,
  ShieldCheck,
  Gauge,
} from "lucide-react";

export const landingPageLinks: NavItem[] = [
  {
    section: "features",
    title: "Features",
  },
  {
    section: "testimonials",
    title: "Testimonials",
  },
  {
    section: "pricing",
    title: "Pricing",
  },
];

export const landingPageFeatures: FeatureCard[] = [
  {
    title: "Free forever",
    description: "You will never need to pay for anything here. EVER.",
    icon: BadgeDollarSign,
  },
  {
    title: "Blazingly fast",
    description: "Just few touches to get optimized list of products.",
    icon: Gauge,
  },
  {
    title: "Flexible",
    description: "Make it yours. Customize Cartapp to your own needs.",
    icon: PersonStanding,
  },
  {
    title: "Comprehensive",
    description: "Analyze your expenses, patterns and shopping habits.",
    icon: LineChart,
  },
  {
    title: "Secure",
    description: "You don't have to expose any personal information.",
    icon: ShieldCheck,
  },
  {
    title: "Easy to use",
    description: "Cartapp was designed to be as simple as possible.",
    icon: BadgeDollarSign,
  },
];

// ChatGPT :)
const testimonials = [
  {
    text: "Cartapp made budgeting a breeze. I've never been more organized in my financial life. It's a game-changer for anyone looking to save money and stay on top of their spending.",
  },
  {
    text: "Incredible speed! Cartapp helps me find deals in seconds, saving both time and money. It's my go-to shopping companion.",
  },
  {
    text: "Cartapp's personalized experience is remarkable. It adapts to my unique shopping needs, making every purchase a breeze.",
  },
  {
    text: "Cartapp's insights are mind-blowing. It knows my spending habits better than I do, providing valuable recommendations for smarter shopping.",
  },
  {
    text: "Cartapp ensures my data stays safe while making my shopping experience smoother. It's like having a trusted bodyguard for online shopping.",
  },
  {
    text: "Cartapp's simplicity and user-friendliness make it the easiest budgeting tool I've ever used. No more financial stress!",
  },
  {
    text: "I can't believe Cartapp is free. It's a real lifesaver for budget-conscious shoppers. I'm forever grateful.",
  },
  {
    text: "Cartapp transformed my shopping habits for the better. My wallet thanks me every day.",
  },
  {
    text: "With Cartapp, overspending is a thing of the past. It effortlessly keeps me in check.",
  },
  {
    text: "Cartapp's flexibility is incredible. It adapts to my shopping style, making every purchase enjoyable.",
  },
  {
    text: "Cartapp's speed impressed me. Finding deals is just a tap away, making my shopping trips efficient.",
  },
  {
    text: "Personalize your shopping experience with Cartapp. It's a game-changer that caters to your unique needs.",
  },
  {
    text: "Cartapp's insights into my expenses are astonishingly accurate, helping me make informed financial decisions.",
  },
  {
    text: "Cartapp prioritizes my security. It's like a shopping bodyguard, keeping my data safe and sound.",
  },
  {
    text: "I never knew budgeting could be this easy. Cartapp simplifies it all.",
  },
  {
    text: "Cartapp is a must-have for shopping. It's your trusty companion that ensures every purchase is a breeze.",
  },
  {
    text: "My shopping habits are transparent with Cartapp, providing valuable insights into my spending.",
  },
  {
    text: "Cartapp's flexibility matches my shopping mood every time. It's the perfect shopping assistant.",
  },
  {
    text: "Cartapp's speed is unmatched. It's the Flash of shopping apps, saving time and effort.",
  },
  {
    text: "Customize Cartapp to your heart's content. Make it yours and enjoy a personalized shopping experience.",
  },
  {
    text: "Cartapp's insights are a game-changer. It's like shopping with a financial genius by your side.",
  },
  {
    text: "Cartapp ensures my safety while I shop. It's my shopping guardian angel.",
  },
  {
    text: "Cartapp's simplicity is its superpower. It's shopping made easy, even for tech novices.",
  },
  {
    text: "Cartapp's value is priceless, yet it's free! I can't imagine shopping without it.",
  },
  {
    text: "Cartapp's control over my budget is remarkable. No more overspending, ever.",
  },
  {
    text: "Cartapp's flexibility is unmatched, adapting to my every shopping need.",
  },
  {
    text: "Cartapp's speed is astonishing, making shopping faster and more efficient.",
  },
  {
    text: "Cartapp's insights are pure gold. It's like having a personal financial advisor.",
  },
  {
    text: "Cartapp's security is top-notch, ensuring my peace of mind while shopping online.",
  },
  {
    text: "Cartapp's user-friendliness is second to none. It's the shopping app I'm hooked on!",
  },
];

export const testimonialsData = testimonials.map(({ text }) => {
  return {
    text,
    author: faker.person.fullName(),
    position: faker.person.jobTitle(),
  };
});

export const pricingData = [
  {
    name: "Starter",
    suggested: false,
    description: "Free tier available for everyone by default!",
    price: 0,
    features: ["All-access"],
  },
  {
    name: "Plus",
    suggested: true,
    description: "Free tier available for everyone by default!",
    price: 5,
    features: [
      "Everything from starter tier",
      "Access to our discord server",
      "Additional support",
    ],
  },
  {
    name: "Premium",
    suggested: false,
    description: "Free tier available for everyone by default!",
    price: 25,
    features: [
      "Everything from plus tier",
      "Smartphone widget (Android)",
      "Special badge on our discord server",
      "Free item from our merchandise shop",
      "Invite to ourconvention in Madrit",
    ],
  },
];
