// src/app/blogs/[slug]/page.tsx
'use client'; // This must be at the very top

import { blogPosts, BlogPost } from '@/data/blogPosts'; // Updated import path from src/data/blogPosts.ts
import { notFound } from 'next/navigation';

type BlogPostPageProps = {
  params: { slug: string };
};

export default function Page({ params }: BlogPostPageProps) {
  return (
    <div>
      <h1>Slug: {params.slug}</h1>
    </div>
  );
}