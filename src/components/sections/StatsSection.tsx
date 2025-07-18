import React from "react";
import { StatsCounter } from "@/components/ui/StatsCounter";

export function StatsSection() {
  return (
    <section className="w-full bg-white py-10 sm:py-16">
      <div className="mx-auto max-w-4xl px-4">
        <div className="bg gsap-fade-in flex flex-col items-center rounded-2xl p-4 sm:p-8">
          <div className="grid w-full grid-cols-1 gap-6 text-center sm:grid-cols-3 sm:gap-8">
            <StatsCounter
              value={15}
              suffix="K+"
              duration={2.5}
              delay={0.2}
              className="gsap-scale-in"
              label="Consultas realizadas"
            />
            <StatsCounter
              value={200}
              suffix="+"
              duration={2.5}
              delay={0.4}
              className="gsap-scale-in"
              label="Doctores activos"
            />
            <StatsCounter
              value={98}
              suffix="%"
              duration={2.5}
              delay={0.6}
              className="gsap-scale-in"
              label="Satisfacción"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
