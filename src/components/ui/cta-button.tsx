import Link from "next/link";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
}

const variantStyles = {
  primary:
    "bg-forge-red text-white hover:bg-forge-red-light hover:shadow-lg hover:shadow-forge-red/25",
  secondary:
    "bg-white/10 text-white hover:bg-white/20 border border-white/20",
  outline:
    "bg-transparent border-2 border-forge-red text-forge-red hover:bg-forge-red hover:text-white",
};

const sizeStyles = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function CTAButton({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  onClick,
}: CTAButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-lg font-bold uppercase tracking-wide transition-all duration-300";

  const classes = cn(baseStyles, variantStyles[variant], sizeStyles[size], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
