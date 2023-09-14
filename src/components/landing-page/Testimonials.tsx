import { testimonialsWithAuthor } from "@/config/landing-page";
import { getRandomElementsFromArray } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Text from "../Text";

const Testimonials = () => {
  const testimonials = getRandomElementsFromArray(testimonialsWithAuthor, 6);

  return (
    <section
      id="testimonials"
      className="flex h-[100dvh] min-h-fit snap-center flex-col items-center justify-center gap-2"
    >
      <Text variant="h1">Testimonials</Text>
      <Text role="subtitle">We have countless satisfied users!</Text>
      <div className="grid max-w-7xl grid-cols-3 gap-2 px-4">
        {testimonials.map(({ author, text }, index) => {
          const initials = author
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase())
            .join();

          return (
            <article
              className={`flex flex-col justify-between gap-4 rounded-md bg-destructive-foreground p-6 shadow-sm`}
              key={index}
            >
              <span className="italic">&quot;{text}&quot;</span>
              <Avatar>
                <AvatarImage
                  src={`https://i.pravatar.cc/50?img=${4 * index}`}
                />
                <AvatarFallback>{initials}</AvatarFallback>
              </Avatar>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
