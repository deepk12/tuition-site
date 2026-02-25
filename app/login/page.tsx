"use client";
import { useState } from "react";
import { loginUser } from "../actions/auth";
import Link from "next/link";

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function clientAction(formData: FormData) {
    setError(null);
    setLoading(true);
    
    const result = await loginUser(formData);
    
    if (result?.error) {
      setError(result.error);
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
        <h2 className="text-3xl font-bold mb-2 text-center text-gray-900">Welcome Back</h2>
        <p className="text-center text-gray-500 mb-8 text-sm">Log in to manage your tuition sessions</p>
        
        {/* Error Alert */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm">
            {error}
          </div>
        )}

        <form action={clientAction} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input 
              name="email" 
              type="email" 
              placeholder="name@example.com" 
              required 
              className="w-full p-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 text-black transition" 
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input 
              name="password" 
              type="password" 
              placeholder="••••••••" 
              required 
              className="w-full p-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 text-black transition" 
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className={`w-full py-3 rounded-xl font-bold text-white transition shadow-lg ${
              loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 shadow-blue-200"
            }`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-gray-100 text-center">
          <p className="text-gray-600">
            New student?{" "}
            <Link href="/register" className="text-blue-600 font-semibold hover:text-blue-700">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}