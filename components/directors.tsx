"use client";

import { useState, useEffect } from "react";
import Container from "./container";
import { type Directors } from "@/sanity/lib/sanity.queries";
import { getAllShortFilm, getClient } from "@/sanity/lib/sanity.client";
import { readToken } from "@/sanity/lib/sanity.api";
import { toast } from "sonner";

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
          {films?.map((project, idx) => {
            const isEvenIndex = idx % 2 === 0;

            return (
              <div
                key={idx}
                className={`flex flex-col ${
                  isEvenIndex ? "md:flex-row-reverse" : "md:flex-row"
                } justify-center mx-auto bg-white rounded-3xl shadow-lg overflow-hidden`}
              >
                {/* Video - ALWAYS FIRST (mobile and desktop) */}
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

                {/* Details - ALWAYS SECOND (mobile and desktop) */}
                <div className="bg-lime-50 flex-1 flex flex-col justify-center px-8 py-8 md:py-12 md:px-12">
                  <h2 className="max-w-xl font-serif text-3xl md:text-4xl font-semibold mb-4 text-left">
                    {project?.title}
                  </h2>
                  <p className="max-w-xl text-lg md:text-xl text-gray-700 mb-6 text-left">
                    {project.description}
                  </p>
                  <div className="max-w-xl flex flex-col gap-2">
                    {project?.labels?.map((item, i) => (
                      <div key={i} className="flex text-base md:text-lg">
                        <span className="font-semibold mr-2">
                          {item.label}:
                        </span>
                        <span>{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
