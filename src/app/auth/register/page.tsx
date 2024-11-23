'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import { ProgramSelector } from "@/components/custom/program/program-selector";
import { registerUser } from "./actions";



export default function RegisterPage() {

    const [error, setError] = useState<string | null>(null);
    const [programId, setProgramId] = useState<number | null>(null);
    const router = useRouter();

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        if (programId === null) {
            setError("Please select a program");
            return;
          }
          formData.set("programId", programId.toString());
        console.log('form data entries:', Array.from((formData as any).entries()));

        const result = await registerUser(formData);

        if (result.success) {
            // Redirect to login or dashboard
            router.push('/student/dashboard');
            
            // Handle validation errors
        } else {
            setError('general' in result.error ? result.error.general : 'Registration failed');
        }
        
    }
    return (
        
        <div className="flex items-center justify-center min-h-screen p-8 bg-gray-50 dark:bg-gray-900">
            
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 sm:p-8 dark:bg-gray-800">
                {/* Header Section */}
                <div className="text-center mb-6">

                    <Image
                        src="/file.svg"
                        alt="Students Resource Centre Logo"
                        width={100}
                        height={100}
                        className="mx-auto"
                    />
                    <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
                        Register
                    </h1>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        Register to access your resources.
                    </p>
                </div>
                    
                    {/* Register Form */}
                    <form className="space-y-4" onSubmit={handleSubmit}>
                    {error && (
                        <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg" role="alert">
                            {typeof error === "string" ? error : "Please fix the highlighted fields."}
                        </div>
                        )}

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

                        {/* Email Input */}
                        <div>
                            <Label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                            >
                            Email
                            </Label>
                            <Input
                            type="email"
                            id="email"
                            name="email"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                            placeholder="Email Address"
                            required
                            />
                        </div>

                        {/*Course Input */}
                        <div>
                            <Label
                            htmlFor="course"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                            >
                            Course
                            </Label>
                            <ProgramSelector onSelectAction={setProgramId} />
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
                        <div>
                            <Label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                            >
                            Confirm Password
                            </Label>
                            <Input
                            type="password"
                            id="password"
                            name="confirmPassword"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                            placeholder="Confirm your password"
                            required
                            />
                        </div>
                        
                        {/* Register Button */}
                        <Button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-500 dark:hover:bg-blue-600"
                        >Register
                        </Button>
                    </form>
                </div>
            </div>
);
}