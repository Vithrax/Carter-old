import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

const textVariants = cva("", {
  variants: {
    variant: {
      h1: "font-heading max-w-6xl text-3xl font-bold sm:text-5xl md:text-6xl",
      h2: "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0",
      h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
      h4: "scroll-m-20 text-xl font-semibold tracking-tight",
      p: "leading-7 [&:not(:first-child)]:mt-6",
    },
    role: {
      subtitle:
        "max-w-2xl leading-normal text-muted-foreground sm:text-xl sm:leading-8 [&:not(:first-child)]:mt-0",
    },
  },
});

interface TextProps extends React.HtmlHTMLAttributes<HTMLParagraphElement> {
  variant?: Exclude<VariantProps<typeof textVariants>["variant"], null>;
  role?: Exclude<VariantProps<typeof textVariants>["role"], null>;
}

const Text = forwardRef<HTMLParagraphElement, TextProps>(
  ({ variant = "p", role, className, children, ...props }, ref) => {
    const Comp = variant;

    return (
      <Comp
        ref={ref}
        className={cn(textVariants({ variant, role }), className)}
        {...props}
      >
        {children}
      </Comp>
    );
  },
);
Text.displayName = "Text";

export default Text;
