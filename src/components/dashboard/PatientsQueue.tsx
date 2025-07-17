"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";
import { Card, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { useToast } from "@/components/ui/Toast";
import {
  ClockIcon,
  UserIcon,
  PhoneIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";

export function PatientsQueue() {
  const { patients, assignPatient, currentDoctor } = useApp();
  const { showToast } = useToast();
  const [assigningPatient, setAssigningPatient] = useState<string | null>(null);

  const waitingPatients = patients.filter((p) => p.status === "waiting");

  const handleAssignPatient = async (patientId: string) => {
    if (!currentDoctor) return;

    setAssigningPatient(patientId);

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    assignPatient(patientId, currentDoctor.id);
    showToast("Paciente asignado exitosamente", "success");
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
      return <ExclamationTriangleIcon className="h-4 w-4" />;
    }
    return null;
  };

  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <UserIcon className="h-5 w-5 text-blue-600 />
            <span>Pacientes en Cola</span>
          </div>
          <Badge variant="info" size="sm">
            {waitingPatients.length} esperando
          </Badge>
        </CardTitle>
      </CardHeader>

      <div className="space-y-4">
        {waitingPatients.length === 0 ? (
          <div className="py-8 text-center">
            <UserIcon className="mx-auto mb-4 h-12 w-12 text-gray-400" />
            <p className="text-gray-600
              No hay pacientes en espera
            </p>
            <p className="mt-1 text-sm text-gray-500
              Los nuevos pacientes aparecerán aquí
            </p>
          </div>
        ) : (
          waitingPatients.map((patient) => (
            <div
              key={patient.id}
              className="rounded-lg border border-gray-200 p-4 transition-all duration-200 hover:scale-[1.02] hover:bg-gray-50 hover:shadow-md
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3">
                  {/* Patient avatar */}
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200
                    <span className="text-sm font-medium text-gray-600
                      {patient.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <h4 className="font-medium text-gray-900
                        {patient.name}
                      </h4>
                      <Badge
                        variant={getPriorityColor(patient.priority)}
                        size="sm"
                        className="flex items-center space-x-1"
                      >
                        {getPriorityIcon(patient.priority)}
                        <span className="capitalize">{patient.priority}</span>
                      </Badge>
                    </div>

                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                      {patient.age} años • {patient.consultation}
                    </p>

                    <div className="mt-2 flex items-center space-x-1 text-xs text-gray-500 dark:text-gray-400">
                      <ClockIcon className="h-4 w-4" />
                      <span>Esperando {patient.waitTime}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col space-y-2">
                  <Button
                    size="sm"
                    onClick={() => handleAssignPatient(patient.id)}
                    loading={assigningPatient === patient.id}
                    className="min-w-[100px]"
                  >
                    {assigningPatient === patient.id
                      ? "Asignando..."
                      : "Asignarme"}
                  </Button>

                  <Button
                    variant="outline"
                    size="sm"
                    className="flex min-w-[100px] items-center justify-center space-x-1"
                  >
                    <PhoneIcon className="h-4 w-4" />
                    <span>Llamar</span>
                  </Button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {waitingPatients.length > 0 && (
        <div className="mt-4 border-t border-gray-200 pt-4
          <p className="text-center text-xs text-gray-500
            Los pacientes se ordenan por prioridad y tiempo de espera
          </p>
        </div>
      )}
    </Card>
  );
}
