// components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 border-b bg-white">
      <h1 className="text-2xl font-bold text-blue-600">TutorPro</h1>
      <div className="space-x-6">
        <Link href="/" className="hover:text-blue-500">Home</Link>
        <Link href="/courses" className="hover:text-blue-500">Courses</Link>
        <Link href="/login" className="bg-blue-600 text-white px-4 py-2 rounded-lg">Login</Link>
      </div>
    </nav>
  );
}