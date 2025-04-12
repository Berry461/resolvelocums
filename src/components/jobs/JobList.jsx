import { JobListItem } from "./JobListItem";

export const JobList = ({ jobs, visibleJobs, loadMoreJobs }) => {
    return (
      <>
        <div className="space-y-0">
          {jobs.slice(0, visibleJobs).map((job) => (
            <JobListItem key={job.id} job={job} />
          ))}
        </div>
        
        {visibleJobs < jobs.length && (
          <div className="mt-4 text-center">
            <button
              onClick={loadMoreJobs}
              className="px-3 py-1.5 text-sm bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors"
            >
              Load More Listings
            </button>
          </div>
        )}
      </>
    );
  };