import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SearchBar } from "@/components/search-bar"

import BackgroundVideo from "@/components/BackgroundVideo"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#004F4F80]">
 <BackgroundVideo className="absolute inset-0 w-full h-full object-cover -z-10 pointer-events-none" />

      <Navbar />
      
      <div className="flex-1 flex flex-col items-center justify-center px-4 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
          ¿Quieres saber cómo esta tu sitio web?
        </h1>

        <div className="w-full max-w-3xl">
          <SearchBar />
        </div>

        <p className="text-gray-300 mt-4 text-center">Ingresa tu URL y haremos un diagnóstico para ti</p>
      </div>

      <Footer />
    </main>
  )
}

