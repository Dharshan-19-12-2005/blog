// src/app/blogs/page.tsx
'use client';

import BlogCard from '@/components/BlogCard';
import { blogPosts, BlogPost } from '@/data/blogPosts'; // Updated import path to src/data/blogPosts.ts

const BlogsPage = () => {
  const carriers: BlogPost['carrier'][] = [
    'Cloud',
    'DevOps',
    'AI/ML',
    'Software Developer',
    'Cybersecurity',
    'Data Engineering'
  ];

  return (
    <div style={containerStyle}>
      <h1 style={pageTitleStyle}>Explore Career Paths</h1>
      {carriers.map((carrier) => (
        <section key={carrier} style={carrierSectionStyle}>
          <h2 style={carrierTitleStyle}>{carrier}</h2>
          <div style={blogGridStyle}>
            {blogPosts
              .filter((blog) => blog.carrier === carrier)
              .map((blog) => (
                <BlogCard key={blog.slug} blog={blog} />
              ))}
          </div>
        </section>
      ))}
    </div>
  );
};

// ... (rest of the styles are the same as before)
const containerStyle: React.CSSProperties = {
  maxWidth: '1300px',
  margin: '2.5rem auto',
  padding: '0 1.5rem',
};

const pageTitleStyle: React.CSSProperties = {
  textAlign: 'center',
  fontSize: '3rem',
  color: '#2c3e50',
  marginBottom: '3.5rem',
  fontWeight: '700',
};

const carrierSectionStyle: React.CSSProperties = {
  marginBottom: '4rem',
  paddingBottom: '2.5rem',
  borderBottom: '1px solid #e0e0e0',
};

const carrierTitleStyle: React.CSSProperties = {
  fontSize: '2.2rem',
  color: '#34495e',
  borderLeft: '6px solid #007bff',
  paddingLeft: '1.2rem',
  fontWeight: '600',
};

const blogGridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
  gap: '2rem',
  justifyContent: 'center',
};

export default BlogsPage;