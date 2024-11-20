'use client';

import { DashboardIcon, ExitIcon, PersonIcon } from '@radix-ui/react-icons';
import { BookOpenIcon, Library } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';

export default function StudentLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  async function handleLogout() {
    try {
      document.cookie = 'session=; Max-Age=0; path=/; secure; sameSite=strict';
      router.push('/');
    } catch (error) {
      console.error('Failed to logout:', error);
    }
  }

  return (
    <section className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow-md">
        <div className="p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-800">Student Panel</h2>
        </div>

        {/* Navigation */}
        <div className="p-4">
          <NavigationMenu>
            <NavigationMenuList className="space-x-4">
              <NavigationMenuItem>
                <Link href="/student/dashboard" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <DashboardIcon className="mr-2 h-5 w-5" />
                    Dashboard
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/student/favourites" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <BookOpenIcon className="mr-2 h-5 w-5" />
                    Favorites
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/student/resources" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <Library className="mr-2 h-5 w-5" />
                    Resources
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/student/profile" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <PersonIcon className="mr-2 h-5 w-5" />
                    Profile
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <button
                  onClick={handleLogout}
                  className={navigationMenuTriggerStyle()}
                >
                  <ExitIcon className="mr-2 h-5 w-5" />
                  Logout
                </button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto p-6">{children}</div>
    </section>
  );
}
