'use client';
import Image from 'next/image';

export default function TestimonialSection({ 
  imageSrc, 
  altText, 
  title, 
  quote, 
  author 
}) {
  return (
    <section className="container mx-auto px-4 sm:px-6 py-12 md:py-16">
      <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-12">
        {imageSrc && (
          <div className="hidden md:block w-1/3">
            <div className="relative w-48 h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-yellow-100 shadow-lg">
              <Image
                src={imageSrc}
                alt={altText}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        )}

        <div className="w-full md:w-2/3">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
            {title}
          </h2>
          <div className="space-y-4 text-gray-600 mb-6 text-sm">
            <p className="italic">"{quote}" – {author}</p>
          </div>
        </div>
      </div>
    </section>
  );
}