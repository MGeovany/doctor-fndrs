"use client";

import React from "react";
import { useApp } from "@/context/AppContext";
import { Card } from "@/components/ui/Card";
import { Users, Clock, CheckCircle, TrendingUp } from "lucide-react";

export function StatsCards() {
  const { patients } = useApp();

  // Calculate stats
  const waitingPatients = patients.filter((p) => p.status === "waiting").length;
  const inConsultationPatients = patients.filter(
    (p) => p.status === "in-consultation",
  ).length;
  const completedPatients = patients.filter(
    (p) => p.status === "completed",
  ).length;

  // Average wait time calculation (mock data)
  const averageWaitTime = "12 min";

  const stats = [
    {
      name: "Pacientes en espera",
      value: waitingPatients,
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      change: "+5%",
      changeType: "increase",
    },
    {
      name: "Tiempo promedio de espera",
      value: averageWaitTime,
      icon: Clock,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      change: "-2 min",
      changeType: "decrease",
    },
    {
      name: "Consultas en progreso",
      value: inConsultationPatients,
      icon: TrendingUp,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      change: "+2",
      changeType: "increase",
    },
    {
      name: "Consultas completadas hoy",
      value: completedPatients,
      icon: CheckCircle,
      color: "text-green-600",
      bgColor: "bg-green-50",
      change: "+12%",
      changeType: "increase",
    },
  ];

  return (
    <div className="gsap-scale-in grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => {
        const IconComponent = stat.icon;
        return (
          <Card
            key={index}
            className="group rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-200 hover:border-gray-300 hover:shadow-md sm:p-5"
          >
            <div className="flex items-start space-x-4">
              <div
                className={`rounded-lg p-2.5 ${stat.bgColor} transition-transform duration-200 group-hover:scale-105`}
              >
                <IconComponent
                  className={`h-5 w-5 ${stat.color} sm:h-6 sm:w-6`}
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-outfit mb-1 text-sm text-gray-600">
                  {stat.name}
                </p>
                <div className="flex items-baseline space-x-2">
                  <p className="text-xl font-bold text-gray-900 sm:text-2xl">
                    {stat.value}
                  </p>
                  <span
                    className={`rounded-full px-1.5 py-0.5 text-xs font-medium ${
                      stat.changeType === "increase"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {stat.change}
                  </span>
                </div>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
