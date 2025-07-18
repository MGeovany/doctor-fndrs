"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";
import { Card, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { toast } from "sonner";
import { User, Video, CheckCircle, Clock, FileText } from "lucide-react";

export function AssignedPatients() {
  const {
    patients,
    currentDoctor,
    startConsultation,
    completeConsultation,
    updatePatientStatus,
  } = useApp();
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
    toast.success("Consulta iniciada exitosamente");
    setConsultingPatient(null);
  };

  const handleCompleteConsultation = async (patientId: string) => {
    setCompletingPatient(patientId);

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    completeConsultation(patientId, "Consulta completada exitosamente");
    toast.success("Consulta finalizada exitosamente");
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
    <Card className="gsap-slide-in-right h-fit p-3 sm:p-6">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <User className="h-5 w-5 text-green-600" />
            <span className="text-sm sm:text-base">Mis Pacientes</span>
          </div>
          <Badge variant="success" size="sm">
            {assignedPatients.length} asignados
          </Badge>
        </CardTitle>
      </CardHeader>
      <div className="space-y-3 sm:space-y-4">
        {assignedPatients.length === 0 ? (
          <div className="py-6 text-center sm:py-8">
            <User className="mx-auto mb-4 h-10 w-10 text-gray-400 sm:h-12 sm:w-12" />
            <p className="font-outfit text-sm text-gray-600 sm:text-base">
              No tienes pacientes asignados
            </p>
            <p className="font-outfit mt-1 text-xs text-gray-500 sm:text-sm">
              Asígnate pacientes de la cola para comenzar
            </p>
          </div>
        ) : (
          assignedPatients.map((patient) => (
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
                      <Badge variant={getStatusColor(patient.status)} size="sm">
                        {getStatusText(patient.status)}
                      </Badge>
                    </div>
                    <p className="font-outfit mt-1 text-xs text-gray-600 sm:text-sm">
                      {patient.age} años • {patient.consultation}
                    </p>
                    {patient.status === "assigned" && (
                      <div className="mt-1 flex items-center space-x-1 text-xs text-gray-500 sm:mt-2">
                        <Clock className="h-4 w-4" />
                        <span>Esperando consulta</span>
                      </div>
                    )}
                    {patient.status === "in-consultation" && (
                      <div className="mt-1 flex items-center space-x-1 text-xs text-green-600 sm:mt-2">
                        <Video className="h-4 w-4" />
                        <span>En consulta activa</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row sm:gap-2">
                  {patient.status === "assigned" && (
                    <Button
                      size="sm"
                      onClick={() => handleStartConsultation(patient.id)}
                      loading={consultingPatient === patient.id}
                      className="flex min-w-[100px] items-center justify-center space-x-1"
                    >
                      <Video className="h-4 w-4" />
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
                      className="flex min-w-[100px] items-center justify-center space-x-1"
                    >
                      <CheckCircle className="h-4 w-4" />
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
                      className="flex min-w-[100px] items-center justify-center space-x-1"
                    >
                      <FileText className="h-4 w-4" />
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
        <div className="mt-3 border-t border-gray-200 pt-3 sm:mt-4 sm:pt-4">
          <p className="text-center text-xs text-gray-500">
            Los pacientes se ordenan por estado y tiempo de asignación
          </p>
        </div>
      )}
    </Card>
  );
}
