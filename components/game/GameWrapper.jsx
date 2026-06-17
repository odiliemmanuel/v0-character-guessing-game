"use client";

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Game } from './Game';

export function GameWrapper() {
  const router = useRouter();
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    // Get email from localStorage (set during login)
    const email = localStorage.getItem('userEmail');
    if (!email) {
      router.push('/auth/login');
    } else {
      setUserEmail(email);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('userEmail');
    router.push('/auth/login');
    router.refresh();
  };

  const getInitial = (email) => {
    return email ? email.charAt(0).toUpperCase() : '?';
  };

  return (
    <div className="game-page">
      <div className="user-header">
        <div className="user-info">
          <div className="user-avatar">
            {getInitial(userEmail)}
          </div>
          <span className="user-email">{userEmail}</span>
        </div>
        <button onClick={handleLogout} className="logout-button">
          Sign Out
        </button>
      </div>
      {userEmail && <Game />}
    </div>
  );
}
