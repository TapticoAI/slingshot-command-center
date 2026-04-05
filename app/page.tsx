'use client';

import { useState, useEffect } from 'react';
import LoginPage from '@/components/LoginPage';
import GuidePage from '@/components/GuidePage';

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const authStatus = sessionStorage.getItem('slingshot_auth');
    if (authStatus === 'authenticated') {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const handleLogin = () => {
    sessionStorage.setItem('slingshot_auth', 'authenticated');
    setIsAuthenticated(true);
  };

  if (isLoading) {
    return (
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0d0d4a 0%, #1a1a6e 50%, #2c3e8c 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{ color: '#7b8cde', fontSize: '14px' }}>Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return <GuidePage />;
}
