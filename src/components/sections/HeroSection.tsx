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
      <section className="relative h-screen overflow-hidden pt-32 pb-4">
        {/* Blurred SVG background */}
        <Image
          src="/background.svg"
          alt="Background"
          fill
          className="absolute inset-0 -z-10 object-cover opacity-60 blur-2xl"
          priority
        />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            {/* Left content */}
            <div className="space-y-8 pt-4">
              <div className="gsap-fade-in space-y-4">
                <h1 className="font-cal text-4xl leading-tight font-extrabold text-gray-900 lg:text-7xl">
                  Consultas médicas{" "}
                  <span className="text-blue-600">rápidas y confiables</span>
                </h1>
                <p className="font-outfit max-w-[600px] text-xl leading-relaxed text-gray-600">
                  Conectamos pacientes con doctores calificados para consultas
                  médicas online. Obtén atención médica profesional desde la
                  comodidad de tu hogar.
                </p>
              </div>

              {/* Features list */}
              <div className="gsap-slide-in-left space-y-3">
                {[
                  "Doctores certificados y especializados",
                  "Consultas disponibles 24/7",
                  "Respuesta en menos de 15 minutos",
                  "Historial médico seguro y privado",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
                    <span className="font-outfit text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA buttons */}
              <div className="gsap-scale-in flex flex-col gap-4 sm:flex-row">
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
            <div className="gsap-slide-in-right absolute right-0 bottom-0 min-h-[520px]">
              <Image
                src="/imgs/drs.png"
                alt="Doctores principales"
                width={900}
                height={700}
                className="absolute right-10 bottom-0 z-0 h-auto w-[700px] max-w-none object-contain"
                priority
              />
              {/* Card review de usuario */}
              <div className="gsap-rotate-in absolute right-[35rem] bottom-[8rem] z-10 flex w-[200px] items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-lg">
                <Image
                  src="/imgs/dra1.png"
                  alt="María González"
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full border-2 border-white object-cover shadow"
                />
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-sm leading-tight font-bold text-gray-900">
                      200+
                    </span>
                    <span className="font-outfit text-xs text-gray-500">
                      Best Doctor
                    </span>
                  </div>
                  <div className="mt-1 flex items-center gap-1">
                    <span className="font-jakarta text-xs text-gray-700">
                      María González
                    </span>
                  </div>
                </div>
              </div>
              {/* Card review de doctor */}
              <div className="gsap-rotate-in absolute right-10 bottom-16 z-10 flex w-[400px] items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-lg">
                <Image
                  src="/imgs/dr1.1.png"
                  alt="Josh"
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full border-2 border-white object-cover shadow"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-1">
                    <span className="font-jakarta text-sm leading-tight font-bold text-gray-900">
                      Josh
                    </span>
                    <Star className="ml-1 h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs text-gray-700">4.8</span>
                  </div>
                  <div className="font-outfit text-xs text-gray-500">
                    Specialist ENT
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <div className="mb-2 flex flex-row items-center justify-center gap-1">
                    <span className="h-2 w-2 rounded-full bg-green-500" />
                    <span className="text-xs font-semibold">Available now</span>
                  </div>
                  <button className="rounded border border-blue-600 px-2 py-1 text-xs text-blue-600 transition hover:bg-blue-50">
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
