import React from "react";
import Image from "next/image";

export function DctrsFeatureSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-2 md:grid-cols-2">
          {/* Left: Doctor image with floating card */}
          <div className="relative flex w-full justify-center">
            <div className="aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl bg-gray-100 shadow-lg">
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
            <div className="absolute -bottom-8 left-1/2 flex w-72 -translate-x-1/2 items-center gap-4 rounded-2xl border border-gray-100 bg-white px-6 py-4 shadow-xl">
              <div className="flex-shrink-0">
                <Image
                  src="/imgs/dra1.png"
                  alt="Dra. María González"
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full border-2 border-white object-cover shadow"
                />
              </div>
              <div>
                <div className="font-jakarta text-base font-semibold text-gray-900">
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
          <div className="flex h-full flex-col justify-center gap-8 rounded-3xl bg-gradient-to-b from-white to-blue-100 p-10">
            <div className="mb-4">
              <span className="mb-2 inline-block rounded-full border border-black px-4 py-1 text-xs font-semibold">
                Atención médica moderna
              </span>
              <h2 className="font-cal mb-2 text-3xl font-bold text-gray-900 md:text-4xl">
                Atención personalizada y humana con Dctrs.
              </h2>
              <p className="font-outfit text-lg leading-relaxed text-black/80">
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
