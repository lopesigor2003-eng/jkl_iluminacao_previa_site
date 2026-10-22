import React from 'react';
import { STORE_INFO } from '../data/storeData';
import { Star, Shield, Award, Users, CheckCircle2, ArrowUpRight } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="sobre"
      className="py-24 bg-zinc-950 relative overflow-hidden border-t border-zinc-900"
      aria-label="Sobre a JKL Iluminação"
    >
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3">
            História & Credibilidade
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 font-montserrat">
            Quem Somos
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            Conectando inovação tecnológica, design contemporâneo e segurança técnica em cada projeto elétrico e luminotécnico em Santa Maria e região.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Descriptive text and narrative */}
          <div className="lg:col-span-7 space-y-6 text-zinc-300 text-base sm:text-lg leading-relaxed">
            <p>
              A <strong className="text-white font-semibold">JKL Iluminação & Materiais Elétricos</strong> nasceu com o propósito de transformar a forma como residências, escritórios e empreendimentos comerciais concebem a iluminação e a distribuição elétrica. Localizada estrategicamente na <span className="text-blue-400 font-medium">Av. Gov. Walter Jobim, 799</span> no bairro Patronato, unimos a comodidade de um amplo showroom à solidez de um estoque completo e pronto para atender grandes obras.
            </p>

            <p>
              Entendemos que iluminação vai muito além de acender uma lâmpada: envolve conforto visual, eficiência energética sustentável, segurança patrimonial e valorização arquitetônica. Por isso, oferecemos desde soluções decorativas com perfis e fitas de LED de altíssimo padrão até a engenharia pesada de quadros de distribuição, disjuntores normatizados e instalações completas de baixa e média tensão.
            </p>

            <p>
              Atendemos arquitetos, engenheiros, construtoras e o consumidor que está construindo ou reformando sua casa, garantindo orientação técnica clara, materiais certificados e pontualidade na entrega.
            </p>

            {/* Key benefits list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span className="text-sm text-zinc-200">Consultoria técnica para cálculo de lúmens e cargas</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span className="text-sm text-zinc-200">Parcerias com as melhores marcas do mercado elétrico</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span className="text-sm text-zinc-200">Condições especiais para faturamento B2B e construtoras</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span className="text-sm text-zinc-200">Equipe habilitada com NR-10 para instalações e laudos</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Highlight Card with 45+ positive reviews badge */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {/* Main Highlight Card: 45+ Avaliações Positivas */}
            <div className="p-8 rounded-2xl bg-gradient-to-b from-zinc-900/90 to-black border border-blue-500/30 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-36 h-36 bg-blue-600/15 rounded-full blur-2xl group-hover:bg-blue-600/25 transition-all" />

              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
                  <Star className="w-7 h-7 fill-amber-400 text-amber-400" />
                </div>
                <div>
                  <div className="text-xs uppercase font-bold tracking-wider text-amber-400">
                    Reconhecimento Comprovado
                  </div>
                  <div className="text-xs text-zinc-400">Google Maps Reviews</div>
                </div>
              </div>

              {/* Required highlight text */}
              <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2 font-montserrat">
                Mais de 45 avaliações positivas
              </div>

              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400" />
                  ))}
                </div>
                <span className="text-white font-bold text-lg">5.0 de 5.0</span>
                <span className="text-xs text-zinc-400">(Avaliação Máxima)</span>
              </div>

              <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                Aprovada por dezenas de clientes e profissionais em Santa Maria por nossa seriedade, pontualidade de entrega e pós-venda exemplar.
              </p>

              <a
                href="#avaliacoes"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors group/link"
              >
                <span>Ler depoimentos dos clientes</span>
                <ArrowUpRight className="w-4 h-4 transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Micro stat indicators */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <div className="flex items-center gap-2 text-blue-400 mb-1">
                  <Shield className="w-4 h-4" />
                  <span className="text-xs font-semibold uppercase tracking-wider">Normas ABNT</span>
                </div>
                <div className="text-xl font-bold text-white">100% Certificado</div>
                <div className="text-xs text-zinc-400">Materiais com selo INMETRO</div>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <div className="flex items-center gap-2 text-red-400 mb-1">
                  <Users className="w-4 h-4" />
                  <span className="text-xs font-semibold uppercase tracking-wider">Atendimento</span>
                </div>
                <div className="text-xl font-bold text-white">Especializado</div>
                <div className="text-xs text-zinc-400">Balcão técnico consultivo</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
