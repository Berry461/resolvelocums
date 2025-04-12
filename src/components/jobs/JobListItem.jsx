export const JobListItem = ({ job }) => {
    return (
      <div className="bg-white p-3 border-b border-gray-200 last:border-b-0">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div className="mb-2 md:mb-0 md:w-2/5">
            <h3 className="text-base font-medium text-yellow-600">{job.keyword}</h3>
            <p className="text-xs text-gray-600">{job.company}</p>
          </div>
          
          <div className="text-center mb-2 md:mb-0 md:w-1/5">
            <p className="text-sm text-gray-700">{job.location}</p>
          </div>
          
          <div className="text-right md:w-2/5">
            <span className="inline-block px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded">
              {job.specialty}
            </span>
          </div>
        </div>
      </div>
    );
  };