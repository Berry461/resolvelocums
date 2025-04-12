'use client';
import Image from 'next/image';

export default function WorkWithEcho({ 
  imageSrc, 
  altText, 
  title, 
  description, 
  showButton = false,
  buttonText = "SEARCH JOBS",
  testimonial = null,
  reverse = false
}) {
  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <div className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${reverse ? 'md:flex-row-reverse' : ''}`}>
        <div className="w-full md:w-1/2">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
            {title}
          </h2>
          <div className="space-y-4 text-gray-600 text-sm">
            {testimonial ? (
              <p className="italic">"{testimonial.quote}" – {testimonial.author}</p>
            ) : (
              <p>{description}</p>
            )}
          </div>
          {showButton && (
            <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-6 rounded-md text-sm transition-colors duration-200">
              {buttonText}
            </button>
          )}
        </div>

        {imageSrc && (
          <div className="hidden md:flex md:w-1/2 justify-end">
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
      </div>
    </section>
  );
}