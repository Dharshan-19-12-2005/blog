// src/app/blogs/[slug]/page.tsx
'use client'; // This must be at the very top

import { blogPosts, BlogPost } from '@/data/blogPosts'; // Updated import path from src/data/blogPosts.ts
import { notFound } from 'next/navigation';

interface BlogPostPageProps {
  params: { slug: string }
}

export default function Page({ params }: BlogPostPageProps) {
  const { slug } = params;
  const blog = blogPosts.find((post) => post.slug === slug);

  if (!blog) {
    notFound();
  }

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>{blog.title}</h1>
      <p style={carrierCategoryStyle}>Category: {blog.carrier}</p>

      <section style={contentSectionStyle}>
        <h2 style={sectionTitleStyle}>Description</h2>
        <p style={descriptionTextStyle}>{blog.fullDescription}</p>
      </section>

      <section style={contentSectionStyle}>
        <h2 style={sectionTitleStyle}>Roadmap</h2>
        <ul style={roadmapListStyle}>
          {blog.roadmap.map((step, index) => (
            <li key={index} style={roadmapListItemStyle}>
              {step}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

// ... (rest of the styles are the same as before)
const containerStyle: React.CSSProperties = {
  maxWidth: '900px',
  margin: '3.5rem auto',
  padding: '2.5rem',
  backgroundColor: '#ffffff',
  borderRadius: '12px',
  boxShadow: '0 6px 18px rgba(0, 0, 0, 0.1)',
};

const titleStyle: React.CSSProperties = {
  fontSize: '3rem',
  color: '#2c3e50',
  marginBottom: '1rem',
  textAlign: 'center',
  fontWeight: '700',
  lineHeight: '1.2',
};

const carrierCategoryStyle: React.CSSProperties = {
  textAlign: 'center',
  fontSize: '1.2rem',
  color: '#7f8c8d',
  fontStyle: 'italic',
  marginBottom: '3rem',
};

const contentSectionStyle: React.CSSProperties = {
  marginBottom: '3rem',
};

const sectionTitleStyle: React.CSSProperties = {
  fontSize: '2.2rem',
  color: '#34495e',
  borderBottom: '3px solid #007bff',
  paddingBottom: '0.7rem',
  marginBottom: '1.8rem',
  fontWeight: '600',
};

const descriptionTextStyle: React.CSSProperties = {
  fontSize: '1.15rem',
  lineHeight: '1.8',
  color: '#444',
};

const roadmapListStyle: React.CSSProperties = {
  listStyleType: 'decimal',
  paddingLeft: '1.8rem',
};

const roadmapListItemStyle: React.CSSProperties = {
  fontSize: '1.1rem',
  lineHeight: '1.9',
  marginBottom: '1rem',
  color: '#444',
  backgroundColor: '#f8f9fa',
  padding: '0.8rem 1rem',
  borderRadius: '8px',
  border: '1px solid #e9ecef',
};