import React from 'react';
import { STORE_INFO } from '../data/storeData';
import { MessageCircle, ArrowRight, ShieldCheck, Star, Sparkles, Zap, Building2 } from 'lucide-react';

const HERO_IMAGE_URL = '/photos/hero.jpg';

export const Hero: React.FC = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] pt-32 pb-20 flex items-center justify-center overflow-hidden bg-black"
      aria-label="Apresentação JKL Iluminação"
    >
      {/* Dynamic ambient lighting backdrop */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[260px] h-[260px] bg-red-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Subtle modern geometric grid overlay */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Semantic Titles and CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Slogan / Kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 text-xs font-semibold tracking-wider uppercase mb-5">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>{STORE_INFO.tagline} · Santa Maria - RS</span>
            </div>

            {/* Exactly ONE H1 tag on the whole page */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] mb-6 font-montserrat">
              JKL Iluminação & <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-200">
                Materiais Elétricos
              </span>
            </h1>

            {/* Texto de Impacto */}
            <p className="text-lg sm:text-xl text-zinc-300 font-normal leading-relaxed mb-8 max-w-2xl">
              <span className="text-white font-medium">Iluminação decorativa e técnica</span>{' '}
              <span className="text-blue-500">|</span>{' '}
              <span className="text-white font-medium">Materiais elétricos para sua obra ou reforma</span>{' '}
              <span className="text-blue-500">|</span>{' '}
              <span className="text-white font-medium">Instalações e serviços elétricos</span>
            </p>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href={STORE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-base transition-all duration-200 shadow-xl shadow-blue-600/35 hover:shadow-blue-500/50 hover:translate-y-[-2px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black group"
                aria-label="Fale com a gente no WhatsApp para cotação e dúvidas"
              >
                <MessageCircle className="w-5 h-5 fill-white/20 group-hover:scale-110 transition-transform" />
                <span>Fale com a gente no WhatsApp</span>
              </a>

              <a
                href="#produtos"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 hover:text-white font-semibold text-base border border-zinc-700/70 hover:border-blue-500/50 transition-all duration-200 hover:translate-y-[-2px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
                aria-label="Navegar até a seção de produtos e serviços"
              >
                <span>Ver Produtos & Serviços</span>
                <ArrowRight className="w-4 h-4 text-blue-400" />
              </a>
            </div>

            {/* Trust and Social Proof Badges */}
            <div className="pt-6 border-t border-zinc-800/80 w-full grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-zinc-900/90 border border-zinc-800 flex items-center justify-center text-amber-400 shrink-0">
                  <Star className="w-5 h-5 fill-amber-400" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm leading-tight flex items-center gap-1">
                    <span>5.0</span>
                    <span className="text-amber-400 text-xs">★★★★★</span>
                  </div>
                  <div className="text-xs text-zinc-400">45+ avaliações no Google</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-zinc-900/90 border border-zinc-800 flex items-center justify-center text-blue-400 shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm leading-tight">Pronta Entrega</div>
                  <div className="text-xs text-zinc-400">Estoque completo local</div>
                </div>
              </div>

              <div className="flex items-center gap-3 col-span-2 sm:col-span-1">
                <div className="w-10 h-10 rounded-lg bg-zinc-900/90 border border-zinc-800 flex items-center justify-center text-red-400 shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm leading-tight">B2B & Consumidor</div>
                  <div className="text-xs text-zinc-400">Atendimento a construtoras</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Container Incorporating User-Provided Hero Image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-lg">
              {/* Decorative back plate with glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-500 to-red-600 opacity-30 blur-lg" />

              <div className="relative rounded-2xl bg-zinc-900/90 border border-zinc-700/60 p-3 sm:p-4 shadow-2xl overflow-hidden backdrop-blur-xl">
                {/* Store image presentation */}
                <div className="relative h-72 sm:h-80 w-full rounded-xl overflow-hidden bg-zinc-950 flex items-center justify-center border border-zinc-800">
                  <img
                    src={HERO_IMAGE_URL}
                    alt="Fachada e ambiente da JKL Iluminação & Materiais Elétricos"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    fetchPriority="high"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                  {/* Top corner live tag */}
                  <div className="absolute top-3 left-3 flex items-center gap-2 px-3 py-1 rounded-md bg-black/75 backdrop-blur-md border border-white/10 text-xs font-medium text-white">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Patronato · Santa Maria</span>
                  </div>

                  {/* Bottom caption overlay */}
                  <div className="absolute bottom-3 left-3 right-3 text-left">
                    <div className="text-white font-bold text-sm drop-shadow-md">
                      Showroom Completo & Depósito Próprio
                    </div>
                    <div className="text-zinc-300 text-xs drop-shadow-sm">
                      Av. Gov. Walter Jobim, 799
                    </div>
                  </div>
                </div>

                {/* Sub cards / Mini metrics beneath image */}
                <div className="mt-4 grid grid-cols-2 gap-2.5">
                  <div className="p-2.5 sm:p-3 rounded-lg bg-black/60 border border-zinc-800 flex items-center gap-2.5">
                    <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 shrink-0" />
                    <div className="min-w-0">
                      <div className="text-[10px] sm:text-xs text-zinc-400 font-medium leading-none mb-1">Garantia Técnica</div>
                      <div className="text-white font-bold text-xs sm:text-sm leading-tight truncate">Selo INMETRO</div>
                    </div>
                  </div>

                  <div className="p-2.5 sm:p-3 rounded-lg bg-black/60 border border-zinc-800 flex items-center gap-2.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500 shrink-0" />
                    <div className="min-w-0">
                      <div className="text-[10px] sm:text-xs text-zinc-400 font-medium leading-none mb-1">Orçamento Rápido</div>
                      <div className="text-white font-bold text-xs sm:text-sm leading-tight truncate">Via WhatsApp</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
