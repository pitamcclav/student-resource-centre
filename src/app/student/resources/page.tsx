import React from 'react';

const ResourcesPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="container mx-auto">
                <h1 className="text-4xl font-bold text-center mb-8">Student Resources</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold mb-2">Resource 1</h2>
                        <p className="text-gray-700">Description of resource 1.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold mb-2">Resource 2</h2>
                        <p className="text-gray-700">Description of resource 2.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold mb-2">Resource 3</h2>
                        <p className="text-gray-700">Description of resource 3.</p>
                    </div>
                    {/* Add more resources as needed */}
                </div>
            </div>
        </div>
    );
};

export default ResourcesPage;