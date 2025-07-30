import React from "react";
import Image, { StaticImageData } from "next/image";
import Container from "./container";

export default function HeroPortfolio({
  description,
  clientLogos,
}: {
  description: string;
  clientLogos: StaticImageData[];
}) {
  return (
    <section className="w-full py-16 lg:py-32 text-center">
      <Container>
        <div className="font-serif text-[clamp(2rem,5vw,4.5rem)] font-extralight mx-auto leading-tight mb-20">
          {description}
        </div>
        <div className="flex flex-wrap justify-center gap-y-10 gap-x-12 max-w-5xl mx-auto">
          {clientLogos.map((logo, i) => (
            <div
              key={i}
              className="w-[120px] h-10 flex items-center justify-center"
            >
              <Image
                src={logo}
                alt={`Client logo ${i + 1}`}
                className="object-contain w-full h-full"
                width={120}
                height={40}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
