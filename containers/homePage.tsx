"use client";

import { useState, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

import { Suspense } from "react";
import { HeroSection } from "@/components/hero-section";
import HeroPortfolio from "@/components/hero-portfolio";
import { homeDetails } from "@/data/homeDetails";
import FeaturedWorks from "@/components/featuredWork";

import { getAllWorks, getClient } from "@/sanity/lib/sanity.client";
import { type Work } from "@/sanity/lib/sanity.queries";
import { readToken } from "@/sanity/lib/sanity.api";
import { toast } from "sonner";

import amazon from "@/public/assets/logos/amazon.png";
import netflix from "@/public/assets/logos/netflix.png";
import yt from "@/public/assets/logos/yt.png";
import cfm from "@/public/assets/logos/cfm.png";

const clientLogos = [
  amazon,
  netflix,
  yt,
  cfm,
  // ...other logo imports
];

export default function HomePage() {
  //const data = await getHomePageData();
  const client = getClient({ token: readToken });
  const [works, setWorks] = useState<Work[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchWorks = async () => {
      setIsLoading(true);
      try {
        const worksData = await getAllWorks(client);
        setWorks(worksData);
        console.log("works Data:", worksData);
      } catch (error) {
        toast("Network Error", {
          description:
            "Error fetching Featured Works data; kindly check your internet connection.",
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchWorks();
  }, []);

  useEffect(() => {
    // Listen for both /?scrollTo=works and /#works
    const scrollToWorks = () => {
      // `/works` redirect lands on `/?scrollTo=works`
      if (searchParams.get("scrollTo") === "works") {
        const worksSection = document.getElementById("works");
        if (worksSection) {
          worksSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
      // If someone lands on /#works directly
      if (typeof window !== "undefined" && window.location.hash === "#works") {
        const worksSection = document.getElementById("works");
        if (worksSection) {
          worksSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    };

    // Delay to ensure the section is rendered
    setTimeout(scrollToWorks, 500);

    // Optional: rerun when path/search changes (covers client-side navigation)
  }, [pathname, searchParams]);

  if (isLoading) {
    return (
      <div className="text-center text-primary font-serif text-2xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Suspense fallback={<div>Loading...</div>}>
        <HeroSection data={homeDetails.hero} />
        <HeroPortfolio
          description="We are an award-winning Abuja/Nigeria-based creative production specializing in short video and photography. Our founders, Alaba and Oheha Olaleye, infuse every project with their distinctive style and passion. Startups, brands, and marketing agencies can rely on us to stand out and take the lead."
          clientLogos={clientLogos}
        />
        <FeaturedWorks
          id="works"
          sectionTitle="Featured Works"
          projects={works}
        />
      </Suspense>
    </div>
  );
}
