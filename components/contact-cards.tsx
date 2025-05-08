export function ContactCards() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="rounded-lg border border-secondary-color bg-black/30 backdrop-blur-sm p-6 shadow-[0_0_15px_rgba(1,223,223,0.3)]">
        <h2 className="text-xl font-bold text-white mb-4">Atención al cliente</h2>
        <p className="text-gray-300">
          Nuestro equipo de atención al cliente está disponible para ayudarte con cualquier consulta o problema que
          puedas tener. Contamos con especialistas en seguridad informática que pueden asesorarte sobre las mejores
          prácticas para proteger tu sitio web.
        </p>
      </div>

      <div className="rounded-lg border border-secondary-color bg-black/30 backdrop-blur-sm p-6 shadow-[0_0_15px_rgba(1,223,223,0.3)]">
        <h2 className="text-xl font-bold text-white mb-4">Feedback</h2>
        <p className="text-gray-300">
          Tu opinión es importante para nosotros. Nos ayuda a mejorar nuestros servicios y a desarrollar nuevas
          funcionalidades que se adapten a tus necesidades. No dudes en compartir tus sugerencias o comentarios sobre
          nuestra plataforma.
        </p>
      </div>
    </div>
  )
}

