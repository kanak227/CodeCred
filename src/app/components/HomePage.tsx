"use client";
import { signIn } from "next-auth/react";

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">👨‍💻 CodeCred</h1>
        <p className="text-lg mb-6">Your Verified Developer Footprint</p>
        <button
          onClick={() => signIn("github")}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold"
        >
          Sign in with GitHub
        </button>
      </div>
    </main>
  );
}
