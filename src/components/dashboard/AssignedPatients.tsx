"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";
import { Card, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { useToast } from "@/components/ui/Toast";
import {
  UserIcon,
  VideoCameraIcon,
  CheckCircleIcon,
  ClockIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";

export function AssignedPatients() {
  const {
    patients,
    currentDoctor,
    startConsultation,
    completeConsultation,
    updatePatientStatus,
  } = useApp();
  const { showToast } = useToast();
  const [consultingPatient, setConsultingPatient] = useState<string | null>(
    null,
  );
  const [completingPatient, setCompletingPatient] = useState<string | null>(
    null,
  );

  const assignedPatients = patients.filter(
    (p) => p.assignedDoctorId === currentDoctor?.id && p.status !== "waiting",
  );

  const handleStartConsultation = async (patientId: string) => {
    setConsultingPatient(patientId);

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    startConsultation(patientId);
    showToast("Consulta iniciada exitosamente", "success");
    setConsultingPatient(null);
  };

  const handleCompleteConsultation = async (patientId: string) => {
    setCompletingPatient(patientId);

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    completeConsultation(patientId, "Consulta completada exitosamente");
    showToast("Consulta finalizada exitosamente", "success");
    setCompletingPatient(null);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "assigned":
        return "info";
      case "in-consultation":
        return "warning";
      case "completed":
        return "success";
      default:
        return "default";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "assigned":
        return "Asignado";
      case "in-consultation":
        return "En consulta";
      case "completed":
        return "Completado";
      default:
        return status;
    }
  };

  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <UserIcon className="h-5 w-5 text-green-600 />
            <span>Mis Pacientes</span>
          </div>
          <Badge variant="success" size="sm">
            {assignedPatients.length} asignados
          </Badge>
        </CardTitle>
      </CardHeader>

      <div className="space-y-4">
        {assignedPatients.length === 0 ? (
          <div className="py-8 text-center">
            <UserIcon className="mx-auto mb-4 h-12 w-12 text-gray-400" />
            <p className="text-gray-600
              No tienes pacientes asignados
            </p>
            <p className="mt-1 text-sm text-gray-500
              Asígnate pacientes de la cola para comenzar
            </p>
          </div>
        ) : (
          assignedPatients.map((patient) => (
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
                      <Badge variant={getStatusColor(patient.status)} size="sm">
                        {getStatusText(patient.status)}
                      </Badge>
                    </div>

                    <p className="mt-1 text-sm text-gray-600
                      {patient.age} años • {patient.consultation}
                    </p>

                    {patient.status === "assigned" && (
                      <div className="mt-2 flex items-center space-x-1 text-xs text-gray-500
                        <ClockIcon className="h-4 w-4" />
                        <span>Esperando consulta</span>
                      </div>
                    )}

                    {patient.status === "in-consultation" && (
                      <div className="mt-2 flex items-center space-x-1 text-xs text-green-600
                        <VideoCameraIcon className="h-4 w-4" />
                        <span>En consulta activa</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex flex-col space-y-2">
                  {patient.status === "assigned" && (
                    <Button
                      size="sm"
                      onClick={() => handleStartConsultation(patient.id)}
                      loading={consultingPatient === patient.id}
                      className="flex min-w-[120px] items-center justify-center space-x-1"
                    >
                      <VideoCameraIcon className="h-4 w-4" />
                      <span>
                        {consultingPatient === patient.id
                          ? "Iniciando..."
                          : "Iniciar consulta"}
                      </span>
                    </Button>
                  )}

                  {patient.status === "in-consultation" && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleCompleteConsultation(patient.id)}
                      loading={completingPatient === patient.id}
                      className="flex min-w-[120px] items-center justify-center space-x-1"
                    >
                      <CheckCircleIcon className="h-4 w-4" />
                      <span>
                        {completingPatient === patient.id
                          ? "Finalizando..."
                          : "Finalizar"}
                      </span>
                    </Button>
                  )}

                  {patient.status === "completed" && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex min-w-[120px] items-center justify-center space-x-1"
                    >
                      <DocumentTextIcon className="h-4 w-4" />
                      <span>Ver notas</span>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {assignedPatients.length > 0 && (
        <div className="mt-4 border-t border-gray-200 pt-4
          <p className="text-center text-xs text-gray-500
            Gestiona tus consultas asignadas desde aquí
          </p>
        </div>
      )}
    </Card>
  );
}
