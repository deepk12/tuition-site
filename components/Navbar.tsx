import { cookies } from "next/headers";
import Link from "next/link";
import { logoutUser } from "@/app/actions/auth";

export default async function Navbar() {
  const cookieStore = await cookies();
  const isLoggedIn = cookieStore.has("session");

  return (
    <nav className="flex justify-between items-center p-6 bg-white shadow-sm">
      <Link href="/" className="text-2xl font-bold text-blue-600">TutorPro</Link>
      
      <div className="space-x-6 flex items-center">
        <Link href="/courses" className="text-gray-600 hover:text-blue-600">Courses</Link>
        
        {isLoggedIn ? (
          <form action={logoutUser}>
            <button type="submit" className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition">
              Logout
            </button>
          </form>
        ) : (
          <Link href="/login" className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}