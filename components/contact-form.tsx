"use client"

import type React from "react"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [countryCode, setCountryCode] = useState("+56")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", { ...formData, countryCode })
    // Here you would typically send the data to your backend
  }

  const countryCodes = ["+56", "+1", "+44", "+34", "+52", "+55"]

  return (
    <div className="rounded-lg border border-secondary-color bg-black/30 backdrop-blur-sm p-8 shadow-[0_0_15px_rgba(1,223,223,0.3)]">
      <h2 className="text-2xl font-bold text-white mb-4">Mantente en contacto</h2>
      <p className="text-gray-300 mb-6">Haz nos saber tus comentarios y gustosamente te atenderemos.</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Nombre y Apellido"
            className="w-full px-4 py-3 rounded-md bg-black/30 border border-secondary-color text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary-color focus:border-transparent"
            required
          />
        </div>

        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Correo electrónico"
            className="w-full px-4 py-3 rounded-md bg-black/30 border border-secondary-color text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary-color focus:border-transparent"
            required
          />
        </div>

        <div className="flex gap-2">
          <div className="relative">
            <button
              type="button"
              className="flex items-center justify-between w-24 px-4 py-3 rounded-md bg-black/30 border border-secondary-color text-white focus:outline-none focus:ring-2 focus:ring-secondary-color"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              {countryCode}
              <ChevronDown className="h-4 w-4 ml-1" />
            </button>

            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-1 w-24 bg-black/90 border border-secondary-color rounded-md shadow-lg z-10">
                {countryCodes.map((code) => (
                  <button
                    key={code}
                    type="button"
                    className="block w-full text-left px-4 py-2 text-white hover:bg-black/50"
                    onClick={() => {
                      setCountryCode(code)
                      setIsDropdownOpen(false)
                    }}
                  >
                    {code}
                  </button>
                ))}
              </div>
            )}
          </div>

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Número de teléfono"
            className="flex-1 px-4 py-3 rounded-md bg-black/30 border border-secondary-color text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary-color focus:border-transparent"
          />
        </div>

        <div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Mensaje"
            rows={5}
            className="w-full px-4 py-3 rounded-md bg-black/30 border border-secondary-color text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary-color focus:border-transparent resize-none"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#1a8585] text-white font-medium py-3 rounded-md shadow-md hover:bg-[#1a8585]/90 transition-colors"
        >
          Enviar mensaje
        </button>
      </form>
    </div>
  )
}

