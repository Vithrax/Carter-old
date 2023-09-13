import { testimonialsWithAuthor } from "@/config/landing-page";
import Text from "../Text";
import { getRandomElementsFromArray } from "@/lib/utils";

const Testimonials = () => {
  const testimonials = getRandomElementsFromArray(
    testimonialsWithAuthor,
    7,
  ).sort((a, b) => b.text.length - a.text.length);

  //swap first and last elements
  const last = testimonials.pop();
  testimonials.unshift(last);

  return (
    <section
      id="testimonials"
      className="flex h-[100dvh] min-h-fit snap-center flex-col items-center justify-center gap-2"
    >
      <Text variant="h1">Testimonials</Text>
      <Text role="subtitle">We have countless satisfied users!</Text>
      <div className="grid max-w-7xl grid-cols-4 gap-2">
        {testimonials.map(({ author, text }, index) => {
          return (
            <article
              className={`rounded-md border border-border p-3 ${
                index === 1 ? "col-span-2" : ""
              }`}
              key={index}
            >
              <span className="italic">&quot;{text}&quot;</span>
              <div>
                <span className="text-right">- {author}</span>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
