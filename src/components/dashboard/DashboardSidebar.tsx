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
  X,
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

export function DashboardSidebar({ onClose }: { onClose?: () => void }) {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col">
      {/* Botón cerrar solo en mobile */}
      {onClose && (
        <button
          className="absolute top-4 right-4 z-10 flex items-center justify-center rounded-lg p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none lg:hidden"
          onClick={onClose}
          aria-label="Cerrar menú"
        >
          <X className="h-5 w-5" />
        </button>
      )}

      {/* Navigation Content */}
      <div className="flex flex-1 flex-col overflow-y-auto">
        <nav className="flex-1 space-y-1 px-3 py-4 lg:px-3 lg:py-4">
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
                  "group flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                )}
                onClick={onClose}
              >
                <item.icon
                  className={clsx(
                    isActive
                      ? "text-blue-500"
                      : "text-gray-400 group-hover:text-gray-500",
                    "mr-3 h-5 w-5 flex-shrink-0 transition-colors",
                  )}
                  aria-hidden="true"
                />
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Secondary Navigation */}
        <div className="border-t border-gray-200 px-3 py-4 lg:px-3 lg:py-4">
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
                  "group flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                )}
                onClick={onClose}
              >
                <item.icon
                  className={clsx(
                    isActive
                      ? "text-blue-500"
                      : "text-gray-400 group-hover:text-gray-500",
                    "mr-3 h-5 w-5 flex-shrink-0 transition-colors",
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
  );
}
