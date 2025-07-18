import React from "react";
import { Card } from "@/components/ui/Card";
import { StatsCounter } from "@/components/ui/StatsCounter";
import {
  Clock,
  Shield,
  DollarSign,
  Smartphone,
  Users,
  FileText,
} from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Disponibilidad 24/7",
    description:
      "Accede a consultas médicas en cualquier momento del día, todos los días del año.",
    color: "text-blue-600",
  },
  {
    icon: Shield,
    title: "Doctores Certificados",
    description:
      "Todos nuestros profesionales están certificados y cuentan con amplia experiencia.",
    color: "text-green-600",
  },
  {
    icon: DollarSign,
    title: "Precios Accesibles",
    description:
      "Consultas médicas a precios justos con planes de suscripción flexibles.",
    color: "text-yellow-600",
  },
  {
    icon: Smartphone,
    title: "Desde Cualquier Dispositivo",
    description:
      "Realiza consultas desde tu computadora, tablet o teléfono móvil.",
    color: "text-purple-600",
  },
  {
    icon: Users,
    title: "Atención Personalizada",
    description:
      "Cada consulta es personalizada según tus necesidades específicas de salud.",
    color: "text-red-600",
  },
  {
    icon: FileText,
    title: "Historial Médico Digital",
    description:
      "Mantén un registro completo y seguro de todas tus consultas y tratamientos.",
    color: "text-indigo-600",
  },
];

export function BenefitsSection() {
  return (
    <section id="benefits" className="bg-gray-50 py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="gsap-fade-in mb-8 text-center sm:mb-16">
          <h2 className="mb-3 text-2xl font-bold text-gray-900 sm:mb-4 sm:text-3xl">
            ¿Por qué elegir Dctrs.?
          </h2>
          <p className="font-outfit mx-auto max-w-3xl text-base text-gray-600 sm:text-xl">
            Ofrecemos una experiencia médica moderna, segura y conveniente para
            todos nuestros pacientes.
          </p>
        </div>

        <div className="gsap-scale-in grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card
                key={index}
                className="px-4 py-6 text-center transition-shadow hover:shadow-lg sm:px-0 sm:py-0"
              >
                <div className="flex flex-col items-center space-y-3 sm:space-y-4">
                  <div
                    className={`rounded-full bg-gray-100 p-2 sm:p-3 ${benefit.color}`}
                  >
                    <IconComponent className="h-7 w-7 sm:h-8 sm:w-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 sm:text-xl">
                    {benefit.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
                    {benefit.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Additional benefits section */}
        <div className="mt-10 rounded-2xl bg-white p-6 sm:mt-16 sm:p-8 lg:p-12">
          <div className="grid grid-cols-1 items-center gap-8 sm:gap-12 lg:grid-cols-2">
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                Suscripción Premium
              </h3>
              <p className="text-base text-gray-600 sm:text-lg">
                Obtén acceso ilimitado a consultas médicas con nuestro plan
                premium. Ideal para familias y personas que requieren atención
                médica frecuente.
              </p>

              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                  <span className="text-sm text-gray-700 sm:text-base">
                    Consultas ilimitadas
                  </span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                  <span className="text-sm text-gray-700 sm:text-base">
                    Prioridad en la atención
                  </span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                  <span className="text-sm text-gray-700 sm:text-base">
                    Acceso a especialistas
                  </span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                  <span className="text-sm text-gray-700 sm:text-base">
                    Seguimiento personalizado
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-gradient-to-br from-blue-50 to-indigo-100 p-6 text-center sm:p-8">
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-baseline justify-center">
                  <StatsCounter
                    value={29}
                    prefix="$"
                    suffix=".99"
                    duration={2}
                    delay={0.3}
                    textSize="text-2xl sm:text-3xl"
                    textColor="text-gray-900"
                  />
                  <span className="ml-1 text-base font-normal text-gray-600 sm:text-lg">
                    /mes
                  </span>
                </div>
                <p className="text-sm text-gray-600 sm:text-base">
                  Cancela en cualquier momento
                </p>
                <button className="w-full rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 sm:px-6 sm:py-3 sm:text-base">
                  Comenzar prueba gratuita
                </button>
                <p className="text-xs text-gray-500 sm:text-sm">
                  14 días gratis, luego $29.99/mes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
