"use client";

import Image from "next/image";

interface ProgramCardProps {
  title: string;
  description: string;
  image: string;
  features: string[];
  level: string;
  duration: string;
  id: string;
}

export default function ProgramCard({
  title,
  description,
  image,
  features,
  level,
  duration,
  id,
}: ProgramCardProps) {
  return (
    <div
      className="group overflow-hidden rounded-xl bg-forge-gray-900 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/30"
      id={id}
    >
      {/* Image Container */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forge-gray-900 via-transparent to-transparent" />

        {/* Level Badge */}
        <span className="absolute top-4 right-4 rounded-full bg-forge-red/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
          {level}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-forge-gray-400">
          {description}
        </p>

        {/* Features */}
        <ul className="mt-4 space-y-2">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-sm text-forge-gray-400">
              <svg
                className="h-4 w-4 shrink-0 text-forge-red"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>

        {/* Duration Badge */}
        <div className="mt-4 flex items-center gap-2">
          <svg
            className="h-4 w-4 text-forge-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="text-sm font-medium text-forge-gray-500">
            {duration}
          </span>
        </div>
      </div>
    </div>
  );
}
