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
  className?: string
}

export function TestimonialCard({
  author,
  text,
  href,
  className,
}: TestimonialCardProps) {
  const Card = href ? "a" : "div"

  return (
    <Card
      {...(href ? { href, target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "flex flex-col rounded-xl border border-white/[0.06]",
        "bg-gradient-to-b from-white/[0.04] to-white/[0.01]",
        "p-5 text-start sm:p-6",
        "hover:from-white/[0.07] hover:to-white/[0.03]",
        "max-w-[320px] sm:max-w-[320px]",
        "transition-colors duration-300",
        className
      )}
    >
      <div className="flex items-center gap-3">
        <Avatar className="h-11 w-11 border border-white/10">
          <AvatarImage src={author.avatar} alt={author.name} />
          <AvatarFallback className="bg-forge-gray-800 text-sm font-semibold text-white">
            {author.name.charAt(0)}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col items-start">
          <h3 className="text-sm font-semibold leading-none text-white">
            {author.name}
          </h3>
          <p className="mt-1 text-xs text-forge-gray-400">
            {author.handle}
          </p>
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-forge-gray-400 sm:text-[15px]">
        {text}
      </p>
    </Card>
  )
}

/* Keep default export for backward compat if needed */
export default TestimonialCard
