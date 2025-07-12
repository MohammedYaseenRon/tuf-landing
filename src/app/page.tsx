import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Frequently from "@/components/Frequently";
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
      <Frequently />
      <Footer />
    </div>
  );
}
