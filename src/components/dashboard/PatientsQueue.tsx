"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";
import { Card, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { toast } from "sonner";
import { Clock, User, Phone, AlertTriangle } from "lucide-react";

export function PatientsQueue() {
  const { patients, assignPatient, currentDoctor } = useApp();
  const [assigningPatient, setAssigningPatient] = useState<string | null>(null);

  const waitingPatients = patients.filter((p) => p.status === "waiting");

  const handleAssignPatient = async (patientId: string) => {
    if (!currentDoctor) return;

    setAssigningPatient(patientId);

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    assignPatient(patientId, currentDoctor.id);
    toast.success("Paciente asignado exitosamente");
    setAssigningPatient(null);
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "danger";
      case "medium":
        return "warning";
      case "low":
        return "success";
      default:
        return "default";
    }
  };

  const getPriorityIcon = (priority: string) => {
    if (priority === "high") {
      return <AlertTriangle className="h-4 w-4" />;
    }
    return null;
  };

  return (
    <Card className="gsap-slide-in-left h-fit p-3 sm:p-6">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <User className="h-5 w-5 text-blue-600" />
            <span className="text-sm sm:text-base">Pacientes en Cola</span>
          </div>
          <Badge variant="info" size="sm">
            {waitingPatients.length} esperando
          </Badge>
        </CardTitle>
      </CardHeader>
      <div className="space-y-3 sm:space-y-4">
        {waitingPatients.length === 0 ? (
          <div className="py-6 text-center sm:py-8">
            <User className="mx-auto mb-4 h-10 w-10 text-gray-400 sm:h-12 sm:w-12" />
            <p className="text-sm text-gray-600 sm:text-base">
              No hay pacientes en espera
            </p>
            <p className="mt-1 text-xs text-gray-500 sm:text-sm">
              Los nuevos pacientes aparecerán aquí
            </p>
          </div>
        ) : (
          waitingPatients.map((patient) => (
            <div
              key={patient.id}
              className="rounded-lg border border-gray-200 p-3 transition-all duration-200 hover:scale-[1.02] hover:bg-gray-50 hover:shadow-md sm:p-4"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-0">
                <div className="flex items-start space-x-2 sm:space-x-3">
                  {/* Patient avatar */}
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 sm:h-10 sm:w-10">
                    <span className="text-xs font-medium text-gray-600 sm:text-sm">
                      {patient.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-1 sm:space-x-2">
                      <h4 className="text-sm font-medium text-gray-900 sm:text-base">
                        {patient.name}
                      </h4>
                      <Badge
                        variant={getPriorityColor(patient.priority)}
                        size="sm"
                        className="flex items-center space-x-1"
                      >
                        {getPriorityIcon(patient.priority)}
                        <span className="text-xs capitalize sm:text-sm">
                          {patient.priority}
                        </span>
                      </Badge>
                    </div>
                    <p className="font-outfit mt-1 text-xs text-gray-600 sm:text-sm dark:text-gray-400">
                      {patient.age} años • {patient.consultation}
                    </p>
                    <div className="mt-1 flex items-center space-x-1 text-xs text-gray-500 sm:mt-2 dark:text-gray-400">
                      <Clock className="h-4 w-4" />
                      <span>Esperando {patient.waitTime}</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row sm:gap-2">
                  <Button
                    size="sm"
                    onClick={() => handleAssignPatient(patient.id)}
                    loading={assigningPatient === patient.id}
                    className="min-w-[90px] sm:min-w-[100px]"
                  >
                    {assigningPatient === patient.id
                      ? "Asignando..."
                      : "Asignarme"}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex min-w-[90px] items-center justify-center space-x-1 sm:min-w-[100px]"
                  >
                    <Phone className="h-4 w-4" />
                    <span>Llamar</span>
                  </Button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      {waitingPatients.length > 0 && (
        <div className="mt-3 border-t border-gray-200 pt-3 sm:mt-4 sm:pt-4">
          <p className="text-center text-xs text-gray-500">
            Los pacientes se ordenan por prioridad y tiempo de espera
          </p>
        </div>
      )}
    </Card>
  );
}
