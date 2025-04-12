import Image from 'next/image';

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
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

      {/* Body Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Text Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
              /// WORK WITH ECHO
            </h2>
            <div className="space-y-4 text-gray-600 text-sm">
              <p>
                Our clinicians show dedication to the organization's core values of quality, service, teamwork, innovation, and integrity. We take great pride in assisting you every step of the way through the locum tenens process and matching you with an opportunity that best suits your needs.
              </p>
            </div>
            <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-6 rounded-md text-sm transition-colors duration-200">
              SEARCH JOBS
            </button>
          </div>

          {/* Avatar Image */}
          <div className="hidden md:flex md:w-1/2 justify-end">
            <div className="relative w-48 h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-yellow-100 shadow-lg">
              <Image
                src="/doctor-smart.jpg"
                alt="Healthcare professional"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Card Section */}
      <section className="container mx-auto px-4 sm:px-6 py-12">
        <div className="bg-gradient-to-br from-yellow-50 to-white rounded-2xl shadow-xl overflow-hidden w-full mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center">
            {/* Avatar Image */}
            <div className="hidden md:flex w-1/3 h-full min-h-[300px] relative justify-center items-center p-6">
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <Image
                  src="/doctor-homeimage.jpg"
                  alt="Medical Professional"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="w-full md:w-2/3 p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-5">
                /// STRATEGIC STAFFING PARTNERS
              </h2>
              <div className="space-y-4 text-gray-600 mb-7 text-sm">
                <p className="leading-relaxed">
                  We don't want to be another agency on your list, but a true strategic partner that will go the extra mile in the time of need for your facility, community and, most importantly, the patients and families you serve.
                </p>
                <p className="leading-relaxed">
                  We want to become an extension of your service lines and help you focus on providing high-quality patient care.
                </p>
              </div>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-8 rounded-lg transition-all duration-200 text-sm shadow-md">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Body Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Text Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
              /// WORK WITH ECHO
            </h2>
            <div className="space-y-4 text-gray-600 text-sm">
              <p>
                Our clinicians show dedication to the organization's core values of quality, service, teamwork, innovation, and integrity. We take great pride in assisting you every step of the way through the locum tenens process and matching you with an opportunity that best suits your needs.
              </p>
            </div>
          </div>

          {/* Avatar Image */}
          <div className="hidden md:flex md:w-1/2 justify-end">
            <div className="relative w-48 h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-yellow-100 shadow-lg">
              <Image
                src="/client-home.jpg"
                alt="Healthcare professional"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Avatar + Text Section */}
      <section className="container mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-12">
          {/* Avatar Image */}
          <div className="hidden md:block w-1/3">
            <div className="relative w-48 h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-yellow-100 shadow-lg">
              <Image
                src="/home-client.jpg"
                alt="Healthcare Professional"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full md:w-2/3">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
            /// STRATEGIC STAFFING PARTNERS
            </h2>
            <div className="space-y-4 text-gray-600 mb-6 text-sm">
              <p>
                We don't want to be another agency on your list, but a true strategic partner that will go the extra mile in the time of need for your facility, community and, most importantly, the patients and families you serve.
              </p>
              <p>
                We want to become an extension of your service lines and help you focus on providing high-quality patient care.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}