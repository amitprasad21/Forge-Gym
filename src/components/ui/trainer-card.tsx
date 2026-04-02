"use client";

import Image from "next/image";

interface TrainerSocials {
  instagram?: string;
  facebook?: string;
  threads?: string;
}

interface TrainerCardProps {
  name: string;
  role: string;
  bio: string;
  specialties: string[];
  image: string;
  certifications: string[];
  socials?: TrainerSocials;
}

export default function TrainerCard({
  name,
  role,
  bio,
  specialties,
  image,
  certifications,
  socials,
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

            {/* Social Links */}
            {socials && (
              <div className="mt-4 flex items-center gap-3">
                {socials.instagram && (
                  <a
                    href={socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${name} on Instagram`}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-forge-gray-300 transition-all duration-300 hover:bg-forge-red/20 hover:text-forge-red hover:scale-110"
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>
                )}
                {socials.facebook && (
                  <a
                    href={socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${name} on Facebook`}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-forge-gray-300 transition-all duration-300 hover:bg-forge-red/20 hover:text-forge-red hover:scale-110"
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                )}
                {socials.threads && (
                  <a
                    href={socials.threads}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${name} on Threads`}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-forge-gray-300 transition-all duration-300 hover:bg-forge-red/20 hover:text-forge-red hover:scale-110"
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.59 12c.025 3.086.718 5.496 2.057 7.164 1.432 1.781 3.632 2.695 6.54 2.717 2.227-.017 4.07-.55 5.478-1.587 1.2-.884 1.996-2.074 2.365-3.54a4.667 4.667 0 01-2.542-.736 4.79 4.79 0 01-1.982-2.56c-.166-.505-.249-1.046-.249-1.61 0-1.318.476-2.457 1.418-3.39.898-.888 2.04-1.398 3.395-1.517a7.326 7.326 0 00-.122-1.298l2.006-.397c.162.816.245 1.67.245 2.544 0 .146-.003.291-.008.436 1.305.727 2.17 1.903 2.578 3.51.26 1.025.201 2.145-.174 3.333-.602 1.904-1.673 3.396-3.184 4.432C17.802 23.199 15.262 23.98 12.186 24zm3.93-8.157c.199.607.585 1.078 1.15 1.404.482.278 1.03.42 1.63.42.178 0 .357-.015.533-.046.076-.592.076-1.19 0-1.783-.2-.76-.617-1.328-1.242-1.688a2.823 2.823 0 00-.526-.24c-.67.104-1.2.396-1.576.87-.318.4-.478.87-.478 1.398 0 .174.019.347.056.515l.452-.85z" />
                    </svg>
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
