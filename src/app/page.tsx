import About from "@/components/About";
import { HeroHighlightDemo } from "@/components/Herosection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroHighlightDemo/>
      <About/>
    </div>
  );
}
