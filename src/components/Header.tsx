import React, { useState, useEffect } from 'react';
import { STORE_INFO } from '../data/storeData';
import { Phone, MessageCircle, Menu, X, Clock, MapPin } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isStoreOpen, setIsStoreOpen] = useState(false);

  // Calculate if the store is open currently (Brazil time, America/Sao_Paulo)
  useEffect(() => {
    const checkOpenStatus = () => {
      try {
        const now = new Date();
        // Convert to Brazil/Sao Paulo timezone
        const brTimeStr = now.toLocaleString('en-US', { timeZone: 'America/Sao_Paulo' });
        const brDate = new Date(brTimeStr);
        const day = brDate.getDay(); // 0 is Sunday, 6 is Saturday
        const hour = brDate.getHours();
        const minute = brDate.getMinutes();
        const currentMinutes = hour * 60 + minute;

        // Seg a Sex: 08:00-12:00 (480-720) & 14:00-18:00 (840-1080)
        // Sab: 08:00-12:00 (480-720)
        let open = false;
        if (day >= 1 && day <= 5) {
          if ((currentMinutes >= 480 && currentMinutes < 720) || (currentMinutes >= 840 && currentMinutes < 1080)) {
            open = true;
          }
        } else if (day === 6) {
          if (currentMinutes >= 480 && currentMinutes < 720) {
            open = true;
          }
        }
        setIsStoreOpen(open);
      } catch {
        // Fallback
        setIsStoreOpen(true);
      }
    };

    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Produtos', href: '#produtos' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Avaliações', href: '#avaliacoes' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-md border-b border-blue-900/30 shadow-lg shadow-black/80'
          : 'bg-black/60 backdrop-blur-sm border-b border-white/5'
      }`}
    >
      {/* Top micro bar for quick business status */}
      <div className="hidden lg:block border-b border-white/5 text-xs text-zinc-400 bg-zinc-950/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-zinc-300">
              <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <span>Av. Gov. Walter Jobim, 799 - Patronato, Santa Maria - RS</span>
            </span>
            <span className="text-zinc-600">|</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <span>Seg a Sex: 08:00–12:00, 14:00–18:00 · Sáb: 08:00–12:00</span>
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center gap-2 font-medium">
              <span
                className={`w-2 h-2 rounded-full ${
                  isStoreOpen ? 'bg-emerald-400 animate-pulse' : 'bg-zinc-500'
                }`}
              />
              <span className={isStoreOpen ? 'text-emerald-400 font-semibold' : 'text-zinc-400'}>
                {isStoreOpen ? 'Loja Aberta Agora' : 'Fechada no momento'}
              </span>
            </div>
            <span className="text-zinc-600">·</span>
            <a
              href={`tel:${STORE_INFO.phoneRaw}`}
              className="flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors"
              aria-label="Ligar para a JKL Iluminação"
            >
              <Phone className="w-3 h-3 text-blue-400" />
              <span>{STORE_INFO.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo brand */}
          <a
            href="#inicio"
            className="flex items-center gap-3.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg p-1"
            aria-label="JKL Iluminação & Materiais Elétricos - Página Inicial"
          >
            {/* Stylized Logo Icon */}
            <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-blue-500/30 group-hover:border-blue-400 transition-colors shadow-md shadow-blue-950/40">
              <div className="absolute inset-0 rounded-xl bg-blue-600/15 blur-sm group-hover:bg-blue-600/25 transition-all" />
              <svg
                className="w-7 h-7 relative z-10 text-white transition-transform group-hover:scale-105"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Modern lightbulb & bolt combo */}
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

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-black tracking-tight text-white font-montserrat">
                  JKL
                </span>
                <span className="text-2xl font-bold tracking-tight text-blue-500 font-montserrat">
                  Iluminação
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 ml-0.5" />
              </div>
              <span className="text-[10px] tracking-widest uppercase font-semibold text-zinc-400 -mt-0.5">
                & Materiais Elétricos
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden md:flex items-center space-x-1 lg:space-x-2"
            aria-label="Navegação Principal"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-zinc-300 hover:text-white transition-colors relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-1 left-3 right-3 h-[2px] bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200" />
              </a>
            ))}
          </nav>

          {/* Header Action Button (WhatsApp CTA) */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={STORE_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Falar com a JKL Iluminação no WhatsApp"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all duration-200 shadow-md shadow-blue-700/30 hover:shadow-blue-600/50 hover:translate-y-[-1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>Orçamento WhatsApp</span>
            </a>
          </div>

          {/* Mobile menu trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-zinc-300 hover:text-white hover:bg-zinc-900 border border-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-950 border-b border-zinc-800 px-4 pt-3 pb-6 animate-fadeIn shadow-2xl">
          <nav className="flex flex-col space-y-1.5" aria-label="Menu Mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-base font-medium text-zinc-200 hover:bg-zinc-900 hover:text-blue-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-4 mt-3 border-t border-zinc-800 space-y-3">
            <div className="flex items-center justify-between text-xs text-zinc-400 px-2">
              <span className="flex items-center gap-1.5">
                <span
                  className={`w-2 h-2 rounded-full ${
                    isStoreOpen ? 'bg-emerald-400' : 'bg-zinc-500'
                  }`}
                />
                {isStoreOpen ? 'Loja Aberta Agora' : 'Fechada no momento'}
              </span>
              <span>Santa Maria - RS</span>
            </div>

            <a
              href={STORE_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-colors shadow-lg shadow-blue-700/30"
              aria-label="Falar com a JKL Iluminação no WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Fale com a gente no WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
