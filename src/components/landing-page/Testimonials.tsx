import { testimonialsData } from "@/config/landing-page";
import { getRandomElementsFromArray } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/Avatar";
import Text from "../Text";

const Testimonials = () => {
  const testimonials = getRandomElementsFromArray(testimonialsData, 6);

  return (
    <section
      id="testimonials"
      className="flex h-[100dvh] min-h-fit snap-center flex-col items-center justify-center gap-4"
    >
      <Text variant="h1">Testimonials</Text>
      <Text role="subtitle" className="text-center">
        We have countless satisfied customers! Check what they think about
        Carter
      </Text>
      <div className="grid max-w-7xl grid-cols-3 gap-4 px-4">
        {testimonials.map(({ author, text, position }, index) => {
          const initials = author
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase())
            .join();

          return (
            <article
              className={`flex flex-col justify-between gap-4 rounded-md bg-destructive-foreground p-6 shadow-sm dark:bg-primary/5`}
              key={index}
            >
              <span className="italic">&quot;{text}&quot;</span>
              <div className="flex gap-2">
                <Avatar>
                  <AvatarImage
                    src={`https://i.pravatar.cc/50?img=${4 * index}`}
                  />
                  <AvatarFallback>{initials}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="font-semibold">{author}</span>
                  <span className="text-sm">{position}</span>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
