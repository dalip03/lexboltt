import HeroSection from "./components/HeroSection";
import ProcessStepsSection from "./components/ProcessStepsSection";
import TestimonialSection from "./components/TestimonialSection";
import ComplianceHeroBanner from "./components/ComplianceHeroBanner";
import CookieConsent from "./components/cookies/CookieConsent";
import Testimonial from "./components/Testimonial";

export default function Home() {
  return (
<div className="flex flex-col items-center min-h-screen bg-white overflow-x-hidden overflow-y-hidden mb-10 w-full px-4 mx-auto">
    <HeroSection/>
    <ProcessStepsSection/>
    {/* <TestimonialSection/> */}
    <Testimonial/>
    <ComplianceHeroBanner/>
      <CookieConsent />
   </div>
  );
}
