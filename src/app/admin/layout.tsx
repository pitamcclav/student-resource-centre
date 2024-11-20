'use client'
import { ScrollArea } from "@/components/ui/scroll-area"
import { DashboardIcon, ExitIcon, PersonIcon } from "@radix-ui/react-icons"
import { BookOpenIcon, Library, SettingsIcon } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function AdminLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    const router = useRouter()
    async function handleLogout() {
        try {
            // Clear session cookies
            document.cookie = "session=; Max-Age=0; path=/; secure; sameSite=strict"
    
            // Redirect to login page
            router.push("/auth/admin")
        } catch (error) {
            console.error("Failed to logout:", error)
        }
    }
    return <section>
         <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-lg">
                <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-800">Admin Panel</h2>
                </div>
                <ScrollArea className="h-[calc(100vh-100px)]">
                    <div className="space-y-2 p-4">
                        <Link href="/admin/dashboard" className="flex items-center space-x-3 rounded-lg px-3 py-2 hover:bg-gray-100">
                            <DashboardIcon className="h-5 w-5" />
                            <span>Dashboard</span>
                        </Link>
                        <Link href="/admin/students" className="flex items-center space-x-3 rounded-lg px-3 py-2 hover:bg-gray-100">
                            <PersonIcon className="h-5 w-5" />
                            <span>Students</span>
                        </Link>
                        <Link href="/admin/categories" className="flex items-center space-x-3 rounded-lg px-3 py-2 hover:bg-gray-100">
                            <Library className="h-5 w-5" />
                            <span>Categories</span>
                        </Link>
                        <Link href="/admin/resources" className="flex items-center space-x-3 rounded-lg px-3 py-2 hover:bg-gray-100">
                            <BookOpenIcon className="h-5 w-5" />
                            <span>Resources</span>
                        </Link>
                        <Link href="/admin/programs" className="flex items-center space-x-3 rounded-lg px-3 py-2 hover:bg-gray-100">
                            <SettingsIcon className="h-5 w-5" />
                            <span>Programs</span>
                        </Link>
                        <button
                            onClick={handleLogout} 
                        className="flex w-full items-center space-x-3 rounded-lg px-3 py-2 text-red-600 hover:bg-red-50">
                            <ExitIcon className="h-5 w-5" />
                            <span>Logout</span>
                        </button>
                    </div>
                </ScrollArea>
            </div>
            {/* Main Content */}
        {children}
            

           
            
        </div>
        
        </section>
  }