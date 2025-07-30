import Image from "next/image";

interface HeroData {
  heroText?: string;
  heroSubtext?: string;
  heroImage?: string;
}

interface HeroSectionProps {
  data?: HeroData;
}

const studio = "/assets/studio2.png";

export function HeroSection({ data }: HeroSectionProps) {
  const heroText = data?.heroText || "If you're not smiling,";
  const heroSubtext = data?.heroSubtext || "we're not done";

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={studio}
          alt="Photography Studio Setup"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center px-4 sm:px-6 lg:px-8">
          <h1 className="hero-text font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light italic text-white leading-tight">
            {heroText}
            <br />
            <span className="block">{heroSubtext}</span>
          </h1>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-36 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
