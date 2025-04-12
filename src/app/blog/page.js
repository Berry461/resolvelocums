import { BlogHeroSection } from '@/components/HeroSection/BlogHeroSection';
import { BlogPostCard } from '@/components/Blog/BlogPostCard';
import { Pagination } from '@/components/Blog/Pagination';
import { allBlogPosts, POSTS_PER_PAGE } from '@/../lib/blogData';

export default function BlogPage({ searchParams }) {
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = Math.ceil(allBlogPosts.length / POSTS_PER_PAGE);
  
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = allBlogPosts.slice(startIndex, endIndex);

  return (
    <div className="relative">
      <BlogHeroSection />
      
      <div className="max-w-full px-4 py-8">
        <div className="space-y-10">
          {currentPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>

        <Pagination currentPage={currentPage} totalPages={totalPages} />
      </div>
    </div>
  );
}