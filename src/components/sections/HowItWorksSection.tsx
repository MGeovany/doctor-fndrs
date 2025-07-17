"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import {
  UserPlus,
  CreditCard,
  Video,
  FileCheck,
  Monitor,
  User,
} from "lucide-react";

const patientSteps = [
  {
    icon: UserPlus,
    title: "Regístrate",
    description: "Crea tu cuenta y completa tu perfil médico básico.",
  },
  {
    icon: CreditCard,
    title: "Elige tu plan",
    description:
      "Selecciona el plan de suscripción que mejor se adapte a tus necesidades.",
  },
  {
    icon: Video,
    title: "Solicita consulta",
    description: "Describe tus síntomas y conecta con un doctor disponible.",
  },
  {
    icon: FileCheck,
    title: "Recibe atención",
    description: "Obtén diagnóstico, tratamiento y recetas médicas digitales.",
  },
];

const doctorSteps = [
  {
    icon: User,
    title: "Perfil profesional",
    description:
      "Crea tu perfil con credenciales, especialidades y experiencia.",
  },
  {
    icon: Monitor,
    title: "Dashboard médico",
    description:
      "Accede a tu panel de control para gestionar consultas y pacientes.",
  },
  {
    icon: Video,
    title: "Atiende pacientes",
    description:
      "Realiza consultas virtuales y proporciona diagnósticos profesionales.",
  },
  {
    icon: FileCheck,
    title: "Seguimiento",
    description:
      "Mantén historial de pacientes y realiza seguimientos necesarios.",
  },
];

export function HowItWorksSection() {
  const [activeTab, setActiveTab] = useState<"pacientes" | "doctores">(
    "pacientes",
  );
  return (
    <section id="how-it-works" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-6xl font-bold text-gray-900">
            ¿Cómo funciona Dctrs.?
          </h2>
          <p className="font-outfit mx-auto max-w-3xl text-xl text-gray-600">
            Un proceso simple y eficiente tanto para pacientes como para
            doctores.
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-12 flex justify-center">
          <div className="flex rounded-lg bg-gray-100 p-1">
            <button
              className={`rounded-md px-6 py-2 font-medium transition-colors ${activeTab === "pacientes" ? "bg-white text-black" : "text-gray-600 hover:text-gray-900"}`}
              onClick={() => setActiveTab("pacientes")}
            >
              Para Pacientes
            </button>
            <button
              className={`rounded-md px-6 py-2 font-medium transition-colors ${activeTab === "doctores" ? "bg-white text-black" : "text-gray-600 hover:text-gray-900"}`}
              onClick={() => setActiveTab("doctores")}
            >
              Para Doctores
            </button>
          </div>
        </div>

        {/* Steps flow */}
        <div className="mb-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {(activeTab === "pacientes" ? patientSteps : doctorSteps).map(
              (step, index, arr) => {
                return (
                  <div key={index} className="relative">
                    <Card className="h-full text-center">
                      <div className="flex flex-col items-center space-y-2">
                        <div className="relative">
                          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
                            <step.icon className="h-8 w-8" />
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {step.title}
                        </h3>
                        <p className="font-outfit text-md leading-relaxed text-gray-600">
                          {step.description}
                        </p>
                      </div>
                    </Card>
                  </div>
                );
              },
            )}
          </div>
        </div>

        {/* Doctor CTA section */}
        <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-center text-white lg:p-12">
          <div className="mx-auto max-w-3xl space-y-6">
            <h3 className="text-2xl font-bold lg:text-3xl">
              ¿Eres doctor y quieres unirte a nuestra plataforma?
            </h3>
            <p className="text-lg text-blue-100">
              Únete a cientos de profesionales que ya están atendiendo pacientes
              en Dctrs. Flexibilidad horaria, buenos ingresos y tecnología de
              vanguardia.
            </p>

            <div className="my-8 grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="text-center">
                <div className="text-2xl font-bold">$50-100</div>
                <div className="text-sm text-blue-100">Por consulta</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">Flexible</div>
                <div className="text-sm text-blue-100">Horarios</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm text-blue-100">Soporte técnico</div>
              </div>
            </div>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/doctor-login">
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100"
                >
                  Acceder como Doctor
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                Más información
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
