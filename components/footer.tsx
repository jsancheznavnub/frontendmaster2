import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full py-6 px-6 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-white text-sm">
        <div>© 2025 Hackanalyzer. All rights reserved.</div>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link href="/privacidad" className="text-white hover:text-secondary-color transition-colors">
            Privacidad
          </Link>
          <Link href="/condiciones" className="text-white hover:text-secondary-color transition-colors">
            Condiciones
          </Link>
        </div>
      </div>
    </footer>
  )
}

