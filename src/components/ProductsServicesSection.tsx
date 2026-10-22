import React, { useState } from 'react';
import { PRODUCTS_SERVICES_DATA, ProductItem, STORE_INFO } from '../data/storeData';
import { Lamp, Cpu, Wrench, CheckCircle, MessageCircle, ArrowRight, Zap } from 'lucide-react';

export const ProductsServicesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'todos' | 'iluminacao' | 'materiais' | 'servicos'>('todos');

  const filteredItems =
    activeTab === 'todos'
      ? PRODUCTS_SERVICES_DATA
      : PRODUCTS_SERVICES_DATA.filter((item) => item.category === activeTab);

  const getCategoryMeta = (cat: ProductItem['category']) => {
    switch (cat) {
      case 'iluminacao':
        return { label: 'Iluminação', icon: Lamp, color: 'text-blue-400' };
      case 'materiais':
        return { label: 'Materiais Elétricos', icon: Zap, color: 'text-amber-400' };
      case 'servicos':
        return { label: 'Serviços Elétricos', icon: Wrench, color: 'text-red-400' };
    }
  };

  const createWhatsAppLink = (itemTitle: string) => {
    const text = encodeURIComponent(
      `Olá, JKL Iluminação! Gostaria de um orçamento sobre: ${itemTitle}. Podem me passar mais detalhes e valores?`
    );
    return `https://wa.me/${STORE_INFO.phoneRaw}?text=${text}`;
  };

  return (
    <section
      id="produtos"
      className="py-24 bg-black relative overflow-hidden border-t border-zinc-900"
      aria-label="Catálogo de Produtos e Serviços"
    >
      {/* Background ambient lighting glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-zinc-800/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3">
            Soluções Completas
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-5 font-montserrat">
            Nossos Produtos e Serviços
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            Do projeto arquitetônico decorativo à infraestrutura elétrica pesada da sua obra. Qualidade técnica garantida, pronta entrega e equipes habilitadas.
          </p>
        </div>

        {/* Category Tabs for fast user filtering */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          <button
            type="button"
            onClick={() => setActiveTab('todos')}
            className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
              activeTab === 'todos'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                : 'bg-zinc-900/90 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
            }`}
            aria-label="Mostrar todos os produtos e serviços"
          >
            Todos os Itens
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('iluminacao')}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
              activeTab === 'iluminacao'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                : 'bg-zinc-900/90 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
            }`}
            aria-label="Filtrar por Iluminação"
          >
            <Lamp className="w-4 h-4" />
            <span>Iluminação</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('materiais')}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
              activeTab === 'materiais'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                : 'bg-zinc-900/90 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
            }`}
            aria-label="Filtrar por Materiais Elétricos"
          >
            <Zap className="w-4 h-4" />
            <span>Materiais Elétricos</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('servicos')}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
              activeTab === 'servicos'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                : 'bg-zinc-900/90 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
            }`}
            aria-label="Filtrar por Serviços"
          >
            <Wrench className="w-4 h-4" />
            <span>Serviços Elétricos</span>
          </button>
        </div>

        {/* Explicit Semantic Subsections (Required H3 headings) */}
        {activeTab === 'todos' ? (
          <div className="space-y-16">
            {/* Subsection 1: Iluminação */}
            <div id="iluminacao-sub">
              <div className="flex items-center gap-3 mb-6 pb-3 border-b border-zinc-800">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <Lamp className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white font-montserrat">
                    Iluminação
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400">
                    Painéis de LED, fitas de LED, perfis de LED, lâmpadas e soluções de iluminação inteligente / automação residencial
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {PRODUCTS_SERVICES_DATA.filter((i) => i.category === 'iluminacao').map((item) => (
                  <ProductCard key={item.id} item={item} onQuote={createWhatsAppLink} />
                ))}
              </div>
            </div>

            {/* Subsection 2: Materiais Elétricos */}
            <div id="materiais-sub">
              <div className="flex items-center gap-3 mb-6 pb-3 border-b border-zinc-800">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white font-montserrat">
                    Materiais Elétricos
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400">
                    Fios, disjuntores, quadros de distribuição, tomadas, interruptores e equipamentos gerais para obras e reformas
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {PRODUCTS_SERVICES_DATA.filter((i) => i.category === 'materiais').map((item) => (
                  <ProductCard key={item.id} item={item} onQuote={createWhatsAppLink} />
                ))}
              </div>
            </div>

            {/* Subsection 3: Serviços */}
            <div id="servicos">
              <div className="flex items-center gap-3 mb-6 pb-3 border-b border-zinc-800">
                <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400">
                  <Wrench className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white font-montserrat">
                    Serviços
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400">
                    Instalações elétricas de baixa e média tensão para projetos residenciais, comerciais e industriais, além de manutenções e reparos
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {PRODUCTS_SERVICES_DATA.filter((i) => i.category === 'servicos').map((item) => (
                  <ProductCard key={item.id} item={item} onQuote={createWhatsAppLink} />
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Filtered view */
          <div>
            <div className="mb-6 flex items-center gap-3 pb-3 border-b border-zinc-800">
              <h3 className="text-2xl font-bold text-white capitalize font-montserrat">
                {activeTab === 'iluminacao'
                  ? 'Iluminação'
                  : activeTab === 'materiais'
                  ? 'Materiais Elétricos'
                  : 'Serviços'}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <ProductCard key={item.id} item={item} onQuote={createWhatsAppLink} />
              ))}
            </div>
          </div>
        )}

        {/* CTA banner below catalog */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 border border-blue-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-xl font-bold text-white font-montserrat">
              Precisa de uma lista completa para a sua obra ou construtora?
            </h4>
            <p className="text-sm text-zinc-400">
              Envie sua lista de materiais em PDF ou foto pelo WhatsApp e receba a cotação com descontos progressivos por volume.
            </p>
          </div>

          <a
            href={STORE_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all duration-200 shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50"
            aria-label="Enviar lista de materiais pelo WhatsApp"
          >
            <MessageCircle className="w-5 h-5 fill-white/20" />
            <span>Enviar Lista para Cotação</span>
          </a>
        </div>
      </div>
    </section>
  );
};

interface ProductCardProps {
  item: ProductItem;
  onQuote: (title: string) => string;
}

const ProductCard: React.FC<ProductCardProps> = ({ item, onQuote }) => {
  return (
    <article className="rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-blue-500/40 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-blue-950/20 group backdrop-blur-sm relative">
      {/* Top badges or accents */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
            {item.category === 'iluminacao'
              ? 'Iluminação'
              : item.category === 'materiais'
              ? 'Materiais Elétricos'
              : 'Serviço Especializado'}
          </div>

          {item.badge && (
            <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-blue-950/80 border border-blue-500/40 text-blue-300">
              {item.badge}
            </span>
          )}
        </div>

        {/* Card Title */}
        <h4 className="text-lg font-bold text-white mb-2.5 group-hover:text-blue-400 transition-colors font-montserrat">
          {item.title}
        </h4>

        {/* Short description */}
        <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-5">
          {item.shortDesc}
        </p>

        {/* Bullet features */}
        <ul className="space-y-2 mb-6">
          {item.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
              <CheckCircle className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Action link */}
      <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
        <span className="text-xs font-medium text-zinc-400">Consulte condições</span>

        <a
          href={onQuote(item.title)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 hover:text-blue-300 group/btn transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded p-1"
          aria-label={`Pedir orçamento de ${item.title} no WhatsApp`}
        >
          <span>Pedir Orçamento</span>
          <ArrowRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 transition-transform" />
        </a>
      </div>
    </article>
  );
};
