"use client"
import { useState } from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
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
             tracking-tighter leading-none">
            SEARCH CURRENT OPENINGS
          </h1>
        </div>
      </div>
    </section>
  );
};

const JobSearch = () => {
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [remoteOnly, setRemoteOnly] = useState(false);
  const [visibleJobs, setVisibleJobs] = useState(10);

  // Predefined options for dropdowns
  const specialtyOptions = [
    'All Specialties',
    'Emergency Medicine',
    'Cardiology',
    'Psychiatry',
    'Pediatrics',
    'Neurology',
    'Oncology',
    'Orthopedics',
    'Radiology',
    'Anesthesiology'
  ];

  const locationOptions = [
    'All Locations',
    'New York, NY',
    'Chicago, IL',
    'Boston, MA',
    'Los Angeles, CA',
    'Houston, TX',
    'Philadelphia, PA',
    'Phoenix, AZ',
    'San Diego, CA',
    'Remote'
  ];

  // Job data (simplified without salary and type)
  const jobs = [
    { id: 1, keyword: 'Emergency Physician', company: 'Metro Health Systems', location: 'New York, NY', specialty: 'Emergency Medicine', remote: false },
    { id: 2, keyword: 'Cardiologist', company: 'Heart Care Associates', location: 'Chicago, IL', specialty: 'Cardiology', remote: false },
    { id: 3, keyword: 'Telehealth Psychiatrist', company: 'Mindful Behavioral Health', location: 'Remote', specialty: 'Psychiatry', remote: true },
    { id: 4, keyword: 'Pediatric Nurse Practitioner', company: 'Childrens Wellness Center', location: 'Boston, MA', specialty: 'Pediatrics', remote: false },
    { id: 5, keyword: 'Neurologist', company: 'NeuroCare Associates', location: 'Los Angeles, CA', specialty: 'Neurology', remote: false },
    { id: 6, keyword: 'Oncology Surgeon', company: 'Cancer Treatment Center', location: 'Houston, TX', specialty: 'Oncology', remote: false },
    { id: 7, keyword: 'Orthopedic Surgeon', company: 'Bone & Joint Clinic', location: 'Philadelphia, PA', specialty: 'Orthopedics', remote: false },
    { id: 8, keyword: 'Radiologist', company: 'Imaging Diagnostics', location: 'Phoenix, AZ', specialty: 'Radiology', remote: false },
    { id: 9, keyword: 'Anesthesiologist', company: 'Surgical Partners', location: 'San Diego, CA', specialty: 'Anesthesiology', remote: false },
    { id: 10, keyword: 'Family Medicine Physician', company: 'Community Health', location: 'Remote', specialty: 'Family Medicine', remote: true },
    { id: 11, keyword: 'Dermatologist', company: 'Skin Care Specialists', location: 'New York, NY', specialty: 'Dermatology', remote: false },
    { id: 12, keyword: 'Gastroenterologist', company: 'Digestive Health', location: 'Chicago, IL', specialty: 'Gastroenterology', remote: false },
    { id: 13, keyword: 'Pulmonologist', company: 'Lung Health Institute', location: 'Boston, MA', specialty: 'Pulmonology', remote: false },
    { id: 14, keyword: 'Endocrinologist', company: 'Diabetes Care Center', location: 'Los Angeles, CA', specialty: 'Endocrinology', remote: false },
    { id: 15, keyword: 'Nephrologist', company: 'Kidney Specialists', location: 'Houston, TX', specialty: 'Nephrology', remote: false },
    { id: 16, keyword: 'Rheumatologist', company: 'Arthritis Center', location: 'Philadelphia, PA', specialty: 'Rheumatology', remote: false }
  ];

  // Filter jobs based on search criteria
  const filteredJobs = jobs.filter(job => {
    const locationMatch = location === 'All Locations' || 
                         job.location.toLowerCase().includes(location.toLowerCase());
    const specialtyMatch = specialty === 'All Specialties' || 
                         job.specialty.toLowerCase().includes(specialty.toLowerCase());
    
    return (
      job.keyword.toLowerCase().includes(keyword.toLowerCase()) &&
      locationMatch &&
      specialtyMatch &&
      (!remoteOnly || job.remote)
    );
  });

  const loadMoreJobs = () => {
    setVisibleJobs(prev => prev + 10);
  };

  return (
    <>
      <HeroSection />
      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Search Form - Ultra Compact */}
        <div className="bg-white p-3 mb-4 border border-gray-200 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-2">
            {/* Keyword Field */}
            <div>
              <label htmlFor="keyword" className="block text-xs font-medium text-gray-700 mb-1">
                Keyword
              </label>
              <input
                type="text"
                id="keyword"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-yellow-500"
                placeholder="Job title or keywords"
              />
            </div>

            {/* Location Field */}
            <div>
              <label htmlFor="location" className="block text-xs font-medium text-gray-700 mb-1">
                Location
              </label>
              <select
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-yellow-500"
              >
                {locationOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              <div className="mt-1 flex items-center">
                <input
                  type="checkbox"
                  id="remote"
                  checked={remoteOnly}
                  onChange={(e) => setRemoteOnly(e.target.checked)}
                  className="h-3 w-3 text-yellow-600 focus:ring-yellow-500 border-gray-300 rounded"
                />
                <label htmlFor="remote" className="ml-1 block text-xs text-gray-700">
                  Remote positions only
                </label>
              </div>
            </div>
          </div>

          {/* Specialty Field */}
          <div>
            <label htmlFor="specialty" className="block text-xs font-medium text-gray-700 mb-1">
              Provider Specialty
            </label>
            <select
              id="specialty"
              value={specialty}
              onChange={(e) => setSpecialty(e.target.value)}
              className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-yellow-500"
            >
              {specialtyOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Job Listings - No margin between cards */}
        <div className="space-y-0">
          {filteredJobs.slice(0, visibleJobs).map((job) => (
            <div key={job.id} className="bg-white p-3 border-b border-gray-200 last:border-b-0">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                {/* Left Section */}
                <div className="mb-2 md:mb-0 md:w-2/5">
                  <h3 className="text-base font-medium text-yellow-600">{job.keyword}</h3>
                  <p className="text-xs text-gray-600">{job.company}</p>
                </div>

                {/* Center Section */}
                <div className="text-center mb-2 md:mb-0 md:w-1/5">
                  <p className="text-sm text-gray-700">{job.location}</p>
                </div>

                {/* Right Section */}
                <div className="text-right md:w-2/5">
                  <span className="inline-block px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded">
                    {job.specialty}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleJobs < filteredJobs.length && (
          <div className="mt-4 text-center">
            <button
              onClick={loadMoreJobs}
              className="px-3 py-1.5 text-sm bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors"
            >
              Load More Listings
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default JobSearch;