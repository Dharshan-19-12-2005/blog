// src/app/page.tsx
'use client';

import Link from 'next/link';
import { useAuth } from '@/app/layout';

const HomePage = () => {
  const { isLoggedIn, login, logout } = useAuth();

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Welcome to My Career Blog</h1>
      <p style={descriptionStyle}>
        Discover professional insights and roadmaps for thriving careers in Cloud, DevOps, AI/ML, and Software Development.
      </p>
      <div style={buttonContainerStyle}>
        <Link href="/blogs" style={blogsButtonStyle}>
          View All Blogs
        </Link>
      </div>
      <div style={authOptionsStyle}>
        {isLoggedIn ? (
          <button onClick={logout} style={{ ...authButtonStyle, backgroundColor: '#dc3545' }}>
            Log Out
          </button>
        ) : (
          // Changed this Link to point to /login
          <Link href="/login" style={linkAsAuthButtonStyle}>
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};

// --- STYLES (from previous dark mode update) ---

const containerStyle: React.CSSProperties = {
  textAlign: 'center',
  padding: '8rem 2rem',
  backgroundColor: '#1a1a1a',
  minHeight: 'calc(100vh - 80px)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#e0e0e0',
};

const titleStyle: React.CSSProperties = {
  fontSize: '4rem',
  color: '#f0f0f0',
  marginBottom: '1.5rem',
  fontWeight: '800',
  textShadow: '0 0 15px rgba(0, 191, 255, 0.3)',
};

const descriptionStyle: React.CSSProperties = {
  fontSize: '1.4rem',
  color: '#b0b0b0',
  marginBottom: '3.5rem',
  maxWidth: '800px',
  lineHeight: '1.8',
};

const buttonContainerStyle: React.CSSProperties = {
  marginBottom: '2.5rem',
};

const blogsButtonStyle: React.CSSProperties = {
  display: 'inline-block',
  padding: '1.4rem 3rem',
  background: 'linear-gradient(45deg, #00bfff, #007bff)',
  color: 'white',
  borderRadius: '12px',
  fontSize: '1.3rem',
  fontWeight: 'bold',
  textDecoration: 'none',
  boxShadow: '0 8px 20px rgba(0, 123, 255, 0.4)',
  transition: 'all 0.3s ease',
  border: 'none',
  cursor: 'pointer',
};


const authOptionsStyle: React.CSSProperties = {
  marginTop: '2rem',
  display: 'flex',
  gap: '1.5rem',
};

const linkAsAuthButtonStyle: React.CSSProperties = {
  padding: '1rem 2.2rem',
  backgroundColor: '#555',
  color: 'white',
  border: '1px solid #777',
  borderRadius: '8px',
  cursor: 'pointer',
  fontSize: '1.1rem',
  transition: 'background-color 0.3s ease, border-color 0.3s ease',
  display: 'inline-block',
  textAlign: 'center',
};

const authButtonStyle: React.CSSProperties = {
  padding: '1rem 2.2rem',
  backgroundColor: '#555',
  color: 'white',
  border: '1px solid #777',
  borderRadius: '8px',
  cursor: 'pointer',
  fontSize: '1.1rem',
  transition: 'background-color 0.3s ease, border-color 0.3s ease',
};


export default HomePage;