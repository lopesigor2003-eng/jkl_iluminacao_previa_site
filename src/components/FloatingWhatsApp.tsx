import React, { useState, useEffect } from 'react';
import { STORE_INFO } from '../data/storeData';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Show gentle prompt tooltip after 4 seconds
    const timer = setTimeout(() => {
      if (!dismissed) {
        setShowTooltip(true);
      }
    }, 4000);
    return () => clearTimeout(timer);
  }, [dismissed]);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Tooltip bubble */}
      {showTooltip && !dismissed && (
        <div className="mb-3 p-3 bg-zinc-900 border border-zinc-700 rounded-2xl shadow-2xl max-w-xs text-xs text-zinc-200 animate-bounce relative">
          <button
            type="button"
            onClick={() => {
              setShowTooltip(false);
              setDismissed(true);
            }}
            className="absolute top-1 right-1 p-1 text-zinc-400 hover:text-white"
            aria-label="Fechar mensagem de ajuda"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="font-semibold text-white mb-0.5 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Precisa de orçamento rápido?</span>
          </div>
          <p className="text-zinc-300 pr-3">
            Fale conosco no WhatsApp para tirar dúvidas de iluminação ou materiais elétricos!
          </p>
        </div>
      )}

      {/* Main floating button */}
      <a
        href={STORE_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-2xl shadow-emerald-500/40 hover:shadow-emerald-500/60 transition-all duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400/50"
        aria-label="Abrir conversa no WhatsApp com JKL Iluminação"
      >
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-pulse pointer-events-none" />
        <MessageCircle className="w-7 h-7 fill-white" />
      </a>
    </div>
  );
};
