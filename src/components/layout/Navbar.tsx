"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const { isAuthenticated, logout } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Bloquear scroll del fondo cuando el menú móvil está abierto
  useEffect(() => {
    document.documentElement.style.overflow = mobileMenuOpen ? "hidden" : "";
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const links = [
    { href: "/#doctors", label: "Doctores" },
    { href: "/#benefits", label: "Beneficios" },
    { href: "/#how-it-works", label: "Cómo funciona" },
  ];

  return (
    <nav className="fixed top-0 right-0 left-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="z-50 flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-black">
              <span className="text-lg font-bold text-white">D</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Dctrs.</span>
          </Link>

          {/* Links desktop */}
          <div className="hidden lg:flex lg:space-x-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-outfit text-gray-700 transition-colors hover:text-blue-600"
              >
                {link.label}
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
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Menú móvil full-screen */}
      <div
        className={`fixed inset-0 z-50 transform bg-white transition-transform duration-300 ease-in-out lg:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex h-screen flex-col">
          {/* Header móvil */}
          <div className="flex items-center justify-between border-b px-6 py-4">
            <Link
              href="/"
              className="flex items-center space-x-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-black">
                <span className="text-lg font-bold text-white">D</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Dctrs.</span>
            </Link>
            <X
              className="h-6 w-6 cursor-pointer text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            />
          </div>

          {/* Links móviles */}
          <div className="space-y-4 overflow-auto px-6 py-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded px-2 py-2 text-lg font-bold text-gray-900 hover:bg-gray-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Acciones móviles (fijas al fondo) */}
          <div className="flex flex-col gap-3 px-6 pb-6">
            {isAuthenticated ? (
              <>
                <Link
                  href="/dashboard"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Button
                    variant="outline"
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
