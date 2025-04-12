const AboutContent = () => {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Introduction Section */}
        <section className="mb-12">
          <p className="text-sm leading-snug mb-4">
            We support over 400 hospitals and clinics nationwide at any given time 
            and look at both our healthcare organizations and our clinicians as partners.
            We work together to provide high-quality care to our patients. Our teams have
            a dedication to the organization's core values of quality, service, teamwork, 
            innovation, and integrity.
          </p>
          
          <p className="text-sm leading-snug mb-4">
            As healthcare continues to evolve, so do we. Below are some of our current 
            specialties we offer, but we're always looking to partner with you for 
            different and new services.
          </p>
  
          <SpecialtiesList />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <AboutCard 
              title="Clinicians"
              content="We are dedicated to serving our healthcare clinicians and are committed
              to having your best interest at heart. Being a healthcare clinician is
              one of the most rewarding professions, but we also understand the hectic
              life you live. Echo takes great pride in assisting you every step of the
              way through the locum tenens process and matching you with an opportunity
              that best suits your needs."
            />
            
            <AboutCard 
              title="Partnerships"
              content="We don't want to be another agency on your list, but a true strategic
              partner that will go the extra mile in the time of need for your facility,
              community, and, most importantly, the patients and families you serve.
              We want to become an extension of your service lines and help you focus
              on providing high-quality patient care."
            />
          </div>
        </section>
      </div>
    );
  };
  
  const SpecialtiesList = () => (
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
  );
  
  const AboutCard = ({ title, content }) => (
    <div className="bg-white p-4 rounded-md shadow-sm">
      <h2 className="text-base font-medium mb-2 text-yellow-600">{title}</h2>
      <p className="text-gray-600 text-xs">{content}</p>
    </div>
  );
  
  export default AboutContent;