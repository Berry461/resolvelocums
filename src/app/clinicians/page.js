import Image from 'next/image';

const Clinicians = () => {
  return (
    <div className="relative">
    <section className="relative h-[200px] sm:h-[250px] md:h-[300px] w-full">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/banner-page.jpg"
          alt="Healthcare professionals"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Text Card */}
      <div className="absolute inset-0 flex items-center">
        <div className="md:ml-16 lg:ml-20
                   w-full md:w-[400px] lg:w-[500px]
                   bg-yellow-500/90 backdrop-blur-[1px]
                   p-4 rounded-2xl">
          <h1 className="text-2xl sm:text-3xl md:text-3xl font-semibold text-white 
             tracking-tighter leading-none pb-4">
            //// CLINICIANS
          </h1>
          <div className="text-xs sm:text-sm text-white/90 space-y-2 md:space-y-3 mb-4 md:mb-6">
              <p className="drop-shadow-md leading-relaxed">
              With Echo Locum Tenens, you will be able to see the country through a variety
              of clinical and community settings, while gaining valuable experience
              in the process.
              </p>
            </div>
        </div>
      </div>
    </section>

    <div className="mb-8 mt-10 mx-4 md:mx-[100px]">
        <p className="text-sm text-gray-700 mb-4">
            Becoming a locum is a great way to supplement your income or make a change 
            in your lifestyle that allows for more freedom and flexibility. 
            The benefits of being an Echo Locum Tenens clinician includes the
            freedom to choose what assignments you cover.
        </p>
        
        <h3 className="text-base font-medium text-yellow-600 mb-3">We Offer</h3>
        
        <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
            <li>Freedom to choose which assignments to cover</li>
            <li>Competitive pay with travel and lodging provided for most assignments</li>
            <li>Malpractice insurance with tail coverage</li>
            <li>Full-service support staff, including credentialing, logistics payroll, and licensing assistance</li>
            <li>Access to top recruiters with an average of 5+ years of healthcare staffing experience</li>
        </ul>

        <button className="mt-4 px-4 py-2 bg-yellow-500 text-white text-sm rounded hover:bg-yellow-600 transition-colors">
            Search Jobs
        </button>
    </div>

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
            /// PHYSICIANS
            </h2>
            <div className="space-y-4 text-gray-600 mb-6 text-sm">
              <p>
              Whether you are a resident, fellow, or veteran physician, we have opportunities
              for you. Many residents and fellows opt for locum tenens to get a feel for what 
              practicing hospital medicine is like outside of residency and fellowship. It allows 
              you to “test drive” a position before entering into a long-term employment agreement. 
              Becoming a locum is also great when looking for a change. It is a great way to explore 
              opportunities in different locations before making long-term commitments. Not quite 
              ready to retire? Locum tenens offers experienced physicians a chance to work when and 
              where they desire.</p>
              
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
                    /// ADVANCE PRACTICE PROVIDERS
                  </h2>
                  <div className="space-y-4 text-gray-600 text-sm">
                    <p>
                    As a locum tenens nurse practitioner, physician assistant, or CRNA with 
                    Echo Locums, we make it easy for you to choose where you want to work 
                    and when you want to work. We bring expertise and support for all credentialing 
                    or licensing concerns you may have. Enjoy the freedom, flexibility, and income 
                    that comes with locum tenens job opportunities.
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
            /// CONNECT WITH A RECRUITER
            </h2>
            <div className="space-y-4 text-gray-600 mb-6 text-sm">
              <p>
              Do you want to learn more about what Echo Locum Tenens can offer you?
              Contact us here, and a recruiter will connect with you and get all
              your questions answered.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
   
  )
}

export default Clinicians;