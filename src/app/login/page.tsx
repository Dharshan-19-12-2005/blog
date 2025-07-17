// src/app/login/page.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/layout';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const router = useRouter();
  const { login } = useAuth();

  // Hardcoded credentials (NOT SECURE FOR PROD)
  const ADMIN_USERNAME = 'admin';
  const ADMIN_PASSWORD = 'adminpassword';

  const USER_USERNAME = 'user';
  const USER_PASSWORD = 'userpassword';

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!username || !password) {
      setError('Username and password cannot be empty.');
      return;
    }

    let loggedInRole: 'admin' | 'user' | null = null;

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      loggedInRole = 'admin';
    } else if (username === USER_USERNAME && password === USER_PASSWORD) {
      loggedInRole = 'user';
    }

    if (loggedInRole) {
      login(username, loggedInRole);
      router.push('/'); // Redirect to home page
    } else {
      setError('Invalid username or password.');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="auth-form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="auth-form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="auth-error">{error}</p>}
          <button type="submit" className="auth-button">
            Login
          </button>
        </form>
        <p className="toggle-auth-mode">
          Don't have an account?{' '}
          <button onClick={() => router.push('/signup')}>Sign Up</button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;