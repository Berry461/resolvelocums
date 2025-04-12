import { notFound } from 'next/navigation';
import { allBlogPosts } from '@/../lib/blogData';

export default function BlogPostPage({ params }) {
  const post = allBlogPosts.find(post => post.id === Number(params.id));
  
  if (!post) {
    return notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{post.title}</h1>
      <div className="prose max-w-none">
        <p>{post.content}</p>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return allBlogPosts.map(post => ({
    id: post.id.toString()
  }));
}