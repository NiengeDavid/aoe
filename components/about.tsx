import Container from "./container";

type AboutUsProps = {
  title: string;
  paragraphs: {
    text: string;
    className?: string;
  }[];
};

export default function AboutUs({ title, paragraphs }: AboutUsProps) {
  return (
    <section className="bg-lime-100 w-full py-20 px-4 md:px-8 lg:px-20 text-black">
      <Container className="max-w-6xl mx-auto space-y-12">
        <h2 className="text-5xl md:text-6xl font-serif italic">{title}</h2>

        {paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className={`font-serif ${paragraph.className || "text-lg md:text-xl font-extralight max-w-4xl mx-auto"}`}
          >
            {paragraph.text}
          </p>
        ))}
      </Container>
    </section>
  );
}
