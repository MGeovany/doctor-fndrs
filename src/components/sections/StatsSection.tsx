import React from "react";

export function StatsSection() {
  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto max-w-4xl px-4">
        <div className="bg flex flex-col items-center rounded-2xl p-8">
          <div className="grid w-full grid-cols-1 gap-8 text-center sm:grid-cols-3">
            <div>
              <div className="mb-2 text-5xl font-extrabold text-blue-600 md:text-7xl">
                15K+
              </div>
              <div className="text-lg font-medium text-gray-700 md:text-xl">
                Consultas realizadas
              </div>
            </div>
            <div>
              <div className="mb-2 text-5xl font-extrabold text-blue-600 md:text-7xl">
                200+
              </div>
              <div className="text-lg font-medium text-gray-700 md:text-xl">
                Doctores activos
              </div>
            </div>
            <div>
              <div className="mb-2 text-5xl font-extrabold text-blue-600 md:text-7xl">
                98%
              </div>
              <div className="text-lg font-medium text-gray-700 md:text-xl">
                Satisfacción
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
