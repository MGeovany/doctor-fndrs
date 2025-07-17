import React from 'react';
import { Card } from '@/components/ui/Card';
import { 
  ClockIcon, 
  ShieldCheckIcon, 
  CurrencyDollarIcon,
  DevicePhoneMobileIcon,
  UserGroupIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';

const benefits = [
  {
    icon: ClockIcon,
    title: 'Disponibilidad 24/7',
    description: 'Accede a consultas médicas en cualquier momento del día, todos los días del año.',
    color: 'text-blue-600'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Doctores Certificados',
    description: 'Todos nuestros profesionales están certificados y cuentan con amplia experiencia.',
    color: 'text-green-600'
  },
  {
    icon: CurrencyDollarIcon,
    title: 'Precios Accesibles',
    description: 'Consultas médicas a precios justos con planes de suscripción flexibles.',
    color: 'text-yellow-600'
  },
  {
    icon: DevicePhoneMobileIcon,
    title: 'Desde Cualquier Dispositivo',
    description: 'Realiza consultas desde tu computadora, tablet o teléfono móvil.',
    color: 'text-purple-600'
  },
  {
    icon: UserGroupIcon,
    title: 'Atención Personalizada',
    description: 'Cada consulta es personalizada según tus necesidades específicas de salud.',
    color: 'text-red-600'
  },
  {
    icon: DocumentTextIcon,
    title: 'Historial Médico Digital',
    description: 'Mantén un registro completo y seguro de todas tus consultas y tratamientos.',
    color: 'text-indigo-600'
  }
];

export function BenefitsSection() {
  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            ¿Por qué elegir Dctrs.?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos una experiencia médica moderna, segura y conveniente para todos nuestros pacientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center space-y-4">
                  <div className={`p-3 rounded-full bg-gray-100 ${benefit.color}`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Additional benefits section */}
        <div className="mt-16 bg-white rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Suscripción Premium
              </h3>
              <p className="text-gray-600 text-lg">
                Obtén acceso ilimitado a consultas médicas con nuestro plan premium. 
                Ideal para familias y personas que requieren atención médica frecuente.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Consultas ilimitadas</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Prioridad en la atención</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Acceso a especialistas</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Seguimiento personalizado</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-8 text-center">
              <div className="space-y-4">
                <h4 className="text-3xl font-bold text-gray-900">
                  $29.99
                  <span className="text-lg font-normal text-gray-600">/mes</span>
                </h4>
                <p className="text-gray-600">
                  Cancela en cualquier momento
                </p>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors">
                  Comenzar prueba gratuita
                </button>
                <p className="text-sm text-gray-500">
                  14 días gratis, luego $29.99/mes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
