import AboutUs from "@/components/about";
import { HeroSection } from "@/components/hero-section";
import { aboutDetails } from "@/data/aboutDetails";
import { Suspense } from "react";

export default function AboutPage() {
  return (
    <div className="w-full bg-lime-100">
      <Suspense fallback={<div>Loading...</div>}>
        <HeroSection data={aboutDetails.hero} />
        <AboutUs
          title={aboutDetails?.aboutData?.title}
          paragraphs={aboutDetails?.aboutData?.paragraphs}
        />
      </Suspense>
    </div>
  );
}
