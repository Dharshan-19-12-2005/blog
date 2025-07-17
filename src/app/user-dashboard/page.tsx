'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/layout';

const UserDashboardPage = () => {
  const { isLoggedIn, userRole, currentUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    
    if (!isLoggedIn || userRole !== 'user') {
      router.push('/auth'); 
    }
  }, [isLoggedIn, userRole, router]);

  if (!isLoggedIn || userRole !== 'user') {
    return <p style={{ textAlign: 'center', marginTop: '50px', fontSize: '1.2rem', color: '#666' }}>Redirecting...</p>;
  }


  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>My User Dashboard</h1>
      <p style={welcomeStyle}>Hello, {currentUser} personalized content.</p>
      <div style={contentStyle}>
        <p>As a regular user, you can:</p>
        <ul style={listStyle}>
          <li>View your saved articles or reading list (if implemented)</li>
          <li>Manage your profile settings</li>
          <li>Leave comments on blog posts</li>
          <li>Access exclusive user-only content</li>
        </ul>
        <p style={infoStyle}>
          Explore the blogs section to find new articles tailored to your interests!
        </p>
      </div>
    </div>
  );
}; 
  
const containerStyle: React.CSSProperties = {
  maxWidth: '900px',
  margin: '4rem auto',
  padding: '3rem',
  backgroundColor: 'white',
  borderRadius: '15px',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
  textAlign: 'center',
};

const titleStyle: React.CSSProperties = {
  fontSize: '3.5rem',
  color: '#2c3e50',
  marginBottom: '1.5rem',
  fontWeight: '700',
  textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
};

const welcomeStyle: React.CSSProperties = {
  fontSize: '1.6rem',
  color: '#34495e',
  marginBottom: '2.5rem',
  fontStyle: 'italic',
};

const contentStyle: React.CSSProperties = {
  backgroundColor: '#ffffff',
  padding: '2.5rem',
  borderRadius: '10px',
  border: '1px solid #e0e0e0',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
  textAlign: 'left',
};

const listStyle: React.CSSProperties = {
  listStyleType: 'disc',
  paddingLeft: '1.8rem',
  fontSize: '1.1rem',
  lineHeight: '2',
  color: '#555',
};

const infoStyle: React.CSSProperties = {
  marginTop: '2rem',
  fontSize: '1rem',
  color: '#28a745',
  fontWeight: 'bold',
  backgroundColor: '#e6ffe6',
  padding: '1rem',
  borderRadius: '8px',
  border: '1px solid #28a745',
};

export default UserDashboardPage;  