'use client';

import React from 'react';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { DashboardHeader } from '@/components/dashboard/DashboardHeader';
import { StatsCards } from '@/components/dashboard/StatsCards';
import { PatientsQueue } from '@/components/dashboard/PatientsQueue';
import { AssignedPatients } from '@/components/dashboard/AssignedPatients';

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <DashboardLayout>
        <div className="space-y-6">
          <DashboardHeader />
          <StatsCards />
          
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <PatientsQueue />
            <AssignedPatients />
          </div>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}
