"use client"

import type React from "react"

import { useState } from "react"
import { Search } from "lucide-react"
import { useRouter } from "next/navigation"

export function SearchBar() {
  const [url, setUrl] = useState("")
  const [isLoading, setIsLoading] = useState(false); // New state for loading indicator
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true); // Activate loading indicator

    const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

    if (!apiBaseUrl) {
      setIsLoading(false); // Deactivate loading indicator on config error
      console.error("Error: La variable de entorno NEXT_PUBLIC_API_BASE_URL no está definida.");
      // Consider displaying an error message to the user
      return;
    }

    const endpointUrl = `${apiBaseUrl}/v1/urlscan/detect-protocol-free`;

    try {
      const response = await fetch(endpointUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: url }),
      });

      const data = await response.json();
      console.log("API Response:", data);

    } catch (error) {
      console.error("Error fetching URL scan:", error);
      // Consider displaying an error message to the user
    }
    finally {
      setIsLoading(false); // Deactivate loading indicator after fetch (success or error)
      router.push("/resultados"); // Navigate to the results page
    }
  }
  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="relative">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Ingresa la URL aquí"
          className="w-full px-6 py-4 rounded-lg bg-black/30 border border-secondary-color text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary-color focus:border-transparent shadow-[0_0_15px_rgba(1,223,223,0.3)]"
          disabled={isLoading} // Disable input while loading
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-secondary-color hover:text-white"
          aria-label="Buscar"
          disabled={isLoading} // Disable button while loading
        >
          {isLoading ? (
            <svg
              className="animate-spin h-5 w-5 text-secondary-color" // Classes for animating and coloring the spinner
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 004 12H0c0 3.042 1.135 5.824 3 7.938l2.001-2.647z"></path>
            </svg>
          ) : (
            <Search size={24} />
          )} {/* Change button content based on loading state */}
        </button>
      </div>
    </form>
  )
}

