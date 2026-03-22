import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  tagline?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "dark" | "light";
}

export default function SectionHeading({
  tagline,
  title,
  description,
  align = "center",
  theme = "dark",
}: SectionHeadingProps) {
  const titleParts = title.split("\n");
  const isLight = theme === "light";

  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center"
      )}
    >
      {tagline && (
        <div
          className={cn(
            "mb-4 flex items-center gap-3",
            align === "center" && "justify-center"
          )}
        >
          <span className="h-px w-8 bg-forge-red" />
          <span className="text-sm font-semibold uppercase tracking-widest text-forge-red">
            {tagline}
          </span>
          <span className="h-px w-8 bg-forge-red" />
        </div>
      )}

      <h2
        className={cn(
          "text-3xl font-extrabold uppercase md:text-4xl lg:text-5xl",
          isLight ? "text-forge-black" : "text-white"
        )}
      >
        {titleParts.map((part, index) => (
          <span key={index}>
            {part}
            {index < titleParts.length - 1 && <br />}
          </span>
        ))}
      </h2>

      {description && (
        <p
          className={cn(
            "mt-4 text-lg",
            isLight ? "text-forge-gray-500" : "text-forge-gray-400",
            align === "center" && "mx-auto max-w-2xl"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
