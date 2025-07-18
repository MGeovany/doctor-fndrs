"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useApp } from "@/context/AppContext";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Eye, EyeOff, User, Lock } from "lucide-react";
import { PageTransition } from "@/components/ui/PageTransition";

export default function DoctorLoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { login } = useApp();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Simulate loading delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const success = login(username, password);

    if (success) {
      router.push("/dashboard");
    } else {
      setError("Credenciales incorrectas. Verifica tu usuario y contraseña.");
    }

    setIsLoading(false);
  };

  const fillDemoCredentials = () => {
    setUsername("doctor");
    setPassword("doctor123");
  };

  return (
    <PageTransition>
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          {/* Header */}
          <div className="text-center">
            <Link href="/" className="mb-6 inline-flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-black">
                <span className="text-xl font-bold text-white">D</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">Dctrs.</span>
            </Link>
            <h2 className="text-3xl font-bold text-gray-900">
              Portal de Doctores
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Accede a tu dashboard médico
            </p>
          </div>

          {/* Demo credentials info */}
          <Card className="flex flex-col items-center border-blue-200 bg-blue-50 py-8">
            <p className="text-md mb-4 text-center">
              Puedes iniciar sesión con las siguientes credenciales:
            </p>
            <div className="mb-6 flex flex-col items-center gap-2">
              <span className="rounded-md bg-gray-200 px-4 py-1 font-mono text-sm font-bold">
                doctor
              </span>
              <span className="rounded-md bg-gray-200 px-4 py-1 font-mono text-sm font-bold">
                doctor123
              </span>
            </div>
            <Button variant="primary" size="sm" onClick={fillDemoCredentials}>
              Usar credenciales de prueba
            </Button>
          </Card>

          {/* Login form */}
          <Card>
            <form className="space-y-6" onSubmit={handleSubmit}>
              {error && (
                <div className="rounded-md border border-red-200 bg-red-50 p-4">
                  <p className="text-sm text-red-600">{error}</p>
                </div>
              )}

              <div>
                <label
                  htmlFor="username"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Usuario
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    required
                    className="block w-full rounded-md border border-gray-300 bg-white py-2 pr-3 pl-10 leading-5 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500 focus:outline-none sm:text-sm"
                    placeholder="Ingresa tu usuario"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Contraseña
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    className="block w-full rounded-md border border-gray-300 bg-white py-2 pr-10 pl-10 leading-5 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500 focus:outline-none sm:text-sm"
                    placeholder="Ingresa tu contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center pr-3"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Recordarme
                  </label>
                </div>

                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-blue-600 hover:text-blue-500"
                  >
                    ¿Olvidaste tu contraseña?
                  </a>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full"
                size="lg"
                disabled={isLoading}
              >
                {isLoading ? "Iniciando sesión..." : "Iniciar sesión"}
              </Button>
            </form>
          </Card>

          {/* Footer links */}
          <div className="space-y-2 text-center">
            <p className="text-sm text-gray-600">
              ¿No tienes cuenta?{" "}
              <a
                href="#"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Solicita acceso
              </a>
            </p>
            <p className="text-sm text-gray-600">
              <Link
                href="/"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                ← Volver al inicio
              </Link>
            </p>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
