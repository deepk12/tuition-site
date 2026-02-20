// app/courses/[id]/page.tsx
import { courses } from '@/data/courses';
import { notFound } from 'next/navigation';
import BookingForm from '@/components/BookingForm';
import Navbar from '@/components/Navbar';

// Correct way to handle params in Next.js 15+
export default async function CourseDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; // Wait for the ID to be available
  
  const course = courses.find((c) => c.id === parseInt(id));

  if (!course) return notFound();

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <span className="text-4xl">{course.icon}</span>
          <h1 className="text-4xl font-extrabold mt-4 mb-4">{course.title}</h1>
          <p className="text-gray-600 text-lg mb-6">{course.description}</p>
        </div>
        <BookingForm 
  courseTitle={course.title} 
  courseId={course.id} 
/>
      </div>
    </main>
  );
}