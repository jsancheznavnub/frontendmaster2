"use client"

import type React from "react" // Buena práctica importar React explícitamente si se usa 'React.FormEvent'

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

import { Eye, EyeOff } from "lucide-react" // Removí Github ya que no se usa en este componente
// import { FcGoogle } from "react-icons/fc" // Removí FcGoogle ya que no se usa en este componente
import { useToast } from "@/components/ui/use-toast"
import BackgroundVideo from "./BackgroundVideo"

export function RegistrationForm() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [phone, setPhone] = useState("") // Añadido estado para el teléfono
  const [countryCode, setCountryCode] = useState("+58") // Añadido estado para el código de país
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [acceptTerms, setAcceptTerms] = useState(false)
  const [isLoading, setIsLoading] = useState(false) // Estado para deshabilitar el botón durante la carga

  const router = useRouter()
  const { toast } = useToast() // Hook para mostrar notificaciones

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para procesar el registro
    // Por ejemplo, validaciones adicionales:
    if (password !== confirmPassword) {
      console.error("Las contraseñas no coinciden.")
      // Aquí podrías establecer un estado de error para mostrarlo en la UI
      return;
    }
    if (!acceptTerms) {
      console.error("Debes aceptar los términos y condiciones.")
      // Aquí podrías establecer un estado de error
      return;
    }

    setIsLoading(true) // Inicia el estado de carga

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL; // Fallback a localhost si la variable no está definida
      const signupEndpoint = `${apiUrl}/v1/users/signup`;
      const response = await fetch(signupEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email, // Cambiado a minLength y maxLength según el esquema
          // email: email.toLowerCase(), // Opcional: convertir email a minúsculas
          password,
          phone: phone ? `${countryCode}${phone}` : null, // Combina código de país y número, envía null si no hay número
        }),
      })

      if (!response.ok) { 
        const errorData = await response.json()
        throw new Error(errorData.detail || "Error en el registro")
      }

      // Registro exitoso
      toast({
        title: "Registro exitoso",
        description: "Tu cuenta ha sido creada. ¡Bienvenido!",
        variant: "default",
      })
      router.push("/fremium") // Redirigir a la página de fremium

    } catch (error: any) {
      toast({
        title: "Error de registro",
        description: error.message || "Ocurrió un error desconocido al registrarte.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false) // Finaliza el estado de carga
    }
  }

  return (
    <>
      <BackgroundVideo />
      <div className="text-center mb-4">
        <h1 className="text-2xl font-bold text-white">Hackanalyzer</h1>
      </div>

      <div className="rounded-lg border border-secondary-color bg-black/30 backdrop-blur-sm p-8 shadow-[0_0_15px_rgba(1,223,223,0.3)]">
        <h2 className="text-2xl font-bold text-white text-center mb-6">Crea tu cuenta</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Nombre de usuario"
              className="w-full px-4 py-3 rounded-md bg-black/30 border border-secondary-color text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary-color focus:border-transparent" // Corregido: removidas las barras invertidas
              required // Es buena práctica añadir 'required' para campos obligatorios
            />
          </div>

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

          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Repetir contraseña"
              className="w-full px-4 py-3 rounded-md bg-black/30 border border-secondary-color text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary-color focus:border-transparent"
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-secondary-color hover:text-white"
              aria-label={showConfirmPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Campo para Teléfono (opcional) con selector de código de país */}
          <div className="flex items-center space-x-2"> {/* Usar flexbox para alinear */}
            <div className="flex-shrink-0"> {/* Evita que el select se comprima */}
              <select
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                className="px-2 py-3 rounded-md bg-black/30 border border-secondary-color text-white focus:outline-none focus:ring-2 focus:ring-secondary-color focus:border-transparent w-min" // Clase w-min para tamaño mínimo
              >
                <option value="+58">+58</option>
                <option value="+1">+1</option>
                <option value="+34">+34</option>
                <option value="+52">+52</option>
                {/* Puedes añadir más opciones de códigos de país aquí */}
              </select>
            </div>
            
            <input
              className="flex-1 px-4 py-3 rounded-md bg-black/30 border border-secondary-color text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary-color focus:border-transparent" // flex-1 para ocupar espacio restante
              type="text" // Mantengo el tipo text para poder incluir el código si se desea concatenar
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Teléfono (opcional)"
              className="flex-1 px-4 py-3 rounded-md bg-black/30 border border-secondary-color text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary-color focus:border-transparent"
            /> 
          </div>

          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="terms"
                type="checkbox"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                className="w-4 h-4 border border-secondary-color rounded bg-black/30 focus:ring-secondary-color"
                // required // Podrías añadir 'required' si la aceptación es obligatoria para enviar el formulario
              />
            </div>
            <label htmlFor="terms" className="ml-2 text-sm text-white">
              Acepto los <span className="text-white font-medium">Términos y Condiciones de Hackanalyzer</span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-[#1a8585] text-white font-medium py-3 rounded-md shadow-md hover:bg-[#1a8585]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading} // Deshabilita el botón durante la carga
          >
            Regístrate
          </button>
        </form>

        {/* Eliminé la sección de "O regístrate con" ya que los iconos no estaban siendo usados y no había lógica para ello.
            Si deseas mantenerla, necesitarías añadir la lógica para Google/Github y los iconos correspondientes.
        <div className="my-6 flex items-center">
          <div className="flex-grow border-t border-gray-600"></div>
          <span className="mx-4 text-gray-400">O regístrate con</span>
          <div className="flex-grow border-t border-gray-600"></div>
        </div>

        <div className="space-y-3">
          <button
            type="button"
            className="w-full flex items-center justify-center py-3 px-4 rounded-md border border-secondary-color bg-black/30 hover:bg-black/50 transition-colors"
          >
            <FcGoogle className="mr-2" size={22} />
            <span className="text-white">Google</span>
          </button>
          <button
            type="button"
            className="w-full flex items-center justify-center py-3 px-4 rounded-md border border-secondary-color bg-black/30 hover:bg-black/50 transition-colors"
          >
            <Github className="mr-2 text-white" size={22} />
            <span className="text-white">Github</span>
          </button>
        </div>
        */}

        <div className="mt-6 text-center">
          <p className="text-white">
            ¿Ya tienes cuenta?{" "}
            <Link href="/login" className="text-secondary-color hover:underline">
              Ingresa aquí
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}