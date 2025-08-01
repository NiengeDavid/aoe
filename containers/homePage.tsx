"use client";

import { useState, useEffect } from "react";

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

// Project static images
import wed1 from "@/public/assets/projects/wed1.jpeg";
import wed2 from "@/public/assets/projects/wed2.jpeg";
import wed3 from "@/public/assets/projects/wed3.jpeg";
import wed4 from "@/public/assets/projects/wed4.jpeg";
import wed5 from "@/public/assets/projects/wed5.jpeg";
import wed6 from "@/public/assets/projects/wed6.jpeg";
import wed7 from "@/public/assets/projects/wed7.jpeg";
import wed8 from "@/public/assets/projects/wed8.jpeg";
import wed11 from "@/public/assets/projects/wed11.png";
import wed12 from "@/public/assets/projects/wed12.png";
import wed9 from "@/public/assets/projects/wed9.png";
import wed10 from "@/public/assets/projects/wed10.png";
import wed13 from "@/public/assets/projects/wed13.png";
import { set } from "sanity";

const clientLogos = [
  amazon,
  netflix,
  yt,
  cfm,
  // ...other logo imports
];

const projects = [
  {
    images: [wed1, wed13, wed9, wed6, wed10, wed5, wed2, wed12, wed7, wed4],
    title: { main: "Wedding Photo Shoot ", italic: "for the Olutayos" },
    description:
      "We partnered with the Olutayos to capture the magic of their special day. From heartfelt moments during the ceremony to the lively celebration at the reception, every shot tells a story of love, joy, and togetherness. Our team worked tirelessly to ensure that every detail, from the bride's radiant smile to the intricate decorations, was beautifully preserved.",
    details: [
      { label: "Client", value: "The Olutayos" },
      { label: "Year", value: "2024" },
    ],
    team: [
      { role: "Producer", name: "AOE Studios" },
      { role: "Creative Producer", name: "Alaba Olaleye" },
      { role: "Photography and Post-Production", name: "Tony Oshimole" },
      { role: "Art Director", name: "Andy Turnbull" },
      { role: "Photography Director", name: "Eileen W. Cho" },
      { role: "Light Assistant", name: "Sebastian Klener" },
      { role: "Post-Production", name: "Lena Smirnova" },
    ],
  },
  // ...more projects
];

export default function HomePage() {
  //const data = await getHomePageData();
  const client = getClient({ token: readToken });
  const [works, setWorks] = useState<Work[]>([]);
  const [isLoading, setIsLoading] = useState(false);

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
        <FeaturedWorks sectionTitle="Featured Works" projects={works} />
      </Suspense>
    </div>
  );
}
