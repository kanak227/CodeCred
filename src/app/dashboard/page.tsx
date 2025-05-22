'use client';

import { useSession, signOut } from 'next-auth/react'; // Added signOut import
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Link from 'next/link';

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/');
    }
  }, [status, router]);

  if (status === 'loading') {
    return <div className="flex items-center justify-center min-h-screen">
      <p>Loading...</p>
    </div>;
  }

  if (!session) {
    return null; // Will redirect in useEffect
  }

  const user = session.user;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <header className="flex items-center space-x-4 mb-8">
        <img
          src={user?.image || ''}
          alt="User avatar"
          className="w-16 h-16 rounded-full"
        />
        <div>
          <h1 className="text-2xl font-bold">Welcome, {user?.name || user?.email}!</h1>
          <p className="text-gray-600">Glad to see you back.</p>
        </div>
      </header>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Your Score</h2>
        <p className="text-3xl font-bold">0 points</p> {/* Replace with real score */}
      </section>

      <nav className="mb-6 space-x-4">
        <Link href="/profile" className="text-blue-600 hover:underline">
          Profile
        </Link>
        <Link href="/leaderboard" className="text-blue-600 hover:underline">
          Leaderboard
        </Link>
        <Link href="/settings" className="text-blue-600 hover:underline">
          Settings
        </Link>
      </nav>

      <button
        onClick={() => {
          signOut({ callbackUrl: '/' })
            .catch((error) => {
              console.error('Error during sign out:', error);
            });
        }}
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
      >
        Logout
      </button>
    </div>
  );
}
