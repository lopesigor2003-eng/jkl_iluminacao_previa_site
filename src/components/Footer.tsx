import React, { useState } from 'react';
import { STORE_INFO } from '../data/storeData';
import {
  MapPin,
  Phone,
  MessageCircle,
  Instagram,
  Clock,
  Mail,
  Shield,
  FileText,
  X,
  ExternalLink,
} from 'lucide-react';

export const Footer: React.FC = () => {
  const [modalType, setModalType] = useState<'privacidade' | 'termos' | null>(null);

  return (
    <footer
      id="contato"
      className="bg-black text-white border-t border-zinc-900 relative z-10"
      aria-label="Rodapé institucional e contatos"
    >
      {/* Top Section: Quick Contact Bar & Interactive Map */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Col 1: Brand & Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-zinc-900 border border-blue-500/40 text-blue-400">
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 21h6m-5 0h4m-7-9.5c0-3.037 2.463-5.5 5.5-5.5s5.5 2.463 5.5 5.5c0 1.96-1.026 3.68-2.58 4.65-.57.36-.92 1-.92 1.68V19H10v-1.17c0-.68-.35-1.32-.92-1.68A5.474 5.474 0 017 11.5z"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13 3L10 8h4l-2 4"
                    stroke="#3B82F6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div>
                <div className="text-xl font-bold font-montserrat tracking-tight">
                  JKL Iluminação
                </div>
                <div className="text-[11px] uppercase tracking-wider text-zinc-400 font-semibold">
                  & Materiais Elétricos
                </div>
              </div>
            </div>

            <p className="text-sm text-zinc-400 leading-relaxed">
              Loja referência em Santa Maria - RS para soluções completas de iluminação técnica, decorativa, materiais elétricos de alta performance e serviços especializados.
            </p>

            {/* Strict Contact Details from Prompt */}
            <div className="space-y-3.5 text-sm">
              {/* Endereço */}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-zinc-200 block">Endereço:</strong>
                  <span className="text-zinc-400">{STORE_INFO.address}</span>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-zinc-200 block">WhatsApp:</strong>
                  <a
                    href={STORE_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
                    aria-label="Abrir conversa no WhatsApp"
                  >
                    {STORE_INFO.phoneFormatted}
                  </a>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-start gap-3">
                <Instagram className="w-5 h-5 text-pink-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-zinc-200 block">Instagram:</strong>
                  <a
                    href={STORE_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
                    aria-label="Seguir a JKL Iluminação no Instagram"
                  >
                    @jkliluminacao
                  </a>
                </div>
              </div>

              {/* Horários */}
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-zinc-200 block">Horários de Funcionamento:</strong>
                  <div className="text-zinc-400 text-xs sm:text-sm">
                    {STORE_INFO.scheduleWeekday} <br />
                    {STORE_INFO.scheduleSaturday}
                  </div>
                </div>
              </div>
            </div>

            {/* Fast WhatsApp direct button */}
            <div className="pt-2">
              <a
                href={STORE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all shadow-md shadow-blue-700/30"
                aria-label="Iniciar conversa com consultor JKL"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>Conversar com a Loja</span>
              </a>
            </div>
          </div>

          {/* Col 2: Interactive Google Maps Iframe */}
          <div className="lg:col-span-7 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-white font-montserrat flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>Nossa Localização no Patronato</span>
              </h3>
              <a
                href="https://maps.google.com/?q=Av.+Gov.+Walter+Jobim,+799+-+Patronato,+Santa+Maria+-+RS,+97020-355"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-blue-400 hover:text-blue-300 font-medium inline-flex items-center gap-1"
                aria-label="Abrir mapa no aplicativo do Google Maps"
              >
                <span>Abrir rota no Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl relative group">
              <iframe
                title="Localização da JKL Iluminação & Materiais Elétricos"
                src="https://maps.google.com/maps?q=Av.+Gov.+Walter+Jobim,+799+-+Patronato,+Santa+Maria+-+RS,+97020-355&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
              <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-xs text-zinc-300 pointer-events-none">
                📍 Patronato, Santa Maria - RS
              </div>
            </div>
            <p className="text-xs text-zinc-500">
              Fácil acesso pela Av. Walter Jobim. Estacionamento gratuito coberto e descoberto no local para carros e caminhonetes.
            </p>
          </div>
        </div>

        {/* Bottom Bar: Copyright and Semantic Legal Links */}
        <div className="mt-14 pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div>
            © 2026 JKL Iluminação & Materiais Elétricos. Todos os direitos reservados.
          </div>

          {/* Functional Links (no dead clicks) */}
          <div className="flex items-center space-x-6">
            <button
              type="button"
              onClick={() => setModalType('privacidade')}
              className="text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              Política de Privacidade
            </button>
            <span className="text-zinc-700">·</span>
            <button
              type="button"
              onClick={() => setModalType('termos')}
              className="text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              Termos de Uso
            </button>
            <span className="text-zinc-700">·</span>
            <a
              href={STORE_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-blue-400 transition-colors"
            >
              Fale Conosco
            </a>
          </div>
        </div>
      </div>

      {/* Legal Modal Handler */}
      {modalType && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
        >
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl max-w-lg w-full p-6 text-left relative max-h-[85vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setModalType(null)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white p-1"
              aria-label="Fechar modal"
            >
              <X className="w-5 h-5" />
            </button>

            {modalType === 'privacidade' ? (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-lg font-montserrat">
                  <Shield className="w-5 h-5" />
                  <span>Política de Privacidade</span>
                </div>
                <div className="text-xs text-zinc-300 space-y-3 leading-relaxed">
                  <p>
                    A <strong>JKL Iluminação & Materiais Elétricos</strong> valoriza sua privacidade e cumpre com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
                  </p>
                  <p>
                    Dados informados em formulários ou no contato via WhatsApp (como nome, telefone e especificações de obra) são utilizados única e exclusivamente para elaboração de orçamentos, faturamento de pedidos e atendimento consultivo direto.
                  </p>
                  <p>
                    Não compartilhamos, vendemos ou transferimos dados para terceiros para fins de telemarketing. Qualquer dúvida pode ser tratada diretamente pelo WhatsApp ({STORE_INFO.phoneFormatted}).
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-lg font-montserrat">
                  <FileText className="w-5 h-5" />
                  <span>Termos de Uso</span>
                </div>
                <div className="text-xs text-zinc-300 space-y-3 leading-relaxed">
                  <p>
                    As informações técnicas, catálogos e orçamentos fornecidos pela <strong>JKL Iluminação & Materiais Elétricos</strong> têm caráter orientativo para apoio ao dimensionamento do seu projeto.
                  </p>
                  <p>
                    A execução de instalações elétricas deve seguir rigorosamente as diretrizes da norma ABNT NBR 5410 e contar com profissional técnico habilitado (eletricista qualificado ou engenheiro eletricista).
                  </p>
                  <p>
                    Preços e disponibilidade de estoque estão sujeitos a confirmação no momento do fechamento do pedido na loja física ou via canal oficial do WhatsApp.
                  </p>
                </div>
              </div>
            )}

            <div className="mt-6 pt-4 border-t border-zinc-800 text-right">
              <button
                type="button"
                onClick={() => setModalType(null)}
                className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold"
              >
                Entendi e Concordo
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
