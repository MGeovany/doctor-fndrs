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
    <div className="gsap-fade-in rounded-lg border border-gray-200 bg-white p-4 sm:p-6">
      <div className="flex flex-col gap-4 sm:gap-0 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center space-x-3 sm:space-x-4">
          {/* Doctor avatar */}
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black sm:h-16 sm:w-16">
            <span className="text-lg font-bold text-white sm:text-xl">
              {currentDoctor?.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </span>
          </div>
          {/* Doctor info */}
          <div>
            <h1 className="font-sans text-lg text-gray-900 sm:text-2xl">
              {getCurrentGreeting()}, {currentDoctor?.name}
            </h1>
            <p className="font-outfit text-xs text-black/80 sm:text-base">
              {getCurrentDate()}
            </p>
            <div className="mt-1 flex items-center space-x-1 sm:mt-2 sm:space-x-2">
              <Badge variant="success" size="sm">
                En línea
              </Badge>
              <span className="font-outfit text-xs text-gray-500 sm:text-sm">
                {currentDoctor?.specialty}
              </span>
            </div>
          </div>
        </div>
        {/* Doctor stats */}
        <div className="gsap-scale-in mt-4 grid grid-cols-2 gap-2 text-center sm:mt-0 sm:grid-cols-2 sm:gap-4 md:mt-0">
          <div className="rounded-lg bg-blue-50 p-2 sm:p-3">
            <div className="text-lg font-bold text-blue-600 sm:text-2xl">
              <AnimatedCounter value={currentDoctor?.patientsAttended ?? 0} />
            </div>
            <div className="font-outfit text-xs text-gray-600">
              Pacientes atendidos
            </div>
          </div>
          <div className="rounded-lg bg-green-50 p-2 sm:p-3">
            <div className="text-lg font-bold text-green-600 sm:text-2xl">
              {currentDoctor?.rating ?? 0}
            </div>
            <div className="font-outfit text-xs text-gray-600">
              Calificación promedio
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
