import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="gsap-fade-in bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4 flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/60 bg-black">
                <span className="text-lg font-bold text-white">D</span>
              </div>
              <span className="text-xl font-bold">Dctrs.</span>
            </div>
            <p className="font-outfit mb-4 max-w-md text-gray-400">
              Conectamos pacientes con doctores calificados para consultas
              médicas rápidas y confiables. Tu salud es nuestra prioridad.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wider text-gray-400 uppercase">
              Enlaces rápidos
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/#doctors"
                  className="font-outfit text-gray-300 transition-colors hover:text-white"
                >
                  Doctores
                </Link>
              </li>
              <li>
                <Link
                  href="/#benefits"
                  className="font-outfit text-gray-300 transition-colors hover:text-white"
                >
                  Beneficios
                </Link>
              </li>
              <li>
                <Link
                  href="/#how-it-works"
                  className="font-outfit text-gray-300 transition-colors hover:text-white"
                >
                  Cómo funciona
                </Link>
              </li>
              <li>
                <Link
                  href="/doctor-login"
                  className="font-outfit text-gray-300 transition-colors hover:text-white"
                >
                  Portal Doctores
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-outfit mb-4 text-sm font-semibold tracking-wider text-gray-400 uppercase">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="font-outfit text-gray-300 transition-colors hover:text-white"
                >
                  Términos de servicio
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-outfit text-gray-300 transition-colors hover:text-white"
                >
                  Política de privacidad
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-outfit text-gray-300 transition-colors hover:text-white"
                >
                  Contacto
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-outfit text-gray-300 transition-colors hover:text-white"
                >
                  Soporte
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8">
          <p className="font-outfit text-center text-gray-400">
            © 2025 Dctrs. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
