'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { clsx } from 'clsx';
import { 
  HomeIcon,
  UserGroupIcon,
  CalendarIcon,
  ChartBarIcon,
  DocumentTextIcon,
  Cog6ToothIcon,
  QuestionMarkCircleIcon
} from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
  { name: 'Pacientes', href: '/dashboard/patients', icon: UserGroupIcon },
  { name: 'Calendario', href: '/dashboard/calendar', icon: CalendarIcon },
  { name: 'Estadísticas', href: '/dashboard/stats', icon: ChartBarIcon },
  { name: 'Historial', href: '/dashboard/history', icon: DocumentTextIcon },
];

const secondaryNavigation = [
  { name: 'Configuración', href: '/dashboard/settings', icon: Cog6ToothIcon },
  { name: 'Ayuda', href: '/dashboard/help', icon: QuestionMarkCircleIcon },
];

export function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <div className="hidden lg:flex lg:flex-shrink-0">
      <div className="flex flex-col w-64">
        <div className="flex flex-col flex-grow bg-white pt-16 pb-4 overflow-y-auto border-r border-gray-200">
          <div className="flex-grow flex flex-col">
            <nav className="flex-1 px-4 space-y-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={clsx(
                      isActive
                        ? 'bg-blue-50 border-r-2 border-blue-600 text-blue-700
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900
                      'group flex items-center px-3 py-2 text-sm font-medium rounded-l-md transition-colors'
                    )}
                  >
                    <item.icon
                      className={clsx(
                        isActive
                          ? 'text-blue-500
                          : 'text-gray-400 group-hover:text-gray-500
                        'mr-3 flex-shrink-0 h-6 w-6 transition-colors'
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
                        ? 'bg-blue-50 border-r-2 border-blue-600 text-blue-700
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900
                      'group flex items-center px-3 py-2 text-sm font-medium rounded-l-md transition-colors'
                    )}
                  >
                    <item.icon
                      className={clsx(
                        isActive
                          ? 'text-blue-500
                          : 'text-gray-400 group-hover:text-gray-500
                        'mr-3 flex-shrink-0 h-6 w-6 transition-colors'
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
