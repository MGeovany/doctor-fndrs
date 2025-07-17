"use client";

import React from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";
import { Button } from "@/components/ui/Button";
import {
  BellIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";

export function DashboardNavbar() {
  const { logout, currentDoctor } = useApp();

  return (
    <nav className="fixed top-0 right-0 left-0 z-30 border-b border-gray-200 bg-white shadow-sm">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
              <span className="text-lg font-bold text-white">D</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Dctrs.</span>
            <span className="ml-2 text-sm text-gray-500">Dashboard</span>
          </Link>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <button className="relative p-2 text-gray-500 transition-colors hover:text-gray-700">
              <BellIcon className="h-6 w-6" />
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
            </button>

            {/* Settings */}
            <button className="p-2 text-gray-500 transition-colors hover:text-gray-700">
              <Cog6ToothIcon className="h-6 w-6" />
            </button>

            {/* Doctor info and logout */}
            <div className="flex items-center space-x-3 border-l border-gray-200 pl-4">
              <div className="text-right">
                <div className="text-sm font-medium text-gray-900">
                  {currentDoctor?.name}
                </div>
                <div className="text-xs text-gray-500">
                  {currentDoctor?.specialty}
                </div>
              </div>

              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                <span className="text-sm font-medium text-blue-600">
                  {currentDoctor?.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>

              <Button
                variant="ghost"
                size="sm"
                onClick={logout}
                className="text-gray-500 hover:text-red-600"
              >
                <ArrowRightOnRectangleIcon className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
