"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Play, Check, Star } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  const [showModal, setShowModal] = useState(false);

  const handleConsultationClick = () => {
    setShowModal(true);
  };

  return (
    <>
      <section className="relative min-h-[70vh] overflow-hidden pt-24 sm:pt-32 md:pb-10">
        {/* Blurred SVG background */}
        <Image
          src="/background.svg"
          alt="Background"
          fill
          className="absolute inset-0 -z-10 object-cover opacity-60 blur-2xl"
          priority
        />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center md:gap-8 lg:grid-cols-2">
            {/* Left content */}
            <div className="space-y-6 pt-2 sm:space-y-8 sm:pt-4">
              <div className="gsap-fade-in space-y-2 sm:space-y-2">
                <h1 className="font-cal text-5xl leading-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl lg:text-7xl">
                  Consultas médicas{" "}
                  <span className="text-blue-600">rápidas y confiables</span>
                </h1>
                <p className="font-outfit z-50 max-w-[700px] text-base leading-relaxed text-gray-600 sm:text-lg">
                  Conectamos pacientes con doctores calificados para consultas
                  médicas online. Obtén atención médica profesional desde la
                  comodidad de tu hogar.
                </p>
              </div>

              {/* Features list */}
              <div className="gsap-slide-in-left space-y-2 sm:space-y-3">
                {[
                  "Doctores certificados y especializados",
                  "Consultas disponibles 24/7",
                  "Respuesta en menos de 15 minutos",
                  "Historial médico seguro y privado",
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 sm:space-x-3"
                  >
                    <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
                    <span className="font-outfit text-sm text-gray-700 sm:text-base">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA buttons */}
              <div className="gsap-scale-in flex flex-col gap-3 sm:flex-row sm:gap-4">
                <Button size="md" onClick={handleConsultationClick}>
                  Haz tu consulta ahora
                </Button>
                <Button variant="outline" size="md">
                  <Play className="mr-2 h-5 w-5" />
                  Ver cómo funciona
                </Button>
              </div>
            </div>

            {/* Right content - Hero image/illustration */}
            <div className="relative mt-8 flex h-[700px] items-end justify-center lg:absolute lg:right-0 lg:bottom-0 lg:mt-0 lg:block lg:items-end">
              <Image
                src="/imgs/drs.png"
                alt="Doctores principales"
                width={400}
                height={700}
                className="relative -z-10 h-full w-full object-contain sm:w-full"
                priority
              />
              {/* Card review de usuario */}
              <div className="gsap-rotate-in absolute bottom-24 left-2 z-10 flex w-[140px] items-center gap-2 rounded-xl bg-white px-2 py-2 shadow-lg sm:bottom-28 sm:left-8 sm:w-[200px] sm:px-4 sm:py-3 lg:right-[35rem] lg:bottom-[8rem] lg:left-auto lg:w-[200px]">
                <Image
                  src="/imgs/dra1.png"
                  alt="María González"
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded-full border-2 border-white object-cover shadow sm:h-10 sm:w-10"
                />
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-xs leading-tight font-bold text-gray-900 sm:text-sm">
                      200+
                    </span>
                    <span className="font-outfit text-[10px] text-gray-500 sm:text-xs">
                      Best Doctor
                    </span>
                  </div>
                  <div className="mt-1 flex items-center gap-1">
                    <span className="font-jakarta text-[10px] text-gray-700 sm:text-xs">
                      María González
                    </span>
                  </div>
                </div>
              </div>
              {/* Card review de doctor */}
              <div className="gsap-rotate-in absolute right-2 bottom-2 z-10 flex w-[220px] items-center gap-2 rounded-xl bg-white px-2 py-2 shadow-lg sm:right-8 sm:bottom-8 sm:w-[320px] sm:px-4 sm:py-3 lg:right-10 lg:bottom-16 lg:w-[400px]">
                <Image
                  src="/imgs/dr1.1.png"
                  alt="Josh"
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded-full border-2 border-white object-cover shadow sm:h-10 sm:w-10"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-1">
                    <span className="font-jakarta text-xs leading-tight font-bold text-gray-900 sm:text-sm">
                      Josh
                    </span>
                    <Star className="ml-1 h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-[10px] text-gray-700 sm:text-xs">
                      4.8
                    </span>
                  </div>
                  <div className="font-outfit text-[10px] text-gray-500 sm:text-xs">
                    Specialist ENT
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <div className="mb-1 flex flex-row items-center justify-center gap-1 sm:mb-2">
                    <span className="h-2 w-2 rounded-full bg-green-500" />
                    <span className="text-[10px] font-semibold sm:text-xs">
                      Available now
                    </span>
                  </div>
                  <button className="rounded border border-blue-600 px-1 py-0.5 text-[10px] text-blue-600 transition hover:bg-blue-50 sm:px-2 sm:py-1 sm:text-xs">
                    Book Appointment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal for consultation info */}
      {showModal && (
        <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-gray-200 p-4">
          <div className="w-full max-w-md rounded-lg border border-gray-300 bg-white p-6">
            <h3 className="mb-4 text-lg font-semibold text-gray-900">
              ¡Próximamente disponible!
            </h3>
            <p className="mb-6 text-gray-600">
              Estamos trabajando en el sistema de pagos y consultas. Pronto
              podrás realizar consultas médicas online con nuestros doctores
              certificados.
            </p>
            <div className="flex justify-end">
              <Button onClick={() => setShowModal(false)}>Entendido</Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
