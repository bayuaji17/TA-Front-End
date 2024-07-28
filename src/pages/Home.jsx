import { CTASection } from "../components/CTASection";
import { FeatureSection } from "../components/FeatureSection";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
export const Home = () => {
  return (
    <div>
      <HeroSection/>
      <FeatureSection/>
      <CTASection/>
      <Footer/>
    </div>
  );
};
