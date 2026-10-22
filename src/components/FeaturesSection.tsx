import React from 'react';
import {
  Accessibility,
  Truck,
  CalendarCheck,
  Recycle,
  CreditCard,
  Car,
  Check,
  Sparkles,
  Zap,
} from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  return (
    <section
      id="diferenciais"
      className="py-24 bg-zinc-950 relative overflow-hidden border-t border-zinc-900"
      aria-label="Facilidades e Diferenciais da JKL Iluminação"
    >
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-red-600/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3">
            Conforto & Conveniência
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 font-montserrat">
            Facilidades e Diferenciais JKL
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            Estrutura pensada para simplificar sua experiência de compra, desde a facilidade de estacionar até a entrega rápida na sua obra.
          </p>
        </div>

        {/* 6 Feature Groups in Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 1. Acessibilidade */}
          <article className="p-7 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm group">
            <div className="flex items-center gap-3.5 mb-5">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                <Accessibility className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white font-montserrat">
                  Acessibilidade
                </h3>
                <span className="text-xs text-zinc-400">Inclusão e fácil acesso</span>
              </div>
            </div>

            <p className="text-sm text-zinc-400 mb-5 leading-relaxed">
              Infraestrutura acessível com portas largas e niveladas para clientes com mobilidade reduzida:
            </p>

            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <strong className="text-white text-sm block">Entrada Acessível</strong>
                  <span className="text-xs text-zinc-400">Rampa de acesso suave para cadeira de rodas.</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <strong className="text-white text-sm block">Estacionamento Acessível</strong>
                  <span className="text-xs text-zinc-400">Vaga reservada próxima à porta principal.</span>
                </div>
              </li>
            </ul>
          </article>

          {/* 2. Opções de Serviço */}
          <article className="p-7 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm group">
            <div className="flex items-center gap-3.5 mb-5">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white font-montserrat">
                  Opções de Serviço
                </h3>
                <span className="text-xs text-zinc-400">Logística e canais de compra</span>
              </div>
            </div>

            <p className="text-sm text-zinc-400 mb-5 leading-relaxed">
              Diversos formatos de compra para atender sua rotina com flexibilidade:
            </p>

            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <strong className="text-white text-sm block">Entrega no Mesmo Dia</strong>
                  <span className="text-xs text-zinc-400">Agilidade essencial para sua obra não parar.</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <strong className="text-white text-sm block">Entrega & Retirada na Loja</strong>
                  <span className="text-xs text-zinc-400">Retire rápido no balcão ou receba no endereço.</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <strong className="text-white text-sm block">Compras na Loja Física</strong>
                  <span className="text-xs text-zinc-400">Ambiente climatizado e consultoria ao vivo.</span>
                </div>
              </li>
            </ul>
          </article>

          {/* 3. Planejamento */}
          <article className="p-7 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm group">
            <div className="flex items-center gap-3.5 mb-5">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                <CalendarCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white font-montserrat">
                  Planejamento
                </h3>
                <span className="text-xs text-zinc-400">Consultoria e agilidade</span>
              </div>
            </div>

            <p className="text-sm text-zinc-400 mb-5 leading-relaxed">
              Otimize o tempo da sua equipe com suporte técnico direto no canteiro:
            </p>

            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <strong className="text-white text-sm block">Visita Rápida</strong>
                  <span className="text-xs text-zinc-400">Deslocamento ágil para verificar especificações técnicas.</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <strong className="text-white text-sm block">Dimensionamento de Carga</strong>
                  <span className="text-xs text-zinc-400">Auxílio na quantificação precisa de fios e proteções.</span>
                </div>
              </li>
            </ul>
          </article>

          {/* 4. Reciclagem */}
          <article className="p-7 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm group">
            <div className="flex items-center gap-3.5 mb-5">
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 group-hover:scale-110 transition-transform">
                <Recycle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white font-montserrat">
                  Reciclagem
                </h3>
                <span className="text-xs text-zinc-400">Responsabilidade ambiental</span>
              </div>
            </div>

            <p className="text-sm text-zinc-400 mb-5 leading-relaxed">
              Cuidado com o ecossistema e descarte consciente de materiais eletrônicos:
            </p>

            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <strong className="text-white text-sm block">Reciclagem de Lâmpadas</strong>
                  <span className="text-xs text-zinc-400">Ponto de coleta de lâmpadas usadas e fluorescentes.</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <strong className="text-white text-sm block">Destinação Adequada</strong>
                  <span className="text-xs text-zinc-400">Parceria para neutralização correta de resíduos metálicos.</span>
                </div>
              </li>
            </ul>
          </article>

          {/* 5. Pagamentos */}
          <article className="p-7 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm group">
            <div className="flex items-center gap-3.5 mb-5">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                <CreditCard className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white font-montserrat">
                  Pagamentos
                </h3>
                <span className="text-xs text-zinc-400">Facilidade e tecnologia</span>
              </div>
            </div>

            <p className="text-sm text-zinc-400 mb-5 leading-relaxed">
              Múltiplas formas de pagamento para facilitar o fluxo financeiro da sua obra:
            </p>

            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <strong className="text-white text-sm block">Cartão de Crédito</strong>
                  <span className="text-xs text-zinc-400">Parcelamento flexível para grandes compras.</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <strong className="text-white text-sm block">Cartão de Débito</strong>
                  <span className="text-xs text-zinc-400">Transação rápida e segura no balcão.</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <strong className="text-white text-sm block">Pagamentos por Dispositivo Móvel via NFC</strong>
                  <span className="text-xs text-zinc-400">Pague com Apple Pay, Google Pay e relógios por aproximação.</span>
                </div>
              </li>
            </ul>
          </article>

          {/* 6. Estacionamento */}
          <article className="p-7 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm group">
            <div className="flex items-center gap-3.5 mb-5">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                <Car className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white font-montserrat">
                  Estacionamento
                </h3>
                <span className="text-xs text-zinc-400">Amplo e 100% gratuito</span>
              </div>
            </div>

            <p className="text-sm text-zinc-400 mb-5 leading-relaxed">
              Tranquilidade na hora de estacionar e carregar seus materiais elétricos:
            </p>

            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <strong className="text-white text-sm block">Estacionamento Coberto Gratuito</strong>
                  <span className="text-xs text-zinc-400">Proteção total para dias de sol forte ou chuva.</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <strong className="text-white text-sm block">Estacionamento Descoberto Gratuito</strong>
                  <span className="text-xs text-zinc-400">Vagas externas amplas para caminhões e vans.</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <strong className="text-white text-sm block">Estacionamento Gratuito na Rua</strong>
                  <span className="text-xs text-zinc-400">Vagas na frente da loja na Walter Jobim.</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <strong className="text-white text-sm block">Estacionamento no Local</strong>
                  <span className="text-xs text-zinc-400">Pátio privativo seguro com portão de carga.</span>
                </div>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
};
