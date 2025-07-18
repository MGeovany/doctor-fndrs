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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      className={`gsap-fade-in fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-gray-100 bg-white/95 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="z-50 flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-black">
              <span className="text-lg font-bold text-white">D</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Dctrs.</span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden items-center space-x-8 lg:flex">
            <Link
              href="/#doctors"
              className="group relative font-medium text-gray-700 transition-colors hover:text-blue-600"
            >
              Doctores
              <span className="pointer-events-none absolute top-full left-1/2 mt-1 block h-0.5 w-0 scale-0 rounded-full bg-blue-600 opacity-0 transition-all duration-200 group-hover:w-full group-hover:scale-100 group-hover:opacity-100"></span>
            </Link>
            <Link
              href="/#benefits"
              className="group relative font-medium text-gray-700 transition-colors hover:text-blue-600"
            >
              Beneficios
              <span className="pointer-events-none absolute top-full left-1/2 mt-1 block h-0.5 w-0 scale-0 rounded-full bg-blue-600 opacity-0 transition-all duration-200 group-hover:w-full group-hover:scale-100 group-hover:opacity-100"></span>
            </Link>
            <Link
              href="/#how-it-works"
              className="group relative font-medium text-gray-700 transition-colors hover:text-blue-600"
            >
              Cómo funciona
              <span className="pointer-events-none absolute top-full left-1/2 mt-1 block h-0.5 w-0 scale-0 rounded-full bg-blue-600 opacity-0 transition-all duration-200 group-hover:w-full group-hover:scale-100 group-hover:opacity-100"></span>
            </Link>
          </div>

          {/* Right side actions (desktop) */}
          <div className="hidden items-center space-x-4 lg:flex">
            {isAuthenticated ? (
              <div className="flex items-center space-x-3">
                <Link href="/dashboard">
                  <Button variant="outline" size="sm">
                    Dashboard
                  </Button>
                </Link>
                <Button variant="ghost" size="sm" onClick={logout}>
                  Cerrar sesión
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link href="/doctor-login">
                  <Button variant="outline" size="sm">
                    Soy Doctor
                  </Button>
                </Link>
                <Button size="sm">Haz tu consulta</Button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-lg p-2 text-gray-700 transition-colors hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-inset"
              aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
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

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
          aria-hidden="true"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="fixed top-0 right-0 z-50 h-full w-80 max-w-[85vw] translate-x-0 transform bg-white shadow-2xl transition-transform duration-300 ease-in-out lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-menu-title"
        >
          {/* Mobile menu header */}
          <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
            <h2 id="mobile-menu-title" className="sr-only">
              Menú de navegación
            </h2>
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
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              aria-label="Cerrar menú"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile menu content */}
          <div className="flex flex-col px-6 py-6">
            {/* Navigation links */}
            <div className="space-y-1">
              <Link
                href="/#doctors"
                className="flex items-center rounded-lg px-3 py-3 text-base font-medium text-gray-900 transition-colors hover:bg-gray-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                Doctores
              </Link>
              <Link
                href="/#benefits"
                className="flex items-center rounded-lg px-3 py-3 text-base font-medium text-gray-900 transition-colors hover:bg-gray-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                Beneficios
              </Link>
              <Link
                href="/#how-it-works"
                className="flex items-center rounded-lg px-3 py-3 text-base font-medium text-gray-900 transition-colors hover:bg-gray-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                Cómo funciona
              </Link>
            </div>

            {/* Action buttons */}
            <div className="mt-8 space-y-3 border-t border-gray-200 pt-6">
              {isAuthenticated ? (
                <>
                  <Link
                    href="/dashboard"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block"
                  >
                    <Button variant="outline" size="md" className="w-full">
                      Dashboard
                    </Button>
                  </Link>
                  <Button
                    variant="ghost"
                    size="md"
                    className="w-full"
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
                    className="block"
                  >
                    <Button variant="outline" size="md" className="w-full">
                      Soy Doctor
                    </Button>
                  </Link>
                  <Button size="md" className="w-full">
                    Haz tu consulta
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
