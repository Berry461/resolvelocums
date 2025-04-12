import Link from 'next/link';
import Image from 'next/image';

export const BlogPostCard = ({ post }) => {
  return (
    <div className="w-full border-b border-gray-200 pb-8">
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
  );
};