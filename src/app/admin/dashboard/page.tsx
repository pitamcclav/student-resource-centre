'use client'

import { Card } from "@/components/ui/card"
import { DatePickerWithRange } from "@/components/ui/date-range-picker"
import {
    CircleIcon,
} from "@radix-ui/react-icons"


export default function AdminDashboard() {
    
    return (
        <div className="flex-1 overflow-auto p-8">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
                    <DatePickerWithRange />
                </div>

                {/* Dashboard Cards */}
                <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <Card className="p-6">
                        <div className="flex items-center space-x-4">
                            <CircleIcon className="h-8 w-8 text-blue-500" />
                            <div>
                                <p className="text-sm text-gray-500">Total Students</p>
                                <h3 className="text-2xl font-bold">1,234</h3>
                            </div>
                        </div>
                    </Card>
                    <Card className="p-6">
                        <div className="flex items-center space-x-4">
                            <CircleIcon className="h-8 w-8 text-green-500" />
                            <div>
                                <p className="text-sm text-gray-500">Active Resources</p>
                                <h3 className="text-2xl font-bold">56</h3>
                            </div>
                        </div>
                    </Card>
                    <Card className="p-6">
                        <div className="flex items-center space-x-4">
                            <CircleIcon className="h-8 w-8 text-purple-500" />
                            <div>
                                <p className="text-sm text-gray-500">Total Downloads</p>
                                <h3 className="text-2xl font-bold">892</h3>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Recent Activity Section */}
                <div className="mt-8">
                    <h2 className="text-xl font-semibold text-gray-900">Recent Activity</h2>
                    <Card className="mt-4 p-6">
                        <div className="space-y-4">
                            {/* Add your recent activity items here */}
                            <p className="text-gray-600">No recent activity to display</p>
                        </div>
                    </Card>
                </div>
            </div>
    )
}