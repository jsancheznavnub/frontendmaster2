"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="w-full py-4 px-6 relative z-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between border border-secondary-color rounded-lg bg-black/20 backdrop-blur-sm px-6 py-3">
          <Link href="/" className="text-2xl font-bold text-white whitespace-nowrap flex-shrink-0">
            HACKANALYZER
          </Link>

          {/* Hamburger menu for mobile */}
          <button
            className="md:hidden text-secondary-color hover:text-white transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center justify-between flex-grow ml-4">
            <span className="text-secondary-color text-xl mx-4 flex-shrink-0">|</span>

            <nav className="flex items-center flex-shrink-0">
              <div className="flex items-center">
                <Link
                  href="/que-es"
                  className="text-secondary-color hover:text-white transition-colors mx-4 whitespace-nowrap"
                >
                  ¿Qué es HackAnalyzer?
                </Link>
                <Link
                  href="/por-que"
                  className="text-secondary-color hover:text-white transition-colors mx-4 whitespace-nowrap"
                >
                  ¿Por qué es importante?
                </Link>
                <Link
                  href="/planes"
                  className="text-secondary-color hover:text-white transition-colors mx-4 whitespace-nowrap"
                >
                  Planes
                </Link>
                <Link
                  href="/contacto"
                  className="text-secondary-color hover:text-white transition-colors mx-4 whitespace-nowrap"
                >
                  Contacto
                </Link>
              </div>
            </nav>

            <span className="text-secondary-color text-xl mx-4 flex-shrink-0">|</span>

            <Link
              href="/registro"
              className="bg-[#1a8585] text-white font-medium px-6 py-2 rounded-lg shadow-md hover:bg-[#1a8585]/90 transition-colors whitespace-nowrap flex-shrink-0"
            >
              Regístrate
            </Link>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 px-6 mt-2 z-30">
            <div className="border border-secondary-color rounded-lg bg-black/90 backdrop-blur-sm p-4 shadow-[0_0_15px_rgba(1,223,223,0.3)]">
              <nav className="flex flex-col space-y-4">
                <Link
                  href="/que-es"
                  className="text-secondary-color hover:text-white transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  ¿Qué es HackAnalyzer?
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

