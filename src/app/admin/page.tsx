'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/layout';

const AdminDashboardPage = () => {
  const { isLoggedIn, userRole, currentUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    
    if (!isLoggedIn || userRole !== 'admin') {
      router.push('/auth'); 
    }
  }, [isLoggedIn, userRole, router]);

  if (!isLoggedIn || userRole !== 'admin') {
    return <p style={{ textAlign: 'center', marginTop: '50px', fontSize: '1.2rem', color: '#666' }}>Redirecting...</p>;
  }

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Admin Dashboard</h1>
      <p style={welcomeStyle}>Welcome, {currentUser}! You have administrative privileges.</p>
      <div style={contentStyle}>
        <p>Here you can manage:</p>
        <ul style={listStyle}>
          <li>User accounts (e.g., reset passwords, change roles)</li>
          <li>Blog posts (e.g., create, edit, delete articles)</li>
          <li>Site settings (e.g., general configuration)</li>
          <li>View analytics and reports</li>
        </ul>
        <p style={warningStyle}>
          **Note:** In a real application, these actions would interact with a secure backend.
          This is a frontend placeholder for demonstration.
        </p>
      </div>
    </div>
  );
};

const containerStyle: React.CSSProperties = {
  maxWidth: '900px',
  margin: '4rem auto',
  padding: '3rem',
  backgroundColor: '#f8f8f8',
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

const warningStyle: React.CSSProperties = {
  marginTop: '2rem',
  fontSize: '0.95rem',
  color: '#e74c3c',
  fontWeight: 'bold',
  backgroundColor: '#fef3f3',
  padding: '1rem',
  borderRadius: '8px',
  border: '1px solid #e74c3c',
};


export default AdminDashboardPage;