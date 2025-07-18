"use client";

import React from "react";
import { useApp } from "@/context/AppContext";
import { Badge } from "@/components/ui/Badge";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export function DashboardHeader() {
  const { currentDoctor } = useApp();

  const getCurrentGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Buenos días";
    if (hour < 18) return "Buenas tardes";
    return "Buenas noches";
  };

  const getCurrentDate = () => {
    return new Date().toLocaleDateString("es-ES", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="gsap-fade-in rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        {/* Doctor info section */}
        <div className="flex items-center space-x-4">
          {/* Doctor avatar */}
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black shadow-sm sm:h-16 sm:w-16">
            <span className="text-lg font-bold text-white sm:text-xl">
              {currentDoctor?.name
                ?.split(" ")
                .map((n) => n[0])
                .join("")
                .toUpperCase() ?? "DR"}
            </span>
          </div>

          {/* Doctor details */}
          <div className="flex-1">
            <h1 className="font-sans text-lg font-semibold text-gray-900 sm:text-2xl">
              {getCurrentGreeting()}, Dr. {currentDoctor?.name}
            </h1>
            <p className="font-outfit text-sm text-gray-600 sm:text-base">
              {getCurrentDate()}
            </p>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <Badge variant="success" size="sm">
                En línea
              </Badge>
              <span className="font-outfit text-sm text-gray-500">
                {currentDoctor?.specialty}
              </span>
            </div>
          </div>
        </div>

        {/* Stats cards */}
        <div className="gsap-scale-in grid grid-cols-2 gap-3 sm:gap-4 lg:flex-shrink-0">
          <div className="rounded-lg bg-blue-50 p-3 sm:p-4">
            <div className="text-xl font-bold text-blue-600 sm:text-2xl">
              <AnimatedCounter
                value={currentDoctor?.patientsAttended ?? 1543}
              />
            </div>
            <div className="font-outfit text-xs text-gray-600 sm:text-sm">
              Pacientes atendidos
            </div>
          </div>
          <div className="rounded-lg bg-green-50 p-3 sm:p-4">
            <div className="text-xl font-bold text-green-600 sm:text-2xl">
              {currentDoctor?.rating ?? 4.9}
            </div>
            <div className="font-outfit text-xs text-gray-600 sm:text-sm">
              Calificación promedio
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
