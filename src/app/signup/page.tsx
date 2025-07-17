// src/app/signup/page.tsx
'use client';

// Corrected import statement:
import { useState } from 'react'; // This line was "import { useState } => {"
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/layout';
 

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState<'admin' | 'user'>('user');
  const [error, setError] = useState('');

  const router = useRouter();
  const { login } = useAuth();

  // Hardcoded test users for signup (NOT SECURE FOR PROD)
  const SIGNUP_USER_USERNAME = 'newuser';
  const SIGNUP_USER_PASSWORD = 'newpassword';
  const SIGNUP_ADMIN_USERNAME = 'newadmin';
  const SIGNUP_ADMIN_PASSWORD = 'adminpass';

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!username || !password || !confirmPassword) {
      setError('All fields are required.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // Simulate signup (for demo purposes only)
    if (username === SIGNUP_USER_USERNAME && password === SIGNUP_USER_PASSWORD && role === 'user') {
      login(username, 'user'); // Auto-login after "signup"
      router.push('/');
    } else if (username === SIGNUP_ADMIN_USERNAME && password === SIGNUP_ADMIN_PASSWORD && role === 'admin') {
      login(username, 'admin'); // Auto-login after "signup"
      router.push('/');
    } else {
      setError('Signup failed. Only specific new user/admin combinations are allowed for demo purposes (e.g., newuser/newpassword, newadmin/adminpass).');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignup}>
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
          <div className="auth-form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <div className="auth-form-group">
            <label htmlFor="role">Role</label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value as 'admin' | 'user')}
              style={{ width: '100%', padding: '0.9rem 1.2rem', border: '1px solid #e0e0e0', borderRadius: '8px', fontSize: '1rem' }}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          {error && <p className="auth-error">{error}</p>}
          <button type="submit" className="auth-button">
            Sign Up
          </button>
        </form>
        <p className="toggle-auth-mode">
          Already have an account?{' '}
          <button onClick={() => router.push('/login')}>Login</button>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;