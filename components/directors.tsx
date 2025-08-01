"use client";

import { useState, useEffect } from "react";
import Container from "./container";

import { type Directors } from "@/sanity/lib/sanity.queries";
import { getAllShortFilm, getClient } from "@/sanity/lib/sanity.client";
import { readToken } from "@/sanity/lib/sanity.api";
import { toast } from "sonner";

type ProjectLabel = { label: string; value: string };

type LargeProjectCardProps = {
  title: string;
  description: string;
  videoUrl: string;
  labels: ProjectLabel[];
};

// Demo data for mapping (replace with your sanity-mapped data)
const demoProjects: LargeProjectCardProps[] = [
  {
    title: "Urban Fitness IG Reel",
    description:
      "A dynamic showcase of urban workouts and energy, crafted for Instagram Reels. Highlighting both movement and mood, shot on location.",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // Replace with your video url from sanity
    labels: [
      { label: "Videographer", value: "Isaac Gar" },
      { label: "Editor", value: "Alaba Tee" },
      { label: "Producer", value: "Lena Smirnova" },
      { label: "Year", value: "2025" },
    ],
  },
  // Add more demo cards if needed
];

export default function DirectorsCard() {
  const client = getClient({ token: readToken });
  const [films, setFilms] = useState<Directors[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchShortFilms = async () => {
      setIsLoading(true);
      try {
        const filmData = await getAllShortFilm(client);
        setFilms(filmData);
        console.log("Film Data:", filmData);
      } catch (error) {
        toast("Network Error", {
          description:
            "Error fetching Short Film data; kindly check your internet connection.",
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchShortFilms();
  }, []);

  return (
    <section className="bg-white py-24 w-full">
      <Container>
        <div className="flex flex-col gap-12">
          {films?.map((project, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row justify-center mx-auto bg-white rounded-3xl shadow-lg overflow-hidden outline"
            >
              {/* Details */}
              <div className="bg-lime-50 flex-1 flex flex-col justify-center px-8 py-8 md:py-12 md:px-12">
                <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4 text-left">
                  {project?.title}
                </h2>
                <p className="max-w-xl text-lg md:text-xl text-gray-700 mb-6 text-left">
                  {project.description}
                </p>
                <div className="flex flex-col gap-2">
                  {project?.labels?.map((item, i) => (
                    <div key={i} className="flex text-base md:text-lg">
                      <span className="font-semibold mr-2">{item.label}:</span>
                      <span>{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Video */}
              <div className="md:w-[340px] lg:w-[400px] flex-shrink-0 flex items-center justify-center bg-black">
                <video
                  src={project?.video?.url}
                  controls
                  className="w-full h-[600px] object-cover"
                  style={{
                    aspectRatio: "9/16",
                    background: "#000",
                  }}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
