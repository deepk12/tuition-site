"use server"
import prisma from "@/lib/prisma";
import { redirect } from 'next/navigation';

export async function handleBooking(formData: FormData) {
  const studentName = formData.get("studentName") as string;
  const studentEmail = formData.get("studentEmail") as string;
  const bookingDate = formData.get("date") as string;
  const courseId = Number(formData.get("courseId")); // Convert string ID to Number

  try {
    await prisma.booking.create({
      data: {
        studentName,
        studentEmail,
        date: new Date(bookingDate),
        // Relational connection:
        course: {
          connect: { id: courseId }
        }
      },
    });
  } catch (error) {
    console.error("Database Error:", error);
    return;
  }

  redirect('/booking-success');
}