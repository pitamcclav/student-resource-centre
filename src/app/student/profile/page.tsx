'use client';

import { Card } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

export default function StudentProfile() {
  return (
    <div className="flex justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        {/* Profile Header */}
        <div className="flex flex-col items-center text-center">
          <Avatar className="mb-4">
            <AvatarImage
              src="https://randomuser.me/api/portraits/men/10.jpg"
              alt="John Doe"
            />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <h5 className="text-lg font-semibold">John Doe</h5>
          <p className="text-sm text-gray-600">johndoe@example.com</p>
          <Button className="mt-4">Edit Profile</Button>
        </div>

        {/* About Section */}
        <div className="mt-6">
          <h6 className="text-lg font-medium mb-2">About Me</h6>
          <p className="text-sm text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam.
          </p>
        </div>
      </Card>
    </div>
  );
}
