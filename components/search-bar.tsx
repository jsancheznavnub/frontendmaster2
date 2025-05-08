"use client"

import type React from "react"

import { useState } from "react"
import { Search } from "lucide-react"
import { useRouter } from "next/navigation"

export function SearchBar() {
  const [url, setUrl] = useState("")
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Navigate to the results page
    router.push("/resultados")
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="relative">
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Ingresa la URL aquí"
          className="w-full px-6 py-4 rounded-lg bg-black/30 border border-secondary-color text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary-color focus:border-transparent shadow-[0_0_15px_rgba(1,223,223,0.3)]"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-secondary-color hover:text-white"
          aria-label="Buscar"
        >
          <Search size={24} />
        </button>
      </div>
    </form>
  )
}

