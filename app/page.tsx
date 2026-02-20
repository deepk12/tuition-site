// app/page.tsx
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Existing Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-4 bg-gray-50">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
          Master Your Subjects with <span className="text-blue-600">Expert Tuition</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mb-8">
          Personalized 1-on-1 online sessions to help you ace your exams and build confidence.
        </p>
        <Link href="/courses" className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700">
          Browse Subjects
        </Link>
      </section>

      {/* NEW: About Me Section */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left: Your Image */}
          <div className="relative h-[400px] w-full bg-gray-200 rounded-2xl overflow-hidden shadow-xl">
             {/* Replace the src with your actual photo path later */}
             <div className="flex items-center justify-center h-full text-gray-400 italic">
                [Your Photo Here]
             </div>
          </div>

          {/* Right: Your Story & Stats */}
          <div>
            <h3 className="text-blue-600 font-bold uppercase tracking-wider mb-2">About Your Tutor</h3>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Helping students reach their full potential since 2018</h2>
            
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Hi, I'm [Your Name]! I specialize in making complex subjects simple. With a 
              background in [Your Degree/Field], I've helped over 200+ students achieve 
              their target grades through tailored learning plans.
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="text-2xl font-bold text-gray-900">5+ Years</h4>
                <p className="text-gray-500">Experience</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="text-2xl font-bold text-gray-900">98%</h4>
                <p className="text-gray-500">Pass Rate</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="text-2xl font-bold text-gray-900">PhD / Masters</h4>
                <p className="text-gray-500">Qualified</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="text-2xl font-bold text-gray-900">Online</h4>
                <p className="text-gray-500">Global Classes</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}