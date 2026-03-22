import { cn } from "@/lib/utils"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export interface TestimonialAuthor {
  name: string
  handle: string
  avatar: string
}

export interface TestimonialCardProps {
  author: TestimonialAuthor
  text: string
  href?: string
  variant?: "dark" | "light"
  className?: string
}

export function TestimonialCard({
  author,
  text,
  href,
  variant = "dark",
  className,
}: TestimonialCardProps) {
  const isLight = variant === "light"
  const Card = href ? "a" : "div"

  return (
    <Card
      {...(href ? { href, target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "flex flex-col rounded-xl p-5 text-start sm:p-6",
        "max-w-[320px] sm:max-w-[320px]",
        "transition-all duration-300",
        isLight
          ? "border border-gray-200 bg-white shadow-sm hover:shadow-md"
          : "border border-white/[0.06] bg-gradient-to-b from-white/[0.04] to-white/[0.01] hover:from-white/[0.07] hover:to-white/[0.03]",
        className
      )}
    >
      <div className="flex items-center gap-3">
        <Avatar className={cn("h-11 w-11 border", isLight ? "border-gray-200" : "border-white/10")}>
          <AvatarImage src={author.avatar} alt={author.name} />
          <AvatarFallback className={cn(
            "text-sm font-semibold",
            isLight ? "bg-gray-100 text-gray-700" : "bg-forge-gray-800 text-white"
          )}>
            {author.name.charAt(0)}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col items-start">
          <h3 className={cn(
            "text-sm font-semibold leading-none",
            isLight ? "text-gray-900" : "text-white"
          )}>
            {author.name}
          </h3>
          <p className={cn(
            "mt-1 text-xs",
            isLight ? "text-gray-500" : "text-forge-gray-400"
          )}>
            {author.handle}
          </p>
        </div>
      </div>
      <p className={cn(
        "mt-4 text-sm leading-relaxed sm:text-[15px]",
        isLight ? "text-gray-600" : "text-forge-gray-400"
      )}>
        {text}
      </p>
    </Card>
  )
}

export default TestimonialCard
