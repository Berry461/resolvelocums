import Link from 'next/link';
import Image from 'next/image';

// This would be in a separate file like lib/blogData.js
const allBlogPosts = [
  // Page 1 posts (1-5)
  {
    id: 1,
    title: "The Future of Telemedicine in Healthcare",
    excerpt: "Exploring how virtual care is transforming patient-doctor relationships.",
    image: "/telemedicine.jpg"
  },
  {
    id: 2,
    title: "Locum Tenens: Flexibility and Stability",
    excerpt: "How temporary medical positions offer career freedom.",
    image: "/locum-life.jpg"
  },
  {
    id: 3,
    title: "Medical Licensing Across States",
    excerpt: "Guide to practicing medicine in multiple states.",
    image: "/medical-license.jpg"
  },
  {
    id: 4,
    title: "Rural Healthcare Challenges",
    excerpt: "Examining physician shortage in rural areas.",
    image: "/rural-health.jpg"
  },
  {
    id: 5,
    title: "The Rise of APP Roles",
    excerpt: "How APPs are filling critical healthcare gaps.",
    image: "/app-roles.jpg"
  },
  // Page 2 posts (6-10)
  {
    id: 6,
    title: "Malpractice Insurance for Locums",
    excerpt: "Essential coverage considerations.",
    image: "/malpractice.jpg"
  },
  {
    id: 7,
    title: "Wellness for Traveling Clinicians",
    excerpt: "Maintaining health during assignments.",
    image: "/clinician-wellness.jpg"
  },
  {
    id: 8,
    title: "Credentialing Timelines",
    excerpt: "Navigating hospital privileging processes.",
    image: "/credentialing.jpg"
  },
  {
    id: 9,
    title: "Emergency Medicine Trends",
    excerpt: "Challenges in ER staffing nationwide.",
    image: "/emergency-med.jpg"
  },
  {
    id: 10,
    title: "Contract Negotiation Tips",
    excerpt: "Key terms for placement agreements.",
    image: "/contract-negotiation.jpg"
  },
  // Page 3 posts (11-15)
  {
    id: 11,
    title: "Telepsychiatry Best Practices",
    excerpt: "Delivering mental health care remotely.",
    image: "/telepsych.jpg"
  },
  {
    id: 12,
    title: "Managing Multiple Assignments",
    excerpt: "Tips for juggling locum positions.",
    image: "/multiple-assignments.jpg"
  },
  {
    id: 13,
    title: "Tax Considerations for Locums",
    excerpt: "Understanding your tax obligations.",
    image: "/tax-considerations.jpg"
  },
  {
    id: 14,
    title: "Building Your Locum Network",
    excerpt: "Creating valuable professional connections.",
    image: "/networking.jpg"
  },
  {
    id: 15,
    title: "Transitioning to Full-Time Locum",
    excerpt: "Making the shift from permanent positions.",
    image: "/transition.jpg"
  }
];

const POSTS_PER_PAGE = 5;

export default function BlogPage({ searchParams }) {
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = Math.ceil(allBlogPosts.length / POSTS_PER_PAGE);
  
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = allBlogPosts.slice(startIndex, endIndex);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-[200px] sm:h-[250px] md:h-[300px] w-full">
        <div className="absolute inset-0">
          <Image
            src="/banner-page.jpg"
            alt="Healthcare professionals"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="md:ml-16 lg:ml-20 w-full md:w-[400px] lg:w-[500px] bg-yellow-500/90 backdrop-blur-[1px] p-4 rounded-2xl">
            <h1 className="text-2xl sm:text-3xl md:text-3xl font-semibold text-white tracking-tighter leading-none">
              BLOG
            </h1>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <div className="max-w-full px-4 py-8">
        <div className="space-y-10">
          {currentPosts.map((post) => (
            <div key={post.id} className="w-full border-b border-gray-200 pb-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <div className="relative h-48 w-full rounded-lg overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-3">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link 
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-colors"
                  >
                    Continue Reading
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
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
      </div>
    </div>
  );
}