import React from 'react';
import { TESTIMONIALS_DATA, STORE_INFO } from '../data/storeData';
import { Star, CheckCircle, MessageSquareQuote, ExternalLink } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section
      id="avaliacoes"
      className="py-24 bg-black relative overflow-hidden border-t border-zinc-900"
      aria-label="Depoimentos e Avaliações de Clientes"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3">
            Opinião Real de Quem Compra
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 font-montserrat">
            O que nossos clientes dizem
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            A confiança de engenheiros, arquitetos, eletricistas e famílias de Santa Maria refletida em avaliações autênticas no Google.
          </p>
        </div>

        {/* Aggregate Google Rating Summary Banner */}
        <div className="max-w-4xl mx-auto mb-14 p-6 sm:p-8 rounded-2xl bg-zinc-900/70 border border-zinc-800 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-5">
            {/* Big Google G logo stylized */}
            <div className="w-16 h-16 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center shrink-0 shadow-inner">
              <svg className="w-8 h-8" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-3xl font-extrabold text-white font-montserrat">5.0</span>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400" />
                  ))}
                </div>
              </div>
              <div className="text-sm text-zinc-300 font-medium">
                Classificação máxima com mais de 45 avaliações positivas
              </div>
              <div className="text-xs text-zinc-500">
                Verificado na plataforma oficial Google Meu Negócio
              </div>
            </div>
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=JKL+Iluminacao+Materiais+Eletricos+Santa+Maria+RS"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-semibold text-sm border border-zinc-700 transition-colors"
            aria-label="Ver todas as avaliações no Google Maps"
          >
            <span>Ver no Google Maps</span>
            <ExternalLink className="w-4 h-4 text-blue-400" />
          </a>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS_DATA.map((item) => (
            <article
              key={item.id}
              className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm"
            >
              <div>
                {/* Header of review */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  <span className="text-xs text-zinc-400">{item.date}</span>
                </div>

                <div className="relative mb-6">
                  <MessageSquareQuote className="w-8 h-8 text-blue-500/20 absolute -top-2 -left-2 pointer-events-none" />
                  <p className="text-sm text-zinc-300 leading-relaxed italic relative z-10 pl-2">
                    "{item.comment}"
                  </p>
                </div>
              </div>

              {/* Author footer */}
              <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                <h3 className="text-sm font-bold text-white font-montserrat">
                  {item.author}
                </h3>

                {item.verified && (
                  <div
                    className="flex items-center gap-1 text-[11px] font-medium text-emerald-400"
                    title="Avaliação Verificada"
                  >
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Verificado</span>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
