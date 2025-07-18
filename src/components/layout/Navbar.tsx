"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";
import { Button } from "@/components/ui/Button";
export function Navbar() {
  const { isAuthenticated, logout } = useApp();
  const [scrolled, setScrolled] = useState(false);

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

          {/* Navigation Links */}
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

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Auth buttons */}
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
    </nav>
  );
}
