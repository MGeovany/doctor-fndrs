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
    <div className="rounded-lg border border-gray-200 bg-white p-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="flex items-center space-x-4">
          {/* Doctor avatar */}
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black">
            <span className="text-xl font-bold text-white">
              {currentDoctor?.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </span>
          </div>

          {/* Doctor info */}
          <div>
            <h1 className="font-sans text-2xl text-gray-900">
              {getCurrentGreeting()}, {currentDoctor?.name}
            </h1>
            <p className="font-outfit text-black/80">{getCurrentDate()}</p>
            <div className="mt-2 flex items-center space-x-2">
              <Badge variant="success" size="sm">
                En línea
              </Badge>
              <span className="font-outfit text-sm text-gray-500">
                {currentDoctor?.specialty}
              </span>
            </div>
          </div>
        </div>

        {/* Doctor stats */}
        <div className="mt-4 md:mt-0">
          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="rounded-lg bg-blue-50 p-3">
              <div className="text-2xl font-bold text-blue-600">
                <AnimatedCounter value={currentDoctor?.patientsAttended ?? 0} />
              </div>
              <div className="font-outfit text-xs text-gray-600">
                Pacientes atendidos
              </div>
            </div>
            <div className="rounded-lg bg-green-50 p-3">
              <div className="text-2xl font-bold text-green-600">
                {currentDoctor?.rating ?? 0}
              </div>
              <div className="font-outfit text-xs text-gray-600">
                Calificación promedio
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
