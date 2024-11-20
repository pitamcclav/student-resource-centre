import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Label} from "@radix-ui/react-label";


export default function ForgotPasswordPage() {
    return (
        <div className="flex h-screen items-center justify-center">
        <div className="w-full max-w-md space-y-6 rounded-lg bg-white p-8 shadow-lg">
            <div className="text-center">
                <h1 className="text-2xl font-bold text-gray-900">Forgot Password</h1>
                <p className="mt-2 text-sm text-gray-600">
                    Enter your email address and we'll send you a link to reset your password.
                </p>
            </div>
            <form className="space-y-4">
                <div>
                    <Label className="block text-sm font-medium text-gray-700" htmlFor="email">
                        Email address
                    </Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    />
                </div>
                <Button
                    type="submit"
                    className="w-full rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    Reset Password
                </Button>
                <div className="text-center">
                    <a href="/" className="text-sm text-indigo-600 hover:text-indigo-500">
                        Back to login
                    </a>
                </div>
            </form>
        </div>
    </div>

)}
  