import ProductHero from "../components/productComponents/ProductHero";
import FAQ from "../components/productComponents/FAQ";
import ProductTalkUs from "../components/productComponents/ProductTalkUs";
import FeaturesTabsSection from "../components/FeaturesTabsSection";
import CoreCapabilitiesnew from "../components/productComponents/CoreCapabilitiesnew";

function page() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-white overflow-x-hidden overflow-y-hidden  mb-10 w-full mx-auto">
      <ProductHero />

      <CoreCapabilitiesnew />
      <FeaturesTabsSection />

      <ProductTalkUs />
      <FAQ />
    </div>
  );
}

export default page;
