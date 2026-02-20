import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
        <div className="bg-green-100 text-green-600 w-20 h-20 rounded-full flex items-center justify-center text-4xl mb-6">
          ✓
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Booking Received!</h1>
        <p className="text-gray-600 max-w-md mb-8">
          Thank you for reaching out. I have received your request and will email you within 24 hours to confirm our first session.
        </p>
        <Link href="/" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
          Back to Home
        </Link>
      </div>
    </main>
  );
}