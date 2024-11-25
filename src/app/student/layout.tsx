'use client';

import React, { useState } from 'react';
import { DashboardIcon, ExitIcon, PersonIcon } from '@radix-ui/react-icons';
import { BookOpenIcon, Library, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function StudentLayout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  async function handleLogout() {
    try {
      document.cookie = 'session=; Max-Age=0; path=/; secure; sameSite=strict';
      router.push('/');
    } catch (error) {
      console.error('Failed to logout:', error);
    }
  }

  const NavItem = ({ href, icon: Icon, children, onClick }: {
    href?: string;
    icon: any;
    children: React.ReactNode;
    onClick?: () => void;
  }) => {
    const content = (
        <div className="flex items-center w-full">
          <Icon className="mr-2 h-5 w-5" />
          <span className="flex-1">{children}</span>
        </div>
    );

    if (onClick) {
      return (
          <button
              onClick={() => {
                onClick();
                setIsMenuOpen(false);
              }}
              className={cn(
                  navigationMenuTriggerStyle(),
                  "w-full justify-start text-left hover:bg-gray-100 transition-colors"
              )}
          >
            {content}
          </button>
      );
    }

    return (
        <Link href={href!} legacyBehavior passHref>
          <NavigationMenuLink
              className={cn(
                  navigationMenuTriggerStyle(),
                  "w-full justify-start hover:bg-gray-100 transition-colors"
              )}
              onClick={() => setIsMenuOpen(false)}
          >
            {content}
          </NavigationMenuLink>
        </Link>
    );
  };

  return (
      <div className="min-h-screen bg-gray-100 flex flex-col">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white shadow-sm">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between px-4 py-4 md:px-6">
              <div className="flex items-center space-x-4">
                <h2 className="text-xl font-bold text-gray-800 md:text-2xl">Student Panel</h2>
              </div>

              {/* Mobile menu button */}
              <Button
                  variant="ghost"
                  size="icon"
                  className="block md:hidden"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                    <X className="h-6 w-6" />
                ) : (
                    <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:block border-t">
              <div className="max-w-7xl mx-auto px-4 md:px-6">
                <NavigationMenu className="w-full">
                  <NavigationMenuList className="flex space-x-1">
                    <NavigationMenuItem>
                      <NavItem href="/student/dashboard" icon={DashboardIcon}>Dashboard</NavItem>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavItem href="/student/favourites" icon={BookOpenIcon}>Favorites</NavItem>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavItem href="/student/resources" icon={Library}>Resources</NavItem>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavItem href="/student/profile" icon={PersonIcon}>Profile</NavItem>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavItem icon={ExitIcon} onClick={handleLogout}>Logout</NavItem>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
            </nav>
          </div>
        </header>

        {/* Mobile Navigation Dropdown */}
        <div
            className={cn(
                "md:hidden",
                "absolute top-[65px] left-0 right-0 bg-white shadow-lg",
                "transition-[max-height] duration-300 ease-in-out overflow-hidden",
                isMenuOpen ? "max-h-[400px]" : "max-h-0"
            )}
        >
          <nav className="px-4 py-2">
            <NavigationMenu className="w-full">
              <NavigationMenuList className="flex flex-col space-y-1">
                <NavigationMenuItem className="w-full">
                  <NavItem href="/student/dashboard" icon={DashboardIcon}>Dashboard</NavItem>
                </NavigationMenuItem>
                <NavigationMenuItem className="w-full">
                  <NavItem href="/student/favourites" icon={BookOpenIcon}>Favorites</NavItem>
                </NavigationMenuItem>
                <NavigationMenuItem className="w-full">
                  <NavItem href="/student/resources" icon={Library}>Resources</NavItem>
                </NavigationMenuItem>
                <NavigationMenuItem className="w-full">
                  <NavItem href="/student/profile" icon={PersonIcon}>Profile</NavItem>
                </NavigationMenuItem>
                <NavigationMenuItem className="w-full">
                  <NavItem icon={ExitIcon} onClick={handleLogout}>Logout</NavItem>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
        </div>

        {/* Main Content */}
        <main className="flex-1 w-full">
          <div className="max-w-7xl mx-auto px-4 py-6 md:px-6">
            {children}
          </div>
        </main>
      </div>
  );
}