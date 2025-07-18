"use client";

import React, { useState } from "react";
import { DashboardSidebar } from "./DashboardSidebar";
import { DashboardNavbar } from "./DashboardNavbar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <DashboardNavbar onOpenSidebar={() => setSidebarOpen(true)} />
      <div className="flex">
        {/* Sidebar drawer for mobile */}
        <div
          className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-200 lg:hidden ${sidebarOpen ? "block" : "hidden"}`}
          onClick={() => setSidebarOpen(false)}
        />
        <div
          className={`fixed top-0 left-0 z-50 h-full w-64 transform border-r border-gray-200 bg-white shadow-lg transition-transform duration-300 lg:static lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:flex-shrink-0`}
        >
          <DashboardSidebar onClose={() => setSidebarOpen(false)} />
        </div>
        <main className="w-full flex-1 lg:ml-0">
          <div className="p-3 sm:p-6">{children}</div>
        </main>
      </div>
    </div>
  );
}
