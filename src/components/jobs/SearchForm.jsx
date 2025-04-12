'use client';

export const SearchForm = ({ 
  keyword, 
  setKeyword,
  location,
  setLocation,
  specialty,
  setSpecialty,
  remoteOnly,
  setRemoteOnly,
  specialtyOptions,
  locationOptions
}) => {
  return (
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
  );
};