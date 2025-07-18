"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import {
  Home,
  Users,
  Calendar,
  BarChart3,
  FileText,
  Settings,
  HelpCircle,
} from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "Pacientes", href: "/dashboard/patients", icon: Users },
  { name: "Calendario", href: "/dashboard/calendar", icon: Calendar },
  { name: "Estadísticas", href: "/dashboard/stats", icon: BarChart3 },
  { name: "Historial", href: "/dashboard/history", icon: FileText },
];

const secondaryNavigation = [
  { name: "Configuración", href: "/dashboard/settings", icon: Settings },
  { name: "Ayuda", href: "/dashboard/help", icon: HelpCircle },
];

export function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <div className="hidden lg:flex lg:flex-shrink-0">
      <div className="flex w-64 flex-col">
        <div className="flex flex-grow flex-col overflow-y-auto border-r border-gray-200 bg-white pt-4 pb-4">
          <div className="flex flex-grow flex-col">
            <nav className="flex-1 space-y-4 px-4">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={clsx(
                      isActive
                        ? "border-r-2 border-blue-600 bg-blue-50 text-blue-700"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                      "group font-jakarta flex items-center rounded-l-md px-3 py-2 text-sm transition-colors",
                    )}
                  >
                    <item.icon
                      className={clsx(
                        isActive
                          ? "text-blue-500"
                          : "text-gray-400 group-hover:text-gray-500",
                        "font-jakarta mr-3 h-4 w-4 flex-shrink-0 transition-colors",
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="flex-shrink-0 px-4">
            <div className="border-t border-gray-200 pt-4">
              {secondaryNavigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={clsx(
                      isActive
                        ? "border-r-2 border-blue-600 bg-blue-50 text-blue-700"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                      "group flex items-center rounded-l-md px-3 py-2 text-sm font-medium transition-colors",
                    )}
                  >
                    <item.icon
                      className={clsx(
                        isActive
                          ? "text-blue-500"
                          : "text-gray-400 group-hover:text-gray-500",
                        "mr-3 h-6 w-6 flex-shrink-0 transition-colors",
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
