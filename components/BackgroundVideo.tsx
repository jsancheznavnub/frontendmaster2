// components/BackgroundVideo.tsx
import React from 'react';

const BackgroundVideo: React.FC = () => {
  // Se usa NEXT_PUBLIC_ para variables accesibles en el cliente en Next.js
  const publicVideoUrl = process.env.NEXT_PUBLIC_BACKGROUND_VIDEO_URL;

  if (!publicVideoUrl) {
    // Mensaje de error más claro, refiriéndose a la variable que se está utilizando
    console.error(
      'Error: La variable de entorno NEXT_PUBLIC_BACKGROUND_VIDEO_URL no está definida. ' +
      'Por favor, asegúrate de que esta variable esté configurada en tu archivo .env.local ' +
      'y que el nombre comience con NEXT_PUBLIC_ para que sea accesible en el cliente.'
    );
    // Puedes retornar null o un div con un color de fondo/imagen estática como fallback
    // Ejemplo de un fallback simple:
    return <div className="fixed inset-0 bg-gray-900 -z-10" aria-hidden="true"></div>;
  }

  return (
    <div className="fixed inset-0 overflow-hidden -z-10" aria-hidden="true">
      <video
        className="w-full h-full object-cover pointer-events-none"
        src={publicVideoUrl}
        loop
        autoPlay
        muted // Muted es esencial para el autoplay en la mayoría de los navegadores modernos
        playsInline // playsInline ayuda a la reproducción en línea en dispositivos móviles, especialmente iOS
        preload="auto" // Puede ayudar a que el video comience a cargar antes
      >
        {/* Considera agregar sources alternativos para diferentes formatos de video por compatibilidad */}
        {/* <source src={publicVideoUrl} type="video/mp4" /> */}
        {/* Tu navegador no soporta el tag de video. */}
      </video>
      {/* Opcional: Puedes agregar una capa semitransparente encima del video 
          para mejorar la legibilidad del contenido que se superponga.
          Ejemplo:
      <div className="absolute inset-0 bg-black opacity-50"></div>
      */}
    </div>
  );
};

export default BackgroundVideo;