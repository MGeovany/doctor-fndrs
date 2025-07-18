"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function DctrsFeatureSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const profileCardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Imagen principal
      gsap.from(imageWrapperRef.current, {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
      // Tarjeta de perfil
      gsap.from(profileCardRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
      // Bloque de texto
      gsap.from(contentRef.current, {
        x: 100,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="benefits"
      ref={sectionRef}
      className="overflow-hidden bg-white py-10 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-6 sm:gap-2 md:grid-cols-2">
          {/* Lado Izquierdo: Imagen + Perfil */}
          <div className="relative flex w-full justify-center">
            <div
              ref={imageWrapperRef}
              className="relative aspect-[4/5] w-full max-w-[220px] overflow-hidden rounded-3xl bg-gray-100 shadow-lg sm:max-w-md"
            >
              <Image
                src="/imgs/dra1.png"
                alt="Doctor principal Dctrs."
                fill
                className="rounded-3xl object-cover"
                sizes="(max-width: 640px) 100vw, 448px"
                quality={90}
                priority
              />
            </div>

            <div
              ref={profileCardRef}
              className="absolute -bottom-8 left-1/2 flex w-56 -translate-x-1/2 items-center gap-3 rounded-2xl border border-gray-100 bg-white px-4 py-3 shadow-xl sm:w-72 sm:gap-4 sm:px-6 sm:py-4"
            >
              <div className="flex-shrink-0">
                <Image
                  src="/imgs/dra1.png"
                  alt="Dra. María González"
                  width={80}
                  height={80}
                  className="h-12 w-12 rounded-full border-2 border-white object-cover shadow"
                  quality={90}
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

          {/* Lado Derecho: Texto */}
          <div
            ref={contentRef}
            className="flex h-full flex-col justify-center gap-6 rounded-3xl bg-gradient-to-b from-white to-blue-100 p-6"
          >
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
