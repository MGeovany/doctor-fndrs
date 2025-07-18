"use client";

import React, { useState } from "react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { mockDoctors } from "@/data/mockData";
import { Star, Search, Filter, User } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import type { Doctor } from "@/types";

export function DoctorsSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState<string | null>(
    null,
  );

  // Get unique specialties for filter
  const specialties = Array.from(
    new Set(mockDoctors.map((doctor) => doctor.specialty)),
  );

  // Filter doctors based on search and specialty
  const filteredDoctors = mockDoctors.filter((doctor) => {
    const matchesSearch =
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = selectedSpecialty
      ? doctor.specialty === selectedSpecialty
      : true;
    return matchesSearch && matchesSpecialty;
  });

  // Helper DoctorCard component to allow hooks
  function DoctorCard({ doctor }: { doctor: Doctor }) {
    const [imgError, setImgError] = React.useState(false);
    return (
      <Card
        key={doctor.id}
        className="!hover:shadow-sm overflow-hidden !shadow-none transition-all duration-300"
        padding="none"
      >
        <div className="relative">
          {/* Doctor image banner */}
          <div className="flex h-48 w-full items-center justify-center overflow-hidden bg-gray-200">
            {doctor.image && !imgError ? (
              <Image
                src={doctor.image}
                alt={doctor.name}
                fill
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                }}
                onError={() => setImgError(true)}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            ) : (
              <User className="h-20 w-20 text-gray-400" />
            )}
          </div>
          {/* Online status */}
          {doctor.isOnline && (
            <Badge variant="success" className="absolute top-4 right-4">
              En línea
            </Badge>
          )}
        </div>
        <div className="p-6">
          <div className="mb-2 flex items-start justify-between">
            <div>
              <h3 className="font-jakarta text-lg text-gray-900">
                {doctor.name}
              </h3>
              <p className="font-outfit text-sm text-gray-600">
                {doctor.specialty}
              </p>
            </div>
            <div className="flex items-center rounded-md px-2 py-1">
              <Star className="mr-1 h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="font-outfit text-sm text-gray-900">
                {doctor.rating}
              </span>
            </div>
          </div>
          <div className="font-outfit mb-4 flex items-center space-x-2 text-sm text-gray-600">
            <span>{doctor.experience} de experiencia</span>
            <span>•</span>
            <span>{doctor.patientsAttended}+ pacientes</span>
          </div>
          <Button className="w-full">Consultar ahora</Button>
        </div>
      </Card>
    );
  }

  return (
    <section id="doctors" className="bg-gray-50 py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="gsap-fade-in mb-8 text-center sm:mb-12">
          <h2 className="mb-3 text-3xl font-bold text-gray-900 sm:mb-4 sm:text-6xl">
            Nuestros Doctores Destacados
          </h2>
          <p className="font-outfit mx-auto max-w-3xl text-base text-gray-600 sm:text-xl">
            Contamos con un equipo de profesionales altamente calificados y
            listos para atenderte.
          </p>
        </div>

        {/* Search and filters */}
        <div className="gsap-slide-in-left mb-6 flex flex-col gap-3 sm:mb-8 sm:gap-4 md:flex-row">
          <div className="relative flex-1">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="font-outfit block w-full rounded-md border border-gray-300 bg-white py-2 pr-3 pl-10 text-sm leading-5 text-gray-900 placeholder-gray-500 focus:outline-none sm:text-base sm:text-sm"
              placeholder="Buscar por nombre o especialidad..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex items-center space-x-2">
            <Filter className="h-5 w-5 text-gray-400" />
            <span className="text-xs text-gray-600 sm:text-sm">Filtrar:</span>
            <Select
              value={selectedSpecialty ?? "all"}
              onValueChange={(value) =>
                setSelectedSpecialty(value === "all" ? null : value)
              }
            >
              <SelectTrigger className="font-outfit w-[140px] text-xs sm:w-[220px] sm:text-base">
                <SelectValue placeholder="Todas las especialidades" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas las especialidades</SelectItem>
                {specialties.map((specialty) => (
                  <SelectItem key={specialty} value={specialty}>
                    {specialty}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Doctors grid */}
        <div className="gsap-scale-in grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredDoctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>

        {filteredDoctors.length === 0 && (
          <div className="py-8 text-center sm:py-12">
            <p className="text-sm text-gray-600 sm:text-base">
              No se encontraron doctores con los criterios de búsqueda.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
