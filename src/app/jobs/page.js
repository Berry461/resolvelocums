'use client';
import { useState } from 'react';
import {AboutHeroSection } from '@/components/AboutHeroSection';
import { SearchForm } from '@/components/jobs/SearchForm';
import { JobList } from '@/components/jobs/JobList';
import { specialtyOptions, locationOptions, jobs } from '@/data/jobData';

export default function JobSearch() {
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [remoteOnly, setRemoteOnly] = useState(false);
  const [visibleJobs, setVisibleJobs] = useState(10);

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

  const loadMoreJobs = () => setVisibleJobs(prev => prev + 10);

  return (
    <div className="relative">
      <AboutHeroSection title="SEARCH CURRENT OPENINGS" />

      <div className="max-w-6xl mx-auto px-4 py-6">
        <SearchForm
          keyword={keyword}
          setKeyword={setKeyword}
          location={location}
          setLocation={setLocation}
          specialty={specialty}
          setSpecialty={setSpecialty}
          remoteOnly={remoteOnly}
          setRemoteOnly={setRemoteOnly}
          specialtyOptions={specialtyOptions}
          locationOptions={locationOptions}
        />
        
        <JobList 
          jobs={filteredJobs} 
          visibleJobs={visibleJobs} 
          loadMoreJobs={loadMoreJobs} 
        />
      </div>
    </div>
  );
}