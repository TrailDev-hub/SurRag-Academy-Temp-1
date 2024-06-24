import About from "@/components/About";
import Footer from "@/components/Footer";
import { HeroHighlightDemo } from "@/components/Herosection";
import Studentreview from "@/components/Studentreview";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroHighlightDemo/>
      <About/>
      <Studentreview/>
      <Footer/>
    </div>
  );
}
