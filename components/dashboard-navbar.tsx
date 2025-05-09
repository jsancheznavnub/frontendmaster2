"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Menu, Search, X } from "lucide-react"
import { useRouter } from "next/navigation"

export function DashboardNavbar() {
  const [url, setUrl] = useState("")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push("/resultados")
    setIsMenuOpen(false)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="w-full py-4 px-6 relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between border border-secondary-color rounded-lg bg-[#004F4F80] backdrop-blur-sm px-6 py-3">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-white whitespace-nowrap flex-shrink-0 mr-6">
              Hackanalyzer
            </Link>

            {/* Search form - visible only on desktop */}
            <form onSubmit={handleSubmit} className="relative w-64 hidden md:block">
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Ingresa la URL aquí"
                className="w-full px-4 py-2 rounded-lg bg-black/30 border border-secondary-color text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-secondary-color focus:border-transparent"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-secondary-color hover:text-white"
                aria-label="Buscar"
              >
                <Search size={18} />
              </button>
            </form>
          </div>

          {/* Hamburger menu button - visible only on mobile */}
          <button
            className="md:hidden text-secondary-color hover:text-white transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/que-es" className="text-secondary-color hover:text-white transition-colors whitespace-nowrap">
              ¿Qué es Hackanalyzer?
            </Link>
            <Link href="/por-que" className="text-secondary-color hover:text-white transition-colors whitespace-nowrap">
              ¿Por qué es importante?
            </Link>
            <Link href="/planes" className="text-secondary-color hover:text-white transition-colors whitespace-nowrap">
              Planes
            </Link>
            <Link
              href="/contacto"
              className="text-secondary-color hover:text-white transition-colors whitespace-nowrap"
            >
              Contacto
            </Link>

            <Link
              href="/registro"
              className="bg-[#1a8585] text-white font-medium px-6 py-2 rounded-lg shadow-md hover:bg-[#1a8585]/90 transition-colors whitespace-nowrap"
            >
              Regístrate
            </Link>
          </nav>
        </div>

        {/* Mobile menu dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 px-6 mt-2 z-30">
            <div className="border border-secondary-color rounded-lg bg-black/90 backdrop-blur-sm p-4 shadow-[0_0_15px_rgba(1,223,223,0.3)]">
              {/* Search form for mobile */}
              <form onSubmit={handleSubmit} className="relative mb-4">
                <input
                  type="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="Ingresa la URL aquí"
                  className="w-full px-4 py-2 rounded-lg bg-black/30 border border-secondary-color text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-secondary-color focus:border-transparent"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-secondary-color hover:text-white"
                  aria-label="Buscar"
                >
                  <Search size={18} />
                </button>
              </form>

              <nav className="flex flex-col space-y-4">
                <Link
                  href="/que-es"
                  className="text-secondary-color hover:text-white transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  ¿Qué es Hackanalyzer?
                </Link>
                <Link
                  href="/por-que"
                  className="text-secondary-color hover:text-white transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  ¿Por qué es importante?
                </Link>
                <Link
                  href="/planes"
                  className="text-secondary-color hover:text-white transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Planes
                </Link>
                <Link
                  href="/contacto"
                  className="text-secondary-color hover:text-white transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contacto
                </Link>
                <div className="pt-2 border-t border-secondary-color/30">
                  <Link
                    href="/registro"
                    className="block w-full bg-[#1a8585] text-white font-medium px-6 py-2 rounded-lg shadow-md hover:bg-[#1a8585]/90 transition-colors text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Regístrate
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

