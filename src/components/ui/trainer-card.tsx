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
                    <svg className="h-4 w-4" fill="currentColor" viewBox="45 35 110 150">
                      <path d="M141.537 88.988a66.667 66.667 0 0 0-2.518-1.143c-1.482-27.307-16.403-42.94-41.457-43.1h-.34c-14.986 0-27.449 6.396-35.12 18.036l13.779 9.452c5.73-8.695 14.724-10.548 21.348-10.548h.229c8.249.053 14.474 2.452 18.503 7.129 2.932 3.405 4.893 8.111 5.864 14.05-7.314-1.243-15.224-1.626-23.68-1.14-23.82 1.371-39.134 15.326-38.092 34.71.528 9.818 5.235 18.28 13.256 23.811 6.776 4.673 15.472 7.013 24.487 6.592 11.899-.555 21.228-5.2 27.721-13.81 4.936-6.543 8.048-14.978 9.378-25.543 5.624 3.393 9.804 7.862 12.195 13.298 4.062 9.227 4.298 24.378-3.835 32.51-7.133 7.133-15.705 10.207-28.625 10.313-14.324-.118-25.162-4.693-32.211-13.6C74.615 141.04 70.97 127.063 70.834 110c.136-17.063 3.781-31.04 10.835-41.514 7.049-8.907 17.887-13.482 32.211-13.6 14.453.126 25.464 4.748 32.717 13.74 3.518 4.362 6.186 9.777 8.028 16.19l14.584-3.906c-2.373-8.269-6.063-15.353-11.09-21.284-9.9-12.276-24.166-18.678-42.364-18.84h-.136c-18.076.163-32.204 6.558-42.014 19.015C65.103 70.673 60.763 87.191 60.6 110l.003.263c.163 22.81 4.503 39.327 12.9 49.098 9.81 12.457 23.938 18.852 42.014 19.015h.136c15.803-.129 27.165-4.397 36.768-13.816 12.435-12.193 12.153-27.473 6.835-39.55-3.808-8.647-10.627-15.575-19.719-20.022Zm-38.36 44.327c-9.985.553-20.366-3.943-20.939-14.612-.417-7.764 5.498-16.435 25.507-17.588 2.227-.128 4.407-.186 6.541-.186 6.303 0 12.2.6 17.519 1.77-1.993 22.833-14.707 30.063-28.628 30.616Z" />
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
