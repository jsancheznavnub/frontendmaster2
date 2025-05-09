import Link from "next/link"

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold text-white mb-6">Contáctanos</h1>
        <p className="text-gray-300 mb-2">
          Email, llamada o completa el formulario si quieres obtener información más detallada.
        </p>
        <p className="text-gray-300">
          Resuelve con{" "}
          <Link href="/" className="text-secondary-color hover:underline">
            Hackanalyzer
          </Link>
          , lo que otros no pueden
        </p>
      </div>

      <div className="space-y-2">
        <p className="text-white">services@navnub.com</p>
        <p className="text-white">+58 412 392 0397</p>
      </div>

      <div>
        <Link
          href="/atencion-cliente"
          className="inline-block border border-secondary-color text-white font-medium px-6 py-2 rounded-md hover:bg-black/40 transition-colors"
        >
          Atención al cliente
        </Link>
      </div>
    </div>
  )
}

