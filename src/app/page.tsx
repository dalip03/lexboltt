import Image from "next/image";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-white overflow-x-hidden overflow-y-hidden">
    <HeroSection/>
   </div>
  );
}
