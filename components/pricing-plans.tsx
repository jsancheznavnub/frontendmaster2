"use client"

import { useState } from "react"
import { Check, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export function PricingPlans() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly")

  const toggleBillingCycle = () => {
    setBillingCycle(billingCycle === "monthly" ? "annual" : "monthly")
  }

  return (
    <div className="space-y-10">
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-white">Planes y precios para todas tus necesidades</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Elige el plan que mejor se adapte a tus necesidades de seguridad web y análisis de vulnerabilidades
        </p>
      </div>

      <div className="flex justify-center items-center gap-4 py-4">
        <Label htmlFor="billing-toggle" className="text-white">
          Mensual
        </Label>
        <Switch
          id="billing-toggle"
          checked={billingCycle === "annual"}
          onCheckedChange={toggleBillingCycle}
          className="data-[state=checked]:bg-secondary-color"
        />
        <Label htmlFor="billing-toggle" className="text-white">
          Anual
        </Label>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Plan Starter */}
        <div className="rounded-lg border border-secondary-color bg-black/30 backdrop-blur-sm p-8 shadow-[0_0_15px_rgba(1,223,223,0.3)] flex flex-col">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-white mb-2">Starter</h2>
            <p className="text-gray-300 text-sm">
              Recomendado para personas con al menos 1 año de experiencia en ciberseguridad
            </p>
          </div>

          <div className="mb-6">
            <div className="text-4xl font-bold text-white">Gratis*</div>
          </div>

          <Link
            href="/registro"
            className="flex items-center justify-center gap-2 bg-transparent border border-secondary-color text-white font-medium py-3 rounded-md hover:bg-black/40 transition-colors mb-8"
          >
            <span>Iniciar plan</span>
            <ArrowRight className="h-4 w-4" />
          </Link>

          <div className="space-y-4 flex-grow">
            <div className="flex items-start gap-2">
              <Check className="h-5 w-5 text-secondary-color shrink-0 mt-0.5" />
              <span className="text-white">Análisis básico de vulnerabilidades</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="h-5 w-5 text-secondary-color shrink-0 mt-0.5" />
              <span className="text-white">Escaneo de puertos limitado</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="h-5 w-5 text-secondary-color shrink-0 mt-0.5" />
              <span className="text-white">Soporte por chat</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="h-5 w-5 text-secondary-color shrink-0 mt-0.5" />
              <span className="text-white">Recomendaciones básicas</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="h-5 w-5 text-secondary-color shrink-0 mt-0.5" />
              <span className="text-white">1 usuario</span>
            </div>
          </div>
        </div>

        {/* Plan Professional */}
        <div className="rounded-lg border border-secondary-color bg-black/30 backdrop-blur-sm p-8 shadow-[0_0_15px_rgba(1,223,223,0.3)] flex flex-col relative">
          <div className="absolute -top-4 right-4 bg-secondary-color text-black text-xs font-bold px-3 py-1 rounded-full">
            RECOMENDADO
          </div>

          <div className="mb-6">
            <h2 className="text-2xl font-bold text-white mb-2">Professional</h2>
            <p className="text-gray-300 text-sm">Recomendado para empresas con necesidades de seguridad avanzadas</p>
          </div>

          <div className="mb-6">
            <div className="text-4xl font-bold text-white flex items-end">
              ${billingCycle === "monthly" ? "18" : "180"}
              <span className="text-lg text-gray-300 ml-1">/{billingCycle === "monthly" ? "Mensual" : "Anual"}</span>
            </div>
          </div>

          <Link
            href="/registro"
            className="flex items-center justify-center gap-2 bg-secondary-color text-black font-medium py-3 rounded-md hover:bg-secondary-color/90 transition-colors mb-8"
          >
            <span>Iniciar plan</span>
            <ArrowRight className="h-4 w-4" />
          </Link>

          <div className="space-y-4 flex-grow">
            <div className="flex items-start gap-2">
              <Check className="h-5 w-5 text-secondary-color shrink-0 mt-0.5" />
              <span className="text-white">Todo lo del plan Starter</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="h-5 w-5 text-secondary-color shrink-0 mt-0.5" />
              <span className="text-white">Análisis completo de vulnerabilidades</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="h-5 w-5 text-secondary-color shrink-0 mt-0.5" />
              <span className="text-white">Escaneo de puertos ilimitado</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="h-5 w-5 text-secondary-color shrink-0 mt-0.5" />
              <span className="text-white">Soporte prioritario 24/7</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="h-5 w-5 text-secondary-color shrink-0 mt-0.5" />
              <span className="text-white">Recomendaciones detalladas</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="h-5 w-5 text-secondary-color shrink-0 mt-0.5" />
              <span className="text-white">Hasta 5 usuarios</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="h-5 w-5 text-secondary-color shrink-0 mt-0.5" />
              <span className="text-white">Informes personalizados</span>
            </div>
          </div>
        </div>

        {/* Plan Enterprise */}
        <div className="rounded-lg border border-secondary-color bg-black/30 backdrop-blur-sm p-8 shadow-[0_0_15px_rgba(1,223,223,0.3)] flex flex-col">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-white mb-2">Enterprise</h2>
            <p className="text-gray-300 text-sm">Para grandes empresas con necesidades de seguridad críticas</p>
          </div>

          <div className="mb-6">
            <div className="text-4xl font-bold text-white">Contáctanos</div>
          </div>

          <Link
            href="/contacto"
            className="flex items-center justify-center gap-2 bg-transparent border border-secondary-color text-white font-medium py-3 rounded-md hover:bg-black/40 transition-colors mb-8"
          >
            <span>Iniciar plan</span>
            <ArrowRight className="h-4 w-4" />
          </Link>

          <div className="space-y-4 flex-grow">
            <div className="flex items-start gap-2">
              <Check className="h-5 w-5 text-secondary-color shrink-0 mt-0.5" />
              <span className="text-white">Todo lo del plan Professional</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="h-5 w-5 text-secondary-color shrink-0 mt-0.5" />
              <span className="text-white">Análisis de seguridad personalizado</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="h-5 w-5 text-secondary-color shrink-0 mt-0.5" />
              <span className="text-white">Pentesting completo</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="h-5 w-5 text-secondary-color shrink-0 mt-0.5" />
              <span className="text-white">Consultor de seguridad dedicado</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="h-5 w-5 text-secondary-color shrink-0 mt-0.5" />
              <span className="text-white">Usuarios ilimitados</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="h-5 w-5 text-secondary-color shrink-0 mt-0.5" />
              <span className="text-white">Integración con sistemas existentes</span>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-secondary-color bg-[#006F6F] backdrop-blur-sm p-8 shadow-[0_0_15px_rgba(1,223,223,0.3)] mt-12">
        <h2 className="text-2xl font-bold text-white text-center mb-4">¿Tienes dudas sobre qué plan elegir?</h2>
        <p className="text-white text-center mb-6">
          Nuestro equipo está disponible para ayudarte a encontrar la mejor solución para tus necesidades
        </p>
        <div className="flex justify-center">
          <Link
            href="/contacto"
            className="bg-[#1a8585] hover:bg-[#1a8585]/90 text-white font-medium px-10 py-3 rounded-lg shadow-md transition-colors"
          >
            Contáctanos
          </Link>
        </div>
      </div>

      <div className="mt-12 space-y-8">
        <h2 className="text-3xl font-bold text-white text-center">Preguntas frecuentes</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-lg border border-secondary-color bg-black/30 backdrop-blur-sm p-6">
            <h3 className="text-xl font-bold text-white mb-3">¿Puedo cambiar de plan en cualquier momento?</h3>
            <p className="text-gray-300">
              Sí, puedes actualizar o cambiar tu plan en cualquier momento. Los cambios se aplicarán inmediatamente y se
              ajustará el cobro de forma proporcional.
            </p>
          </div>

          <div className="rounded-lg border border-secondary-color bg-black/30 backdrop-blur-sm p-6">
            <h3 className="text-xl font-bold text-white mb-3">¿Qué métodos de pago aceptan?</h3>
            <p className="text-gray-300">
              Aceptamos tarjetas de crédito/débito (Visa, Mastercard, American Express), PayPal y transferencias
              bancarias para planes Enterprise.
            </p>
          </div>

          <div className="rounded-lg border border-secondary-color bg-black/30 backdrop-blur-sm p-6">
            <h3 className="text-xl font-bold text-white mb-3">¿Ofrecen soporte técnico?</h3>
            <p className="text-gray-300">
              Todos nuestros planes incluyen soporte técnico. Los planes Professional y Enterprise cuentan con soporte
              prioritario y tiempos de respuesta garantizados.
            </p>
          </div>

          <div className="rounded-lg border border-secondary-color bg-black/30 backdrop-blur-sm p-6">
            <h3 className="text-xl font-bold text-white mb-3">¿Hay algún contrato a largo plazo?</h3>
            <p className="text-gray-300">
              No hay compromisos a largo plazo con nuestros planes mensuales. Los planes anuales requieren un pago por
              adelantado pero ofrecen un descuento significativo.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

