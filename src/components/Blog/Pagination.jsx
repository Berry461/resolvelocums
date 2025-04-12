import Link from 'next/link';

export const Pagination = ({ currentPage, totalPages }) => {
  return (
    <div className="flex justify-center mt-12 space-x-2">
      {currentPage > 1 && (
        <Link 
          href={`/blog?page=${currentPage - 1}`}
          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Previous
        </Link>
      )}

      {Array.from({ length: totalPages }, (_, i) => (
        <Link
          key={i + 1}
          href={`/blog?page=${i + 1}`}
          className={`px-4 py-2 rounded-md ${currentPage === i + 1 ? 'bg-yellow-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
        >
          {i + 1}
        </Link>
      ))}

      {currentPage < totalPages && (
        <Link 
          href={`/blog?page=${currentPage + 1}`}
          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 flex items-center"
        >
          Next
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      )}
    </div>
  );
};