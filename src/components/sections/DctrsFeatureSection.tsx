import React from "react";
import Image from "next/image";

export function DctrsFeatureSection() {
  return (
    <section id="benefits" className="bg-white py-10 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-6 sm:gap-2 md:grid-cols-2">
          {/* Left: Doctor image with floating card */}
          <div className="gsap-slide-in-left relative flex w-full justify-center">
            <div className="aspect-[4/5] w-full max-w-[220px] overflow-hidden rounded-3xl bg-gray-100 shadow-lg sm:max-w-md">
              <Image
                src="/imgs/dra1.png"
                alt="Doctor principal Dctrs."
                fill
                style={{ objectFit: "cover" }}
                className="rounded-3xl"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
            </div>
            {/* Floating card */}
            <div className="gsap-rotate-in absolute -bottom-8 left-1/2 flex w-56 -translate-x-1/2 items-center gap-3 rounded-2xl border border-gray-100 bg-white px-4 py-3 shadow-xl sm:w-72 sm:gap-4 sm:px-6 sm:py-4">
              <div className="flex-shrink-0">
                <Image
                  src="/imgs/dra1.png"
                  alt="Dra. María González"
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full border-2 border-white object-cover shadow"
                />
              </div>
              <div>
                <div className="font-jakarta text-sm font-semibold text-gray-900 sm:text-base">
                  Dra. María González
                </div>
                <div className="font-outfit text-xs text-gray-500">
                  Medicina General
                </div>
                <div className="mt-1 flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-green-500" />
                  <span className="text-xs font-semibold text-green-600">
                    En línea
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Right: Text content */}
          <div className="gsap-slide-in-right flex h-full flex-col justify-center gap-6 rounded-3xl bg-gradient-to-b from-white to-blue-100 p-6 sm:gap-8 sm:p-10">
            <div className="mb-2 sm:mb-4">
              <span className="mb-2 inline-block rounded-full border border-black px-3 py-1 text-xs font-semibold sm:px-4">
                Atención médica moderna
              </span>
              <h2 className="font-cal mb-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Atención personalizada y humana con Dctrs.
              </h2>
              <p className="font-outfit text-base leading-relaxed text-black/80 sm:text-lg">
                En <strong className="text-black">Dctrs.</strong> te conectamos
                con doctores certificados, listos para atenderte en línea de
                manera rápida, segura y profesional. Nuestro equipo está
                comprometido con tu bienestar y el de tu familia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
