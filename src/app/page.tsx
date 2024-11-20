'use client'

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import { loginUser } from "./auth/login/actions";


export default function LoginPage() {
  
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const result = await loginUser(formData);

    if (result.success) {
      router.push('/student/dashboard');
    } else {
      // Handle specific errors
      setError('general' in result.error ? result.error.general : 'Login failed');
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen p-8 bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 sm:p-8 dark:bg-gray-800">
        {/* Header Section */}
        {error && (
                        <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg" role="alert">
                            {typeof error === "string" ? error : "Please fix the highlighted fields."}
                        </div>
                        )}
        <div className="text-center mb-6">
          <Image
            src="/file.svg"
            alt="Students Resource Centre Logo"
            width={100}
            height={100}
            className="mx-auto"
          />
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            Welcome Back!
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Log in to access your resources.
          </p>
        </div>

        {/* Login Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Email Input */}
          <div>
            <Label
              htmlFor="studentNo"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Student Number
            </Label>
            <Input
              type="text"
              id="studentNo"
              name="studentNo"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="Student Number"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <Label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Password
            </Label>
            <Input
              type="password"
              id="password"
              name="password"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Login Button */}
          <Button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            Log In
          </Button>
        </form>

        {/* Forgot Password and Signup Links */}
        <div className="text-sm text-center text-gray-600 dark:text-gray-400 mt-4">
          <Link href="/auth/forgot_password" className="text-blue-600 hover:underline dark:text-blue-400">
          
              Forgot password?
       
            </Link>
          
        </div>
        <div className="text-sm text-center text-gray-600 dark:text-gray-400 mt-2">
          Don’t have an account?{" "}
          <Link href="/auth/register" className="text-blue-600 hover:underline dark:text-blue-400">
              Sign up
          </Link>
        </div>
        <Button className="w-full bg-red-100 text-grey-300  py-2 px-4 rounded-md hover:bg-red-300 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:bg-red-500 dark:hover:bg-red-600">
          <Link href="/auth/admin">
          SignIn as Admin
          </Link>
        </Button>
      </div>
    </div>
  );
}
