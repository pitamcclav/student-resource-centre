import React from 'react';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';


export default function Dashboard() {
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold mb-6">Student Dashboard</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card className="bg-white shadow-md rounded-lg">
                        <CardHeader className="p-4 border-b">
                            <h2 className="text-xl font-semibold">Course Progress</h2>
                        </CardHeader>
                        <CardContent className="p-4">
                            <p>Track your course progress here.</p>
                        </CardContent>
                        <CardFooter className="p-4 border-t">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded">View Details</button>
                        </CardFooter>
                    </Card>
                    <Card className="bg-white shadow-md rounded-lg">
                        <CardHeader className="p-4 border-b">
                            <h2 className="text-xl font-semibold">Upcoming Assignments</h2>
                        </CardHeader>
                        <CardContent className="p-4">
                            <p>Check your upcoming assignments.</p>
                        </CardContent>
                        <CardFooter className="p-4 border-t">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded">View Details</button>
                        </CardFooter>
                    </Card>
                    <Card className="bg-white shadow-md rounded-lg">
                        <CardHeader className="p-4 border-b">
                            <h2 className="text-xl font-semibold">Notifications</h2>
                        </CardHeader>
                        <CardContent className="p-4">
                            <p>Stay updated with the latest notifications.</p>
                        </CardContent>
                        <CardFooter className="p-4 border-t">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded">View Details</button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    );
};

