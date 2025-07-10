import Features from "@/components/Features";
import HeroSection from "@/components/HeroSection";
import PricingPlans from "@/components/PricingPlan";
import Tabs from "@/components/Tabs";
import Testimonals from "@/components/Testimonals";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Tabs />
      <Features />
      <PricingPlans/>
      <Testimonals />
    </div>
  );
}
