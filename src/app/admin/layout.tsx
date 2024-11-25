'use client'
import { ScrollArea } from "@/components/ui/scroll-area"
import { DashboardIcon, ExitIcon, PersonIcon } from "@radix-ui/react-icons"
import { BookOpenIcon, Library, SettingsIcon, Menu, X } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function AdminLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const router = useRouter()

    async function handleLogout() {
        try {
            document.cookie = "session=; Max-Age=0; path=/; secure; sameSite=strict"
            router.push("/auth/admin")
        } catch (error) {
            console.error("Failed to logout:", error)
        }
    }

    const NavLink = ({ href, icon: Icon, children }: { href: string; icon: any; children: React.ReactNode }) => (
        <Link
            href={href}
            className="flex items-center space-x-3 rounded-lg px-3 py-2 hover:bg-gray-100"
            onClick={() => setSidebarOpen(false)}
        >
            <Icon className="h-5 w-5" />
            <span>{children}</span>
        </Link>
    )

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Mobile menu button */}
            <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="fixed left-4 top-4 z-50 rounded-md bg-white p-2 shadow-lg lg:hidden"
            >
                {sidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            {/* Sidebar */}
            <aside className={`fixed inset-y-0 z-40 w-64 transform bg-white shadow-lg transition-transform duration-200 ease-in-out lg:relative lg:translate-x-0 ${
                sidebarOpen ? 'translate-x-0' : '-translate-x-full'
            }`}>
                <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-800">Admin Panel</h2>
                </div>
                <ScrollArea className="h-[calc(100vh-100px)]">
                    <div className="space-y-2 p-4">
                        <NavLink href="/admin/dashboard" icon={DashboardIcon}>Dashboard</NavLink>
                        <NavLink href="/admin/students" icon={PersonIcon}>Students</NavLink>
                        <NavLink href="/admin/categories" icon={Library}>Categories</NavLink>
                        <NavLink href="/admin/resources" icon={BookOpenIcon}>Resources</NavLink>
                        <NavLink href="/admin/programs" icon={SettingsIcon}>Programs</NavLink>
                        <button
                            onClick={handleLogout}
                            className="flex w-full items-center space-x-3 rounded-lg px-3 py-2 text-red-600 hover:bg-red-50"
                        >
                            <ExitIcon className="h-5 w-5" />
                            <span>Logout</span>
                        </button>
                    </div>
                </ScrollArea>
            </aside>

            {/* Main content */}
            <main className="flex-1 overflow-auto">
                {children}
            </main>

            {/* Overlay for mobile */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 z-30 bg-gray-600 bg-opacity-50 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}
        </div>
    )
}