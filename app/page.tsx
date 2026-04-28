import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import { GameWrapper } from '@/components/game/GameWrapper';
import '@/styles/game.css';
import '@/styles/auth.css';

export default async function Home() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect('/auth/login');
  }

  return <GameWrapper user={user} />;
}
