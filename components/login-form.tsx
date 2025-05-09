"use client"

import type React from "react"

import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { FcGoogle } from "react-icons/fc"
import { Github } from "lucide-react"
import Link from "next/link"

export function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para procesar el login
    console.log("Login con:", email, password, rememberMe)
  }

  return (
    <>
      <div className="text-center mb-4">
        <h1 className="text-2xl font-bold text-white">Hackanalyzer</h1>
      </div>

      <div className="rounded-lg border border-secondary-color bg-black/30 backdrop-blur-sm p-8 shadow-[0_0_15px_rgba(1,223,223,0.3)]">
        <h2 className="text-2xl font-bold text-white text-center mb-6">Ingresa tu correo electrónico</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Correo electrónico"
              className="w-full px-4 py-3 rounded-md bg-black/30 border border-secondary-color text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary-color focus:border-transparent"
              required
            />
          </div>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Contraseña"
              className="w-full px-4 py-3 rounded-md bg-black/30 border border-secondary-color text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary-color focus:border-transparent"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-secondary-color hover:text-white"
              aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 border border-secondary-color rounded bg-black/30 focus:ring-secondary-color"
              />
              <label htmlFor="remember" className="ml-2 text-sm text-white">
                Recordarme
              </label>
            </div>
            <Link href="/recuperar-password" className="text-secondary-color hover:underline text-sm">
              ¿Olvidó su contraseña?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-[#1a8585] text-white font-medium py-3 rounded-md shadow-md hover:bg-[#1a8585]/90 transition-colors"
          >
            Ingresar
          </button>
        </form>

        <div className="mt-6 flex items-center justify-between">
          <div className="w-full border-t border-gray-600"></div>
          <span className="px-4 text-sm text-gray-400">ó</span>
          <div className="w-full border-t border-gray-600"></div>
        </div>

        <div className="mt-6 space-y-3">
          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 bg-transparent border border-secondary-color text-white font-medium py-3 rounded-md hover:bg-black/40 transition-colors"
          >
            <FcGoogle size={20} />
            <span>Ingresar con Google</span>
          </button>

          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 bg-transparent border border-secondary-color text-white font-medium py-3 rounded-md hover:bg-black/40 transition-colors"
          >
            <Github size={20} className="text-white" />
            <span>Ingresar con GitHub</span>
          </button>
        </div>

        <div className="mt-6 text-center">
          <p className="text-white">
            ¿No tienes cuenta?{" "}
            <Link href="/registro" className="text-secondary-color hover:underline">
              Regístrate aquí
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}

