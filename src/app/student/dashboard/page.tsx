import React from 'react';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import {
    BookOpen,
    Bell,
    Calendar,
    ChevronRight,
    Clock,
    CheckCircle2
} from 'lucide-react';

export default function Dashboard() {
    const courseProgress = 68;
    const assignments = [
        { id: 1, title: 'Mathematics Assignment', due: '2 days' },
        { id: 2, title: 'Physics Lab Report', due: '5 days' }
    ];
    const notifications = [
        { id: 1, title: 'New course material available', time: '2 hours ago' },
        { id: 2, title: 'Assignment deadline reminder', time: '1 day ago' }
    ];

    return (
        <div className="w-full">
            {/* Dashboard Header */}
            <div className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:justify-between sm:space-y-0 mb-6">
                <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">Student Dashboard</h1>
                <p className="text-sm text-gray-500">Welcome back!</p>
            </div>

            {/* Dashboard Grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {/* Course Progress Card */}
                <Card className="flex flex-col h-full">
                    <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                        <BookOpen className="h-5 w-5 text-blue-500 flex-shrink-0" />
                        <h2 className="text-lg font-semibold sm:text-xl">Course Progress</h2>
                    </CardHeader>
                    <CardContent className="flex-1">
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span>Overall Completion</span>
                                    <span className="font-medium">{courseProgress}%</span>
                                </div>
                                <Progress value={courseProgress} className="h-2" />
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center text-sm text-gray-500">
                                    <CheckCircle2 className="h-4 w-4 mr-2 text-green-500 flex-shrink-0" />
                                    <span>4 of 6 modules completed</span>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="border-t pt-4">
                        <Button className="w-full">
                            Continue Learning
                            <ChevronRight className="h-4 w-4 ml-2" />
                        </Button>
                    </CardFooter>
                </Card>

                {/* Assignments Card */}
                <Card className="flex flex-col h-full">
                    <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                        <Calendar className="h-5 w-5 text-orange-500 flex-shrink-0" />
                        <h2 className="text-lg font-semibold sm:text-xl">Upcoming Assignments</h2>
                    </CardHeader>
                    <CardContent className="flex-1">
                        <div className="space-y-4">
                            {assignments.map(assignment => (
                                <div
                                    key={assignment.id}
                                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 rounded-lg bg-gray-50 space-y-2 sm:space-y-0"
                                >
                                    <div className="flex items-center space-x-3">
                                        <Clock className="h-4 w-4 text-gray-400 flex-shrink-0" />
                                        <span className="text-sm font-medium">{assignment.title}</span>
                                    </div>
                                    <span className="text-xs text-gray-500">Due in {assignment.due}</span>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                    <CardFooter className="border-t pt-4">
                        <Button variant="outline" className="w-full">
                            View All Assignments
                        </Button>
                    </CardFooter>
                </Card>

                {/* Notifications Card */}
                <Card className="flex flex-col h-full">
                    <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                        <Bell className="h-5 w-5 text-purple-500 flex-shrink-0" />
                        <h2 className="text-lg font-semibold sm:text-xl">Notifications</h2>
                    </CardHeader>
                    <CardContent className="flex-1">
                        <div className="space-y-4">
                            {notifications.map(notification => (
                                <div key={notification.id} className="space-y-1 p-3 rounded-lg bg-gray-50">
                                    <p className="text-sm font-medium">{notification.title}</p>
                                    <p className="text-xs text-gray-500">{notification.time}</p>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                    <CardFooter className="border-t pt-4">
                        <Button variant="outline" className="w-full">
                            See All Notifications
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}