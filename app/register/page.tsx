"use client"; // We need this to handle the error state
import { useState } from "react";
import { registerUser } from "../actions/auth";
import Link from "next/link";

export default function RegisterPage() {
  const [error, setError] = useState<string | null>(null);

  async function clientAction(formData: FormData) {
    setError(null); // Clear previous errors
    const result = await registerUser(formData);
    
    // If the action returned an error, show it
    if (result?.error) {
      setError(result.error);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg border">
        <h2 className="text-3xl font-bold mb-6 text-center text-black">Create Account</h2>
        
        {/* Display the error message if it exists */}
        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-600 rounded-lg text-sm border border-red-200 text-center">
            {error}
          </div>
        )}

        <form action={clientAction} className="space-y-4">
          <input name="name" type="text" placeholder="Full Name" required 
            className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500 text-black" />
          <input name="email" type="email" placeholder="Email Address" required 
            className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500 text-black" />
          <input name="password" type="password" placeholder="Password" required 
            className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500 text-black" />
          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition">
            Sign Up
          </button>
        </form>
        
        <p className="mt-4 text-center text-gray-600">
          Already have an account? <Link href="/login" className="text-blue-600 hover:underline">Login here</Link>
        </p>
      </div>
    </div>
  );
}