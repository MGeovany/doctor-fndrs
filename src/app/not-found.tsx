"use client";

import Link from "next/link";
import { ArrowLeft, Code, Users, Zap } from "lucide-react";
import { PageTransition } from "@/components/ui/PageTransition";

export default function NotFound() {
  return (
    <PageTransition>
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-4">
        <div className="mx-auto max-w-2xl text-center">
          {/* 404 Number */}
          <div className="gsap-scale-in mb-8">
            <h1 className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-9xl font-bold text-transparent">
              404
            </h1>
          </div>

          {/* Main Message */}
          <div className="gsap-fade-in mb-8">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              ¡Oops! Esta página no existe
            </h2>
            <p className="font-outfit text-md leading-relaxed text-gray-600">
              Parece que te has aventurado en territorio inexplorado. Pero no te
              preocupes, esto podría ser el comienzo de algo increíble.
            </p>
          </div>

          {/* Call to Action */}
          <div className="gsap-slide-in-left mb-12">
            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-xl">
              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                Imagina lo que puedes lograr.
              </h3>
              <p className="font-outfit mb-6 leading-relaxed text-gray-600">
                La tecnología transforma realidades. ¿Y si el próximo gran
                avance de tu empresa comienza hoy?
              </p>

              <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="flex items-center justify-center space-x-2 text-blue-600">
                  <Code className="h-5 w-5" />
                  <span className="font-medium">Desarrollo</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-indigo-600">
                  <Users className="h-5 w-5" />
                  <span className="font-medium">Consultoría</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-purple-600">
                  <Zap className="h-5 w-5" />
                  <span className="font-medium">Innovación</span>
                </div>
              </div>

              <div className="space-y-4">
                <a
                  href="https://thefndrs.com"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Descubre cómo transformar tu visión
                </a>

                <Link
                  href="/"
                  className="inline-flex w-full items-center justify-center px-8 py-3 font-medium text-gray-700 transition-all duration-300 hover:border-blue-600 hover:text-blue-600"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Volver al inicio
                </Link>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="gsap-slide-in-right">
            <p className="text-sm text-gray-500">
              ¿Tienes una idea o proyecto en mente?
              <br />
              <a
                href="mailto:hello@thefndrs.com"
                className="font-medium text-blue-600 hover:text-blue-700"
              >
                hello@thefndrs.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
