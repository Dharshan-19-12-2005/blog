
import Link from 'next/link';
import { BlogPost } from '@/app/blogs/page';

interface BlogCardProps {
  blog: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <Link href={`/blogs/${blog.slug}`} style={cardLinkStyle}>
      <div style={cardStyle}>
        <h3 style={cardTitleStyle}>{blog.title}</h3>
        <p style={cardCarrierStyle}>Category: {blog.carrier}</p>
        <p style={cardDescriptionStyle}>{blog.shortDescription}</p>
        <span style={readMoreStyle}>Read More &rarr;</span>
      </div>
    </Link>
  );
};

const cardLinkStyle: React.CSSProperties = {
  textDecoration: 'none',
  color: 'inherit',
  display: 'block',
};

const cardStyle: React.CSSProperties = {
  borderRadius: '16px',
  padding: '1.8rem',
  background: 'rgba(255, 255, 255, 0.15)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  cursor: 'pointer',
  minHeight: '220px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
};

const cardTitleStyle: React.CSSProperties = {
  fontSize: '1.5rem',
  marginBottom: '0.75rem',
  color: '#1a1a1a',
  fontWeight: 700,
};

const cardCarrierStyle: React.CSSProperties = {
  fontSize: '1rem',
  color: '#444',
  marginBottom: '1rem',
  fontStyle: 'italic',
};

const cardDescriptionStyle: React.CSSProperties = {
  fontSize: '1.05rem',
  color: '#222',
  flexGrow: 1,
  lineHeight: '1.6',
};

const readMoreStyle: React.CSSProperties = {
  color: '#0056b3',
  fontWeight: 600,
  marginTop: '1.5rem',
  display: 'block',
  textAlign: 'right',
};

export default BlogCard;