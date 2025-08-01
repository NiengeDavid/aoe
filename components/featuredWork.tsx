"use client";

import Masonry from "react-masonry-css";
import Image, { StaticImageData } from "next/image";
import Container from "./container";
import { Work } from "@/sanity/lib/sanity.queries";

type FeaturedWorksProps = {
  sectionTitle: string;
  projects: Work[];
};

const breakpointColumnsObj = {
  default: 5,
  1280: 3,
  1024: 2,
  768: 2,
  0: 1,
};

export default function FeaturedWorks({
  sectionTitle,
  projects,
}: FeaturedWorksProps) {
  return (
    <section className="w-full px-4 py-16 mx-auto">
      <Container>
        <h2 className="scroll-m-20 mb-10 border-b pb-2 text-5xl text-start font-serif italic font-normal tracking-tight first:mt-0 md:border-none">
          {sectionTitle}
        </h2>
        {projects.map((project, idx) => (
          <div className="mb-20" key={idx}>
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="flex w-full gap-8"
              columnClassName="masonry-column"
            >
              {project.images.map((img, i) => (
                <div key={i} className="mb-8 rounded-2xl overflow-hidden">
                  {typeof img === "string" ? (
                  <img
                    src={img}
                    alt="Project Image"
                    className="object-cover rounded-2xl"
                    loading="lazy"
                    style={{ width: "auto", height: "auto" }}
                  />
                  ) : (
                  <Image
                    src={img.url}
                    alt={img.alt || "Project Image"}
                    width={img.width || 800} // Default width
                    height={img.height || 600} // Default height
                    className="object-cover rounded-2xl"
                  />
                  )}
                </div>
              ))}
            </Masonry>
            <div className="mt-12 flex flex-col md:flex-row md:justify-between">
              <div className="md:w-2/3">
                <h3 className="font-serif text-3xl md:text-4xl font-normal mb-4 text-left">
                  {project.title.main}
                  {project.title.italic && (
                    <>
                      {" "}
                      <span className="italic">{project.title.italic}</span>
                    </>
                  )}
                </h3>
                <p className="text-lg md:text-xl font-light text-left">
                  {project.description}
                </p>
              </div>
              <div className="md:w-1/3 flex md:justify-end mt-10 md:mt-0">
                <div className="text-sm text-left space-y-2">
                  {project.details.map((detail, i) => (
                    <div key={i}>
                      <span className="font-semibold">{detail.label}:</span>{" "}
                      {detail.value}
                    </div>
                  ))}
                  {project.team.length > 0 && (
                    <div className="mt-4">
                      {project.team.map((member, i) => (
                        <div key={i}>
                          <span className="font-semibold">{member.role}:</span>{" "}
                          {member.name}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
}
