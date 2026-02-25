"use server"
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";
import { cookies } from "next/headers"; // Import cookies to manage sessions

// 1. REGISTER ACTION
export async function registerUser(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    await prisma.user.create({
      data: { name, email, password: hashedPassword },
    });
  } catch (error: any) {
    console.error("Register Error:", error);
    if (error.code === 'P2002') return { error: "Email already exists." };
    return { error: "Registration failed." };
  }
  redirect("/login");
}

// 2. LOGIN ACTION
export async function loginUser(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return { error: "No user found." };

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return { error: "Invalid password." };
    
    // --- NEW: SESSION LOGIC ---
    const cookieStore = await cookies();
    // We store the user ID in a cookie named "session"
    cookieStore.set("userId", String(user.id), {
      httpOnly: true, // Security: prevents JS from reading the cookie
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: "/",
    });

  } catch (error) {
    console.error("Login error:", error);
    return { error: "Login failed." };
  }
  
  // Move redirect outside the try/catch for Next.js best practices
  redirect("/");
}

// 3. LOGOUT ACTION
export async function logoutUser() {
  const cookieStore = await cookies();
  cookieStore.delete("userId"); // Delete the cookie to log out
  redirect("/login");
}