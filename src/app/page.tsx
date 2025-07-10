import Features from "@/components/Features";
import HeroSection from "@/components/HeroSection";
import PricingPlans from "@/components/PricingPlan";
import Tabs from "@/components/Tabs";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Tabs />
      <Features />
      <PricingPlans/>
    </div>
  );
}
