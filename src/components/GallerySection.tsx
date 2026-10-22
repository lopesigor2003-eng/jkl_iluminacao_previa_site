import React, { useState, useEffect, useRef, useCallback } from 'react';
import { GALLERY_PHOTOS } from '../data/storeData';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Pause,
  Play,
  ExternalLink,
  Sparkles,
  Layers,
} from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % GALLERY_PHOTOS.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length);
  }, []);

  // Auto advance every 6 seconds as explicitly requested
  useEffect(() => {
    if (isPaused || lightboxOpen) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, [isPaused, lightboxOpen, nextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'Escape' && lightboxOpen) {
        setLightboxOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, lightboxOpen]);

  // Touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    touchStartX.current = null;
  };

  const currentPhoto = GALLERY_PHOTOS[currentIndex];

  return (
    <section
      id="galeria"
      className="py-16 sm:py-20 bg-zinc-950 relative overflow-hidden border-t border-zinc-900"
      aria-label="Galeria da Loja JKL Iluminação"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background glow effects */}
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Fotos Originais do Google Maps</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-montserrat">
              Nossa Loja
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg mt-3 max-w-2xl">
              Confira as fotos oficiais do nosso espaço em formato original e alta definição. Showroom de luminárias, mostruários de LED e corredores de materiais elétricos.
            </p>
          </div>

          {/* Carousel controls header indicator */}
          <div className="mt-6 md:mt-0 flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsPaused(!isPaused)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-300 hover:text-white transition-colors cursor-pointer"
              aria-label={isPaused ? 'Retomar reprodução automática' : 'Pausar reprodução automática'}
            >
              {isPaused ? <Play className="w-3.5 h-3.5 text-blue-400" /> : <Pause className="w-3.5 h-3.5 text-blue-400" />}
              <span>{isPaused ? 'Pausado' : 'Auto 6s'}</span>
            </button>

            <span className="text-sm font-semibold text-zinc-300 font-mono bg-zinc-900/80 px-3 py-1 rounded-lg border border-zinc-800">
              {String(currentIndex + 1).padStart(2, '0')} / {String(GALLERY_PHOTOS.length).padStart(2, '0')}
            </span>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevSlide}
                className="w-10 h-10 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 cursor-pointer"
                aria-label="Foto anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={nextSlide}
                className="w-10 h-10 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 cursor-pointer"
                aria-label="Próxima foto"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Main Carousel Display Box */}
        <div
          className="relative rounded-3xl overflow-hidden bg-black border border-zinc-800 shadow-2xl"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Main active photo stage with ambient blurred backdrop for true original aspect display */}
          <div className="relative min-h-[460px] sm:min-h-[580px] lg:h-[620px] w-full flex items-center justify-center bg-zinc-950 overflow-hidden group">
            {/* Ambient Blurred Backdrop using the photo colors */}
            <div
              className="absolute inset-0 bg-cover bg-center filter blur-3xl opacity-25 scale-110 pointer-events-none transition-all duration-700"
              style={{ backgroundImage: `url(${currentPhoto.url})` }}
            />

            {/* Subtle grid pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

            {/* The Main Photo in True Original Format (without cropping or distorting) */}
            <img
              key={currentPhoto.id}
              src={currentPhoto.url}
              alt={currentPhoto.title}
              loading="lazy"
              decoding="async"
              className="relative z-10 max-h-[440px] sm:max-h-[560px] lg:max-h-[600px] w-auto max-w-full object-contain rounded-xl shadow-2xl transition-all duration-500 group-hover:scale-[1.01]"
            />

            {/* Top Bar on Stage with Format Badges and Actions */}
            <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-white/10 text-xs font-semibold text-blue-400 shadow-md">
                  <Layers className="w-3.5 h-3.5 text-blue-400" />
                  <span>{currentPhoto.aspectHint}</span>
                  <span className="text-zinc-500">·</span>
                  <span className="text-zinc-300 font-mono">
                    {currentPhoto.originalWidth} × {currentPhoto.originalHeight} px
                  </span>
                </span>
              </div>

              <div className="flex items-center gap-2 pointer-events-auto">
                <a
                  href={currentPhoto.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/80 hover:bg-zinc-800 text-zinc-300 hover:text-white backdrop-blur-md border border-white/10 text-xs font-medium transition-colors"
                  aria-label="Abrir foto original no Google Maps"
                >
                  <span>Google Maps</span>
                  <ExternalLink className="w-3 h-3 text-blue-400" />
                </a>

                <button
                  type="button"
                  onClick={() => setLightboxOpen(true)}
                  className="p-2.5 rounded-lg bg-black/80 hover:bg-blue-600 text-white backdrop-blur-md border border-white/10 transition-all duration-200 shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 cursor-pointer"
                  aria-label="Ampliar foto em tela cheia"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Bottom Gradient & Caption */}
            <div className="absolute bottom-0 left-0 right-0 z-20 p-5 sm:p-7 bg-gradient-to-t from-black via-black/80 to-transparent text-left pointer-events-none">
              <div className="max-w-3xl pointer-events-auto">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-xs uppercase font-bold tracking-widest text-blue-400">
                    Ambiente JKL
                  </span>
                  <span className="text-zinc-600">·</span>
                  <span className="text-xs text-zinc-400">Patronato, Santa Maria - RS</span>
                </div>
                <h3 className="text-lg sm:text-2xl font-bold text-white font-montserrat drop-shadow-md">
                  {currentPhoto.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 mt-1 max-w-2xl leading-relaxed">
                  {currentPhoto.description}
                </p>
              </div>
            </div>

            {/* Left / Right overlay quick click zones on desktop */}
            <button
              type="button"
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/70 hover:bg-blue-600 text-white border border-white/20 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 cursor-pointer shadow-xl"
              aria-label="Foto anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/70 hover:bg-blue-600 text-white border border-white/20 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 cursor-pointer shadow-xl"
              aria-label="Próxima foto"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Progress bar for 6s timer */}
          {!isPaused && !lightboxOpen && (
            <div className="w-full bg-zinc-900 h-1 overflow-hidden">
              <div
                key={currentIndex}
                className="h-full bg-blue-500 animate-[progress_6s_linear]"
                style={{
                  animation: 'progressBar 6s linear forwards',
                }}
              />
            </div>
          )}
        </div>

        {/* Thumbnail Selector Strip */}
        <div className="mt-5 grid grid-cols-4 sm:grid-cols-8 gap-2 sm:gap-3">
          {GALLERY_PHOTOS.map((photo, index) => {
            const isActive = index === currentIndex;
            return (
              <button
                key={photo.id}
                type="button"
                onClick={() => setCurrentIndex(index)}
                className={`relative aspect-video rounded-xl overflow-hidden border-2 transition-all duration-200 cursor-pointer bg-zinc-900 group ${
                  isActive
                    ? 'border-blue-500 ring-2 ring-blue-500/50 scale-[1.03] shadow-lg shadow-blue-900/40'
                    : 'border-zinc-800 opacity-60 hover:opacity-100 hover:border-zinc-600'
                }`}
                aria-label={`Ver foto ${index + 1}: ${photo.title}`}
              >
                <img
                  src={photo.url}
                  alt={`Miniatura ${photo.title}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded bg-black/80 text-[9px] font-mono font-bold text-white">
                  {index + 1}
                </span>
                {isActive && (
                  <div className="absolute inset-0 bg-blue-600/20 pointer-events-none" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal (Full-Screen Original Resolution Inspection) */}
      {lightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Visualizador de fotos em resolução original"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-6 animate-fadeIn"
        >
          {/* Top modal bar */}
          <div className="flex items-center justify-between z-10 pb-2 border-b border-zinc-800/80">
            <div className="text-left">
              <div className="text-white font-bold text-base sm:text-lg font-montserrat flex items-center gap-2">
                <span>{currentPhoto.title}</span>
                <span className="hidden sm:inline-block text-xs font-mono px-2 py-0.5 rounded bg-zinc-800 text-blue-400">
                  {currentPhoto.originalWidth} × {currentPhoto.originalHeight} px ({currentPhoto.aspectHint})
                </span>
              </div>
              <div className="text-xs text-zinc-400">
                Foto {currentIndex + 1} de {GALLERY_PHOTOS.length} · JKL Iluminação & Materiais Elétricos
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={currentPhoto.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
              >
                <span>Ver no Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                type="button"
                onClick={() => setLightboxOpen(false)}
                className="p-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 cursor-pointer"
                aria-label="Fechar visualizador"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Modal Central Image in Full Original Aspect */}
          <div className="relative flex-1 flex items-center justify-center my-3 overflow-hidden">
            <img
              src={currentPhoto.url}
              alt={currentPhoto.title}
              loading="lazy"
              decoding="async"
              className="max-h-[82vh] max-w-full object-contain rounded-xl shadow-2xl"
            />

            <button
              type="button"
              onClick={prevSlide}
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-full bg-black/80 hover:bg-blue-600 text-white border border-white/20 transition-all cursor-pointer shadow-2xl"
              aria-label="Foto anterior"
            >
              <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-full bg-black/80 hover:bg-blue-600 text-white border border-white/20 transition-all cursor-pointer shadow-2xl"
              aria-label="Próxima foto"
            >
              <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
          </div>

          {/* Modal Bottom info */}
          <div className="text-center text-zinc-400 text-xs sm:text-sm pt-2 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-2">
            <span>{currentPhoto.description}</span>
            <span className="text-zinc-500 text-xs">
              Formato Original de Câmera · Sem compressão ou corte
            </span>
          </div>
        </div>
      )}
    </section>
  );
};
