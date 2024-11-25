'use client'

import { Card } from "@/components/ui/card"
import { DatePickerWithRange } from "@/components/ui/date-range-picker"
import {
    CircleIcon,
} from "@radix-ui/react-icons"


export default function AdminDashboard() {
    
    return (
        <div className="p-4 md:p-8">
            <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
                <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">Dashboard Overview</h1>
                <div className="w-full sm:w-auto">
                    <DatePickerWithRange />
                </div>
            </div>

            {/* Dashboard Cards */}
            <div className="mt-8 grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card className="p-4 md:p-6">
                    <div className="flex items-center space-x-4">
                        <CircleIcon className="h-6 w-6 text-blue-500 md:h-8 md:w-8" />
                        <div>
                            <p className="text-sm text-gray-500">Total Students</p>
                            <h3 className="text-xl font-bold md:text-2xl">1,234</h3>
                        </div>
                    </div>
                </Card>
                <Card className="p-4 md:p-6">
                    <div className="flex items-center space-x-4">
                        <CircleIcon className="h-6 w-6 text-green-500 md:h-8 md:w-8" />
                        <div>
                            <p className="text-sm text-gray-500">Active Resources</p>
                            <h3 className="text-xl font-bold md:text-2xl">56</h3>
                        </div>
                    </div>
                </Card>
                <Card className="p-4 md:p-6">
                    <div className="flex items-center space-x-4">
                        <CircleIcon className="h-6 w-6 text-purple-500 md:h-8 md:w-8" />
                        <div>
                            <p className="text-sm text-gray-500">Total Downloads</p>
                            <h3 className="text-xl font-bold md:text-2xl">892</h3>
                        </div>
                    </div>
                </Card>
            </div>

            {/* Recent Activity Section */}
            <div className="mt-8">
                <h2 className="text-lg font-semibold text-gray-900 md:text-xl">Recent Activity</h2>
                <Card className="mt-4 p-4 md:p-6">
                    <div className="space-y-4">
                        <p className="text-gray-600">No recent activity to display</p>
                    </div>
                </Card>
            </div>
        </div>
    )
}