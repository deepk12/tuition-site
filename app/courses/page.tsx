// app/courses/page.tsx
import prisma from '@/lib/prisma';
import Link from 'next/link';

export default async function CoursesPage() {
  // Fetch from MySQL!
  const courses = await prisma.course.findMany();

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-6">Available Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="border p-4 rounded-xl shadow">
            <h2 className="text-xl font-bold">{course.title}</h2>
            <p className="text-blue-600 font-bold">${Number(course.price)}</p>
            <Link href={`/courses/${course.id}`}>
              <button className="mt-4 bg-black text-white px-4 py-2 rounded">View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}