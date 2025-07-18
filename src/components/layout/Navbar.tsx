"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";
import gsap from "gsap";

export function Navbar() {
  const { isAuthenticated, logout } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const overlayRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Bloquea scroll en html y body cuando el menú esté abierto
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    if (mobileMenuOpen) {
      html.style.overflow = "hidden";
      body.style.overflow = "hidden";
    } else {
      html.style.overflow = "";
      body.style.overflow = "";
    }

    return () => {
      html.style.overflow = "";
      body.style.overflow = "";
    };
  }, [mobileMenuOpen]);
  // Fondo del nav al hacer scroll
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cerrar menú si agranda pantalla
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileMenuOpen]);

  // GSAP: animar apertura/cierre
  useEffect(() => {
    const o = overlayRef.current!;
    const m = menuRef.current!;

    if (mobileMenuOpen) {
      gsap.to(o, { autoAlpha: 1, duration: 0.3, ease: "power1.out" });
      gsap.to(m, { x: "0%", duration: 0.5, ease: "power3.out" });
    } else {
      gsap.to(o, { autoAlpha: 0, duration: 0.3, ease: "power1.in" });
      gsap.to(m, { x: "100%", duration: 0.5, ease: "power3.in" });
    }
  }, [mobileMenuOpen]);

  return (
    <nav className={`fixed top-0 z-50 w-full transition-all duration-300`}>
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
          <div className="hidden items-center space-x-8 lg:flex">
            <Link
              href="/#doctors"
              className="group font-outfit relative text-gray-700 transition-colors hover:text-blue-600"
            >
              Doctores
              <div className="absolute top-full left-1/2 mt-1 h-1.5 w-1.5 rounded-full bg-blue-600 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
            </Link>
            <Link
              href="/#benefits"
              className="group font-outfit relative text-gray-700 transition-colors hover:text-blue-600"
            >
              Beneficios
              <div className="absolute top-full left-1/2 mt-1 h-1.5 w-1.5 rounded-full bg-blue-600 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
            </Link>
            <Link
              href="/#how-it-works"
              className="group font-outfit relative text-gray-700 transition-colors hover:text-blue-600"
            >
              Cómo funciona
              <div className="absolute top-full left-1/2 mt-1 h-1.5 w-1.5 rounded-full bg-blue-600 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
            </Link>
          </div>

          {/* Acciones desktop */}
          <div className="hidden items-center space-x-4 lg:flex">
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
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen((o) => !o)}
              className="inline-flex items-center justify-center rounded-lg p-2 text-gray-700 transition-colors hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-inset"
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
      </div>

      {/* Overlay */}
      <div
        ref={overlayRef}
        className="pointer-events-none fixed inset-0 z-40 bg-black/40 backdrop-blur-md lg:hidden"
        onClick={() => setMobileMenuOpen(false)}
        style={{ visibility: "hidden", opacity: 0 }}
      />

      {/* Menú móvil */}
      <div
        ref={menuRef}
        id="mobile-menu"
        className="fixed top-0 right-0 z-50 flex h-[50vh] w-full translate-x-[100%] transform flex-col rounded-b-lg bg-white shadow-2xl lg:hidden"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4">
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
            className="h-5 w-5 cursor-pointer"
            onClick={() => setMobileMenuOpen(false)}
          />
        </div>

        {/* Contenido */}
        <div className="flex flex-1 flex-col justify-between px-6 py-4">
          <div className="flex flex-col gap-2">
            {["doctors", "benefits", "how-it-works"].map((sec) => (
              <Link
                key={sec}
                href={`/#${sec}`}
                className="rounded px-1 py-2 text-lg font-bold text-gray-900 transition-colors hover:bg-gray-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                {sec === "doctors"
                  ? "Doctores"
                  : sec === "benefits"
                    ? "Beneficios"
                    : "Cómo funciona"}
              </Link>
            ))}
          </div>

          <div className="my-8" />

          <div className="flex flex-col gap-4">
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
