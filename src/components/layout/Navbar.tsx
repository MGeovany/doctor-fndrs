"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const { isAuthenticated, logout } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // bloquear scroll detrás del menú móvil
  useEffect(() => {
    document.documentElement.style.overflow = mobileMenuOpen ? "hidden" : "";
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // detectar scroll para el blur en desktop
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 w-full transition-all duration-300`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="z-50 flex items-center space-x-2">
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-black">
              <span className="text-lg font-bold text-white">D</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Dctrs.</span>
          </Link>

          {/* Links desktop */}
          <div className="hidden lg:flex lg:space-x-8">
            {[
              { href: "/#doctors", label: "Doctores" },
              { href: "/#benefits", label: "Beneficios" },
              { href: "/#how-it-works", label: "Cómo funciona" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group font-outfit relative text-gray-700 transition-colors hover:text-blue-600"
              >
                {link.label}
                <span className="absolute top-full left-1/2 mt-1 block h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-blue-600 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
              </Link>
            ))}
          </div>

          {/* Acciones desktop */}
          <div className="hidden lg:flex lg:space-x-4">
            {isAuthenticated ? (
              <>
                <Link href="/dashboard">
                  <Button variant="outline" size="sm">
                    Dashboard
                  </Button>
                </Link>
                <Button variant="ghost" size="sm" onClick={logout}>
                  Cerrar sesión
                </Button>
              </>
            ) : (
              <>
                <Link href="/doctor-login">
                  <Button variant="outline" size="sm">
                    Soy Doctor
                  </Button>
                </Link>
                <Button size="sm">Haz tu consulta</Button>
              </>
            )}
          </div>

          {/* Botón mobile */}
          <button
            onClick={() => setMobileMenuOpen((v) => !v)}
            className="z-50 inline-flex items-center justify-center rounded-lg p-2 text-gray-700 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-inset lg:hidden"
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Overlay móvil */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-200 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Menú móvil: sidebar desde la izquierda, ancho 16rem, altura 50vh */}
      <div
        className={`fixed top-0 left-0 z-50 h-[50vh] w-full transform rounded-b-lg bg-white shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"} `}
        role="dialog"
        aria-modal="true"
      >
        {/* Header móvil */}
        <div className="flex items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="flex items-center space-x-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-black">
              <span className="text-lg font-bold text-white">D</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Dctrs.</span>
          </Link>
          <X
            className="h-5 w-5 cursor-pointer"
            onClick={() => setMobileMenuOpen(false)}
          />
        </div>

        {/* Contenido móvil */}
        <div className="flex flex-1 flex-col justify-between px-6 py-4">
          <div className="space-y-2">
            {[
              { href: "/#doctors", label: "Doctores" },
              { href: "/#benefits", label: "Beneficios" },
              { href: "/#how-it-works", label: "Cómo funciona" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded px-1 py-2 text-lg font-bold text-gray-900 hover:bg-gray-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="my-8" />

          <div className="flex flex-col gap-2 space-y-4">
            {isAuthenticated ? (
              <>
                <Link
                  href="/dashboard"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Button
                    variant="primary"
                    size="md"
                    className="w-full py-3 text-lg font-bold"
                  >
                    Dashboard
                  </Button>
                </Link>
                <Button
                  variant="ghost"
                  size="md"
                  className="w-full py-3 text-lg font-bold"
                  onClick={() => {
                    logout();
                    setMobileMenuOpen(false);
                  }}
                >
                  Cerrar sesión
                </Button>
              </>
            ) : (
              <>
                <Link
                  href="/doctor-login"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Button
                    variant="outline"
                    size="md"
                    className="w-full py-3 text-lg font-bold"
                  >
                    Soy Doctor
                  </Button>
                </Link>
                <Button
                  size="md"
                  className="w-full bg-black py-3 text-lg font-bold text-white"
                >
                  Haz tu consulta
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
