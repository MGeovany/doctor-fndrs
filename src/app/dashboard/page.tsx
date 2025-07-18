"use client";

import React from "react";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { StatsCards } from "@/components/dashboard/StatsCards";
import { PatientsQueue } from "@/components/dashboard/PatientsQueue";
import { AssignedPatients } from "@/components/dashboard/AssignedPatients";
import { PageTransition } from "@/components/ui/PageTransition";

export default function DashboardPage() {
  return (
    <PageTransition>
      <ProtectedRoute>
        <DashboardLayout>
          <div className="space-y-6">
            <DashboardHeader />
            <StatsCards />

            <div className="grid grid-cols-1 gap-4 sm:gap-6 xl:grid-cols-2">
              <PatientsQueue />
              <AssignedPatients />
            </div>
          </div>
        </DashboardLayout>
      </ProtectedRoute>
    </PageTransition>
  );
}
