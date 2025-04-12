import Image from 'next/image';

export const BlogHeroSection = () => {
  return (
    <section className="relative h-[200px] sm:h-[250px] md:h-[300px] w-full">
      <div className="absolute inset-0">
        <Image
          src="/banner-page.jpg"
          alt="Healthcare professionals"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      <div className="absolute inset-0 flex items-center">
        <div className="md:ml-16 lg:ml-20 w-full md:w-[400px] lg:w-[500px] bg-yellow-500/90 backdrop-blur-[1px] p-4 rounded-2xl">
          <h1 className="text-2xl sm:text-3xl md:text-3xl font-semibold text-white tracking-tighter leading-none">
            BLOG
          </h1>
        </div>
      </div>
    </section>
  );
};