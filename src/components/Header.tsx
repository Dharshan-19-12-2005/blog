// src/components/Header.tsx
'use client';

import Link from 'next/link';
import { useAuth } from '@/app/layout';
import { useRouter } from 'next/navigation';

const Header = () => {
  const { isLoggedIn, logout, currentUser, userRole } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  return (
    <header style={headerStyle}>
      <nav style={navStyle}>
        <div style={logoStyle}>
          <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>
            My Career Blog
          </Link>
        </div>
        <div style={linksContainerStyle}>
          <Link href="/" style={linkStyle}>
            Home
          </Link>
          <Link href="/blogs" style={linkStyle}>
            All Blogs
          </Link>

          {isLoggedIn ? (
            <>
              <span style={welcomeMessageStyle}>Welcome, {currentUser} ({userRole})!</span>
              {userRole === 'admin' && (
                <Link href="/admin" style={linkStyle}>
                  Admin Dashboard
                </Link>
              )}
              {userRole === 'user' && (
                <Link href="/user-dashboard" style={linkStyle}>
                  My Dashboard
                </Link>
              )}
              <button onClick={handleLogout} style={{ ...buttonStyle, backgroundColor: '#dc3545' }}>
                Log Out
              </button>
            </>
          ) : (
            // Link to the new dedicated login page
            <Link href="/login" style={linkAsButtonStyle}>
              Login
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

// ... (rest of the styles are the same as before)
const headerStyle: React.CSSProperties = {
  backgroundColor: '#282c34',
  color: 'white',
  padding: '1.2rem 2rem',
  borderBottom: '1px solid #444',
  boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
};

const navStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  maxWidth: '1200px',
  margin: '0 auto',
};

const logoStyle: React.CSSProperties = {
  fontSize: '1.8rem',
  fontWeight: 'bold',
};

const linksContainerStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '1.5rem',
};

const linkStyle: React.CSSProperties = {
  color: 'white',
  textDecoration: 'none',
  padding: '0.5rem 0.8rem',
  borderRadius: '5px',
  transition: 'background-color 0.2s ease',
};

const linkAsButtonStyle: React.CSSProperties = {
  padding: '0.7rem 1.2rem',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '0.9rem',
  marginLeft: '1rem',
  transition: 'background-color 0.3s ease',
  display: 'inline-block',
  textAlign: 'center',
};

const buttonStyle: React.CSSProperties = {
  padding: '0.7rem 1.2rem',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '0.9rem',
  marginLeft: '1rem',
  transition: 'background-color 0.3s ease',
};

const welcomeMessageStyle: React.CSSProperties = {
  fontSize: '1rem',
  color: '#c0c0c0',
  marginLeft: '1rem',
};


export default Header;