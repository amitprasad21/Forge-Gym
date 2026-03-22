"use client";

import Image from "next/image";

interface TrainerCardProps {
  name: string;
  role: string;
  bio: string;
  specialties: string[];
  image: string;
  certifications: string[];
}

export default function TrainerCard({
  name,
  role,
  bio,
  specialties,
  image,
  certifications,
}: TrainerCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl">
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

        {/* Info Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-5 transition-all duration-500">
          {/* Always visible */}
          <p className="text-sm font-medium text-forge-red">{role}</p>
          <h3 className="mt-1 text-xl font-bold text-white">{name}</h3>

          {/* Expandable on hover */}
          <div className="mt-0 max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:mt-3 group-hover:max-h-60 group-hover:opacity-100">
            <p className="text-sm leading-relaxed text-forge-gray-400">
              {bio}
            </p>

            {/* Specialties */}
            <div className="mt-3 flex flex-wrap gap-2">
              {specialties.map((specialty) => (
                <span
                  key={specialty}
                  className="rounded-full bg-forge-red/15 px-3 py-1 text-xs font-medium text-forge-red"
                >
                  {specialty}
                </span>
              ))}
            </div>

            {/* Certifications */}
            <div className="mt-3 flex flex-wrap gap-2">
              {certifications.map((cert) => (
                <span
                  key={cert}
                  className="text-xs text-forge-gray-500"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
