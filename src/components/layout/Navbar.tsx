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

  return (
    <nav
      className={`gsap-fade-in fixed top-0 z-50 w-full transition-colors duration-300 ${scrolled ? "bg-white/70 backdrop-blur-md" : "bg-transparent"}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-black">
              <span className="text-lg font-bold text-white">D</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Dctrs.</span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden items-center space-x-8 md:flex">
            <Link
              href="/#doctors"
              className="group relative text-black transition-colors hover:text-blue-600"
            >
              Doctores
              <span className="pointer-events-none absolute top-full left-1/2 mt-1 block h-2 w-2 -translate-x-1/2 scale-0 rounded-full bg-blue-600 opacity-0 transition-all duration-200 group-hover:scale-100 group-hover:opacity-100"></span>
            </Link>
            <Link
              href="/#benefits"
              className="group relative text-black transition-colors hover:text-blue-600"
            >
              Beneficios
              <span className="pointer-events-none absolute top-full left-1/2 mt-1 block h-2 w-2 -translate-x-1/2 scale-0 rounded-full bg-blue-600 opacity-0 transition-all duration-200 group-hover:scale-100 group-hover:opacity-100"></span>
            </Link>
            <Link
              href="/#how-it-works"
              className="group relative text-black transition-colors hover:text-blue-600"
            >
              Cómo funciona
              <span className="pointer-events-none absolute top-full left-1/2 mt-1 block h-2 w-2 -translate-x-1/2 scale-0 rounded-full bg-blue-600 opacity-0 transition-all duration-200 group-hover:scale-100 group-hover:opacity-100"></span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-inset"
              aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu-drawer"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Right side actions (desktop) */}
          <div className="hidden items-center space-x-4 md:flex">
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
        </div>
      </div>
      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          aria-hidden="true"
        />
      )}
      {/* Mobile menu drawer */}
      <div
        id="mobile-menu-drawer"
        className={`fixed top-0 right-0 z-50 h-full w-4/5 max-w-xs transform border-l border-gray-200 bg-white shadow-xl transition-transform duration-300 md:hidden ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
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
            className="rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none"
            aria-label="Cerrar menú"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="flex flex-col space-y-2 px-6 py-6">
          <Link
            href="/#doctors"
            className="rounded py-3 text-base font-medium text-gray-900 transition hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(false)}
          >
            Doctores
          </Link>
          <Link
            href="/#benefits"
            className="rounded py-3 text-base font-medium text-gray-900 transition hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(false)}
          >
            Beneficios
          </Link>
          <Link
            href="/#how-it-works"
            className="rounded py-3 text-base font-medium text-gray-900 transition hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(false)}
          >
            Cómo funciona
          </Link>
          <div className="mt-4 flex flex-col gap-2 border-t border-gray-200 pt-4">
            {isAuthenticated ? (
              <>
                <Link
                  href="/dashboard"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Button variant="outline" size="sm" className="mb-2 w-full">
                    Dashboard
                  </Button>
                </Link>
                <Button
                  variant="ghost"
                  size="sm"
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
                >
                  <Button variant="outline" size="sm" className="mb-2 w-full">
                    Soy Doctor
                  </Button>
                </Link>
                <Button size="sm" className="w-full">
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
