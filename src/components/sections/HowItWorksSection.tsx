import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { 
  UserPlusIcon, 
  CreditCardIcon, 
  VideoCameraIcon,
  DocumentCheckIcon,
  ComputerDesktopIcon,
  UserIcon
} from '@heroicons/react/24/outline';

const patientSteps = [
  {
    icon: UserPlusIcon,
    title: 'Regístrate',
    description: 'Crea tu cuenta y completa tu perfil médico básico.',
    step: '01'
  },
  {
    icon: CreditCardIcon,
    title: 'Elige tu plan',
    description: 'Selecciona el plan de suscripción que mejor se adapte a tus necesidades.',
    step: '02'
  },
  {
    icon: VideoCameraIcon,
    title: 'Solicita consulta',
    description: 'Describe tus síntomas y conecta con un doctor disponible.',
    step: '03'
  },
  {
    icon: DocumentCheckIcon,
    title: 'Recibe atención',
    description: 'Obtén diagnóstico, tratamiento y recetas médicas digitales.',
    step: '04'
  }
];

const doctorSteps = [
  {
    icon: UserIcon,
    title: 'Perfil profesional',
    description: 'Crea tu perfil con credenciales, especialidades y experiencia.',
    step: '01'
  },
  {
    icon: ComputerDesktopIcon,
    title: 'Dashboard médico',
    description: 'Accede a tu panel de control para gestionar consultas y pacientes.',
    step: '02'
  },
  {
    icon: VideoCameraIcon,
    title: 'Atiende pacientes',
    description: 'Realiza consultas virtuales y proporciona diagnósticos profesionales.',
    step: '03'
  },
  {
    icon: DocumentCheckIcon,
    title: 'Seguimiento',
    description: 'Mantén historial de pacientes y realiza seguimientos necesarios.',
    step: '04'
  }
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            ¿Cómo funciona Dctrs.?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un proceso simple y eficiente tanto para pacientes como para doctores.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 rounded-lg p-1 flex">
            <button className="px-6 py-2 rounded-md bg-white text-blue-600 font-medium shadow-sm">
              Para Pacientes
            </button>
            <button className="px-6 py-2 rounded-md text-gray-600 font-medium hover:text-gray-900">
              Para Doctores
            </button>
          </div>
        </div>

        {/* Patient flow */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {patientSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="relative">
                  <Card className="text-center h-full">
                    <div className="flex flex-col items-center space-y-4">
                      <div className="relative">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                          <IconComponent className="w-8 h-8 text-blue-600" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                          {step.step}
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </Card>
                  
                  {/* Arrow connector */}
                  {index < patientSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Doctor CTA section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 lg:p-12 text-center text-white">
          <div className="max-w-3xl mx-auto space-y-6">
            <h3 className="text-2xl lg:text-3xl font-bold">
              ¿Eres doctor y quieres unirte a nuestra plataforma?
            </h3>
            <p className="text-lg text-blue-100">
              Únete a cientos de profesionales que ya están atendiendo pacientes en Dctrs. 
              Flexibilidad horaria, buenos ingresos y tecnología de vanguardia.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
              <div className="text-center">
                <div className="text-2xl font-bold">$50-100</div>
                <div className="text-blue-100 text-sm">Por consulta</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">Flexible</div>
                <div className="text-blue-100 text-sm">Horarios</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-blue-100 text-sm">Soporte técnico</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/doctor-login">
                <Button variant="secondary" size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Acceder como Doctor
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
                Más información
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
