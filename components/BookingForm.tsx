"use client";
import { handleBooking } from '../app/actions/booking';

// Add courseId to the props interface
export default function BookingForm({ 
  courseTitle, 
  courseId 
}: { 
  courseTitle: string; 
  courseId: number; 
}) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
      <h3 className="text-2xl font-bold mb-4 text-gray-800">Book {courseTitle}</h3>
      
      <form action={handleBooking} className="space-y-4">
        
        {/* HIDDEN INPUTS: These send extra data to your Server Action */}
        <input type="hidden" name="courseTitle" value={courseTitle} />
        <input type="hidden" name="courseId" value={courseId} />

        <div>
          <label className="block text-sm font-medium text-gray-700">Full Name</label>
          <input name="studentName" type="text" required className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-black" />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Email Address</label>
          <input name="studentEmail" type="email" required className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-black" />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Preferred Date</label>
          <input name="date" type="date" required className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-black" />
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition">
          Confirm Booking
        </button>
      </form>
    </div>
  );
}