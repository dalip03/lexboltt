import HeroSection from "./components/HeroSection";
import ProcessStepsSection from "./components/ProcessStepsSection";
import FeaturesTabsSection from "./components/FeaturesTabsSection";
import TestimonialSection from "./components/TestimonialSection";
import ComplianceHeroBanner from "./components/ComplianceHeroBanner";

export default function Home() {
  return (
<div className="flex flex-col items-center min-h-screen bg-white overflow-x-hidden overflow-y-hidden mb-10 w-full px-4 mx-auto">
    <HeroSection/>
    <ProcessStepsSection/>
    <FeaturesTabsSection/>
    <TestimonialSection/>
    <ComplianceHeroBanner/>
   </div>
  );
}
