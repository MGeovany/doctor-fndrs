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
      bgColor: "bg-blue-100",
      change: "+5%",
      changeType: "increase",
    },
    {
      name: "Tiempo promedio de espera",
      value: averageWaitTime,
      icon: Clock,
      color: "text-yellow-600",
      bgColor: "bg-yellow-100",
      change: "-2 min",
      changeType: "decrease",
    },
    {
      name: "Consultas en progreso",
      value: inConsultationPatients,
      icon: TrendingUp,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
      change: "+2",
      changeType: "increase",
    },
    {
      name: "Consultas completadas hoy",
      value: completedPatients,
      icon: CheckCircle,
      color: "text-green-600",
      bgColor: "bg-green-100",
      change: "+12%",
      changeType: "increase",
    },
  ];

  return (
    <div className="gsap-scale-in grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => {
        const IconComponent = stat.icon;
        return (
          <Card key={index} className="transition-shadow hover:shadow-md">
            <div className="flex items-center">
              <div className={`rounded-lg p-3 ${stat.bgColor}`}>
                <IconComponent className={`h-6 w-6 ${stat.color}`} />
              </div>
              <div className="ml-4">
                <p className="font-outfit text-sm text-gray-600">{stat.name}</p>
                <div className="flex items-baseline">
                  <p className="text-2xl font-semibold text-gray-900">
                    {stat.value}
                  </p>
                  <p
                    className={`ml-2 text-xs ${
                      stat.changeType === "increase"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {stat.change}
                  </p>
                </div>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
