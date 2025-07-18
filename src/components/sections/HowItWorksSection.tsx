"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { StatsCounter } from "@/components/ui/StatsCounter";
import {
  UserPlus,
  CreditCard,
  Video,
  FileCheck,
  Monitor,
  User,
} from "lucide-react";
import { useStaggeredAnimation } from "@/components/ui/useStaggeredAnimation";

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

  // Animación escalonada de las cards al cambiar de tab
  useStaggeredAnimation(
    {
      selector: ".how-step-card",
      stagger: 0.15,
      duration: 0.7,
      y: 40,
      opacity: 0,
      scale: 1,
      rotation: 0,
      delay: 0,
    },
    [activeTab],
  );
  return (
    <section id="how-it-works" className="bg-white py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="gsap-fade-in mb-8 text-center sm:mb-16">
          <h2 className="mb-3 text-2xl font-bold text-gray-900 sm:mb-4 sm:text-6xl">
            ¿Cómo funciona Dctrs.?
          </h2>
          <p className="font-outfit mx-auto max-w-3xl text-base text-gray-600 sm:text-xl">
            Un proceso simple y eficiente tanto para pacientes como para
            doctores.
          </p>
        </div>

        {/* Tabs */}
        <div className="gsap-scale-in mb-8 flex justify-center sm:mb-12">
          <div className="flex rounded-lg bg-gray-100 p-1">
            <button
              className={`rounded-md px-4 py-2 font-medium transition-colors sm:px-6 ${activeTab === "pacientes" ? "bg-white text-black" : "text-gray-600 hover:text-gray-900"}`}
              onClick={() => setActiveTab("pacientes")}
            >
              Para Pacientes
            </button>
            <button
              className={`rounded-md px-4 py-2 font-medium transition-colors sm:px-6 ${activeTab === "doctores" ? "bg-white text-black" : "text-gray-600 hover:text-gray-900"}`}
              onClick={() => setActiveTab("doctores")}
            >
              Para Doctores
            </button>
          </div>
        </div>

        {/* Steps flow */}
        <div className="mb-10 sm:mb-20">
          <div className="gsap-slide-in-left grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
            {(activeTab === "pacientes" ? patientSteps : doctorSteps).map(
              (step, index, arr) => {
                return (
                  <div key={index} className="how-step-card relative">
                    <Card className="h-full px-4 py-6 text-center sm:px-0 sm:py-0">
                      <div className="flex flex-col items-center space-y-3 p-4 sm:space-y-2">
                        <div className="relative">
                          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 sm:h-16 sm:w-16">
                            <step.icon className="h-7 w-7 sm:h-8 sm:w-8" />
                          </div>
                        </div>
                        <h3 className="text-base font-semibold text-gray-900 sm:text-lg">
                          {step.title}
                        </h3>
                        <p className="font-outfit sm:text-md text-sm leading-relaxed text-gray-600">
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
        <div className="gsap-slide-in-right rounded-2xl bg-blue-600 p-6 text-center text-white sm:p-8 lg:p-12">
          <div className="mx-auto max-w-3xl space-y-4 sm:space-y-6">
            <h3 className="text-xl font-bold sm:text-2xl lg:text-3xl">
              ¿Eres doctor y quieres unirte a nuestra plataforma?
            </h3>
            <p className="font-outfit text-base text-blue-100 sm:text-lg">
              Únete a cientos de profesionales que ya están atendiendo pacientes
              en Dctrs. Flexibilidad horaria, buenos ingresos y tecnología de
              vanguardia.
            </p>

            <div className="my-6 grid grid-cols-1 gap-4 sm:my-8 sm:gap-6 md:grid-cols-3">
              <div className="text-center">
                <div className="font-sans text-2xl sm:text-4xl">$50-100</div>
                <div className="text-md text-blue-100">Por consulta</div>
              </div>
              <div className="text-center">
                <div className="font-sans text-2xl sm:text-4xl">Flexible</div>
                <div className="text-md text-blue-100">Horarios</div>
              </div>
              <div className="text-center">
                <div className="font-sans text-2xl sm:text-4xl">24/7</div>
                <div className="text-md text-blue-100">Soporte técnico</div>
              </div>
            </div>

            <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
              <Link href="/doctor-login">
                <Button variant="secondary" size="lg">
                  Acceder como Doctor
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="text-white !shadow-none"
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
