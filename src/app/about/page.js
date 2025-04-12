import Image from 'next/image';
import LeadershipAvatars from '@/components/LeadershipAvatars';

const AboutPage = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-[180px] sm:h-[220px] md:h-[280px] w-full">
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
                 tracking-tighter leading-none">
                //// ABOUT
              </h1>
            </div>
          </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Introduction Section */}
        <section className="mb-12">
          <p className="text-sm leading-snug mb-4">
          We support over 400 hospitals and clinics nationwide at any given time 
          and look at both our healthcare organizations and our clinicians as partners.
          We work together to provide high-quality care to our patients. Our teams have
          a dedication to the organization’s core values of quality, service, teamwork, 
          innovation, and integrity. These values are central to the success of each 
          clinician placement and healthcare facility with whom we partner.
          </p>
          
          <p className="text-sm leading-snug mb-4">
          As healthcare continues to evolve, so do we. Below are some of our current 
          specialties we offer, but we’re always looking to partner with you for 
          different and new services.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-3 mb-8">
            {[
              'Emergency Medicine',
              'Critical Care Medicine', 
              'Hospitalist Medicine',
              'Anesthesia Medicine',
              'Family Medicine',
              'Internal Medicine',
              'Physician Assistants',
              'Nurse Practitioners'
            ].map((specialty, index) => (
              <div key={index} className="flex items-start">
                <span className="text-yellow-500 mr-1.5 mt-0.5 text-xs">•</span>
                <p className="font-light text-xs">{specialty}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Clinicians Section */}
            <div className="bg-white p-4 rounded-md shadow-sm">
              <h2 className="text-base font-medium mb-2 text-yellow-600">Clinicians</h2>
              <p className="text-gray-600 text-xs mb-2">
              We are dedicated to serving our healthcare clinicians and are committed
              to having your best interest at heart. Being a healthcare clinician is
              one of the most rewarding professions, but we also understand the hectic
              life you live. Echo takes great pride in assisting you every step of the
              way through the locum tenens process and matching you with an opportunity
              that best suits your needs. Learn more in our FAQ.
              </p>
              <p className="text-gray-600 text-xs">
              
              </p>
            </div>

            {/* Partnerships Section */}
            <div className="bg-white p-4 rounded-md shadow-sm">
              <h2 className="text-base font-medium mb-2 text-yellow-600">Partnerships</h2>
              <p className="text-gray-600 text-xs">
              We don’t want to be another agency on your list, but a true strategic
              partner that will go the extra mile in the time of need for your facility,
              community, and, most importantly, the patients and families you serve.
              We want to become an extension of your service lines and help you focus
              on providing high-quality patient care.
              </p>
            </div>
          </div>
        </section>
        <LeadershipAvatars />
      </div>
    </div>
  );
};

export default AboutPage;