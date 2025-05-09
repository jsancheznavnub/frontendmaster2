import React from 'react';

const BackgroundVideo: React.FC = () => {
  const videoUrl = process.env.VITE_BACKGROUND_VIDEO_URL;

  if (!videoUrl) {
    console.error('VITE_BACKGROUND_VIDEO_URL is not defined');
    return null; // O renderizar un fallback
  }

  return (
    <div className="fixed inset-0 overflow-hidden -z-10">
      <video
        className="w-full h-full object-cover pointer-events-none"
        src={videoUrl}
        loop
        autoPlay
        muted // Muted es necesario para autoplay en muchos navegadores
        playsInline // Recomendado para reproducción en línea en dispositivos móviles
      />
      {/* Opcional: Puedes agregar una capa semitransparente encima del video para mejorar la legibilidad del contenido */}
      {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
    </div>
  );
};

export default BackgroundVideo;