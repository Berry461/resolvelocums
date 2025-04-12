import Image from 'next/image';

export const CliniciansHeroSection = ({ title, description, imageSrc }) => {
  return (
    <section className="relative h-[300px] sm:h-[350px] md:h-[450px] lg:h-[500px] w-full">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt="Healthcare professionals"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Text Card */}
      <div className="absolute inset-0 flex items-center justify-center md:justify-start">
        <div className="mx-4 md:ml-16 lg:ml-20
                   w-full md:w-[450px] lg:w-[550px]
                   bg-yellow-500/90 backdrop-blur-[1px]
                   p-6 md:p-8 rounded-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-semibold text-white 
             tracking-tighter leading-none pb-4 md:pb-6">
            {title}
          </h1>
          <div className="text-sm sm:text-base text-white/90 space-y-2 md:space-y-3 mb-4 md:mb-6">
            <p className="drop-shadow-md leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};