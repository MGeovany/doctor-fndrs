"use client";

import React from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";
import { Button } from "@/components/ui/Button";
import { Bell, Settings, LogOut, Menu } from "lucide-react";

export function DashboardNavbar({
  onOpenSidebar,
}: {
  onOpenSidebar?: () => void;
}) {
  const { logout, currentDoctor } = useApp();

  return (
    <nav className="fixed top-0 right-0 left-0 z-30 border-b border-gray-200 bg-white/95 backdrop-blur-sm">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Left side - Menu button and logo */}
          <div className="flex items-center space-x-3">
            {/* Mobile sidebar button */}
            {onOpenSidebar && (
              <button
                className="flex items-center justify-center rounded-lg p-2 text-gray-700 transition-colors hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-inset lg:hidden"
                onClick={onOpenSidebar}
                aria-label="Abrir menú"
              >
                <Menu className="h-5 w-5" />
              </button>
            )}

            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-black shadow-sm">
                <span className="text-lg font-bold text-white">D</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Dctrs.</span>
              <span className="font-jakarta ml-2 hidden text-sm text-gray-500 sm:inline">
                DASHBOARD
              </span>
            </Link>
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Notifications */}
            <button className="relative rounded-lg p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none">
              <Bell className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-500"></span>
            </button>

            {/* Settings */}
            <button className="rounded-lg p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none">
              <Settings className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>

            {/* Doctor info and logout */}
            <div className="flex items-center space-x-3 border-l border-gray-200 pl-3 sm:pl-4">
              {/* Doctor info - hidden on mobile */}
              <div className="hidden text-right sm:block">
                <div className="text-sm font-medium text-gray-900">
                  {currentDoctor?.name}
                </div>
                <div className="font-outfit text-xs text-gray-500">
                  {currentDoctor?.specialty}
                </div>
              </div>

              {/* Doctor avatar */}
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black shadow-sm">
                <span className="text-xs font-bold text-white">
                  {currentDoctor?.name
                    ?.split(" ")
                    .map((n) => n[0])
                    .join("")
                    .toUpperCase() ?? "DR"}
                </span>
              </div>

              {/* Logout button */}
              <Button
                variant="ghost"
                size="sm"
                onClick={logout}
                className="rounded-lg text-gray-500 transition-colors hover:bg-red-50 hover:text-red-600 focus:ring-2 focus:ring-red-500 focus:outline-none"
              >
                <LogOut className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
