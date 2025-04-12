'use client';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative h-[400px] sm:h-[500px] md:h-[600px] w-full">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/banner-home.jpg"
          alt="Healthcare professionals"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Yellow Card */}
      <div className="absolute inset-0 flex items-center justify-center md:justify-start md:pl-15 pt-10 md:pt-[150px] px-4">
        <div className="w-full max-w-full md:max-w-[70%] h-auto md:h-[300px] bg-yellow-500/20 backdrop-blur-[1px] p-6 md:p-8 flex flex-col justify-center rounded-2xl md:rounded-4xl">
          <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-white drop-shadow-lg mb-3 md:mb-4">
            WE ARE HERE TO MEET YOUR PERSONAL AND PROFESSIONAL NEEDS
          </h1>
          
          <div className="text-xs sm:text-sm text-white/90 space-y-2 md:space-y-3 mb-4 md:mb-6">
            <p className="drop-shadow-md leading-relaxed">
              Echo Locum Tenens goal is to improve patient outcomes while reducing the
              cost of healthcare. We strive to adapt quickly to the constant changes within
              the healthcare industry. We partner with over 400 healthcare facilities
              around the country. If you are looking for flexibility, a change of environment,
              or want to improve your skills and learn new procedures, consider joining the Echo team.
            </p>
          </div>
          
          <button className="bg-white/90 hover:bg-white text-yellow-600 font-medium py-2 px-6 rounded-md text-xs sm:text-sm transition-colors duration-200 w-fit">
            SEARCH JOBS
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;