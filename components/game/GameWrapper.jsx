"use client";

import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';
import { Game } from './Game';

export function GameWrapper({ user }) {
  const router = useRouter();

  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
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
            {getInitial(user.email)}
          </div>
          <span className="user-email">{user.email}</span>
        </div>
        <button onClick={handleLogout} className="logout-button">
          Sign Out
        </button>
      </div>
      <Game />
    </div>
  );
}
