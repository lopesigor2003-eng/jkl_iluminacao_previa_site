import React, { useState } from 'react';
import { STORE_INFO } from '../data/storeData';
import { MessageCircle, CheckCircle2, Calculator, Send, Sparkles } from 'lucide-react';

export const BudgetSimulatorSection: React.FC = () => {
  const [projectType, setProjectType] = useState<string>('iluminacao');
  const [clientType, setClientType] = useState<string>('consumidor');
  const [name, setName] = useState('');
  const [urgency, setUrgency] = useState('urgente');
  const [customNotes, setCustomNotes] = useState('');
  const [selectedItems, setSelectedItems] = useState<string[]>([
    'Perfis de LED e fitas',
    'Painéis e Plafons',
  ]);

  const itemsOptions = [
    'Perfis de LED e fitas',
    'Painéis e Plafons',
    'Lâmpadas especiais / decorativas',
    'Fios e cabos elétricos',
    'Disjuntores e quadros',
    'Tomadas e interruptores',
    'Automação / Iluminação Inteligente',
    'Mão de obra / Instalação elétrica',
  ];

  const handleToggleItem = (item: string) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((i) => i !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    const clientTypeLabel =
      clientType === 'b2b'
        ? 'Empresa / Construtora / Profissional'
        : 'Pessoa Física / Residencial';

    const urgencyLabel =
      urgency === 'urgente'
        ? 'Urgente (Obra em andamento)'
        : urgency === 'semana'
        ? 'Para esta semana'
        : 'Planejando para os próximos dias';

    const text = encodeURIComponent(
      `*Olá, JKL Iluminação! Solicitação de Orçamento Rápido:*\n\n` +
        `👤 *Nome:* ${name ? name : 'Cliente'}\n` +
        `🏢 *Perfil:* ${clientTypeLabel}\n` +
        `💡 *Tipo de Projeto:* ${projectType}\n` +
        `⏱️ *Urgência:* ${urgencyLabel}\n` +
        `📦 *Itens de Interesse:*\n${
          selectedItems.length > 0
            ? selectedItems.map((i) => ` - ${i}`).join('\n')
            : ' - Consulta geral'
        }\n\n` +
        (customNotes ? `📝 *Observações:* ${customNotes}\n\n` : '') +
        `Podem me passar disponibilidade e valores? Muito obrigado!`
    );

    window.open(`https://wa.me/${STORE_INFO.phoneRaw}?text=${text}`, '_blank');
  };

  return (
    <section
      id="orcamento"
      className="py-24 bg-black relative overflow-hidden border-t border-zinc-900"
      aria-label="Simulador de Orçamento Rápido"
    >
      {/* Glow styling */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Agilidade Sem Burocracia</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-montserrat">
            Solicite seu Orçamento em Poucos Cliques
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2">
            Selecione o que sua obra precisa e envie a mensagem pré-formatada diretamente para o nosso time no WhatsApp.
          </p>
        </div>

        {/* Interactive Form Card */}
        <div className="p-6 sm:p-10 rounded-3xl bg-zinc-950/80 border border-zinc-800 backdrop-blur-xl shadow-2xl">
          <form onSubmit={handleSendWhatsApp} className="space-y-8">
            {/* 1. Client Type & Project Category */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                  Você é:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setClientType('consumidor')}
                    className={`p-3 rounded-xl text-xs font-semibold border transition-all text-center cursor-pointer ${
                      clientType === 'consumidor'
                        ? 'bg-blue-600/20 border-blue-500 text-white'
                        : 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-white'
                    }`}
                  >
                    Consumidor / Residencial
                  </button>
                  <button
                    type="button"
                    onClick={() => setClientType('b2b')}
                    className={`p-3 rounded-xl text-xs font-semibold border transition-all text-center cursor-pointer ${
                      clientType === 'b2b'
                        ? 'bg-blue-600/20 border-blue-500 text-white'
                        : 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-white'
                    }`}
                  >
                    B2B / Eletricista / Obra
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                  Foco Principal:
                </label>
                <select
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="w-full p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-xs sm:text-sm focus:border-blue-500 focus:outline-none"
                  aria-label="Foco Principal do Projeto"
                >
                  <option value="Iluminação Completa (Perfis, Fitas e Painéis)">
                    Iluminação Completa (Perfis, Fitas e Painéis)
                  </option>
                  <option value="Materiais Elétricos para Obra Bruta (Fios, Quadros e Disjuntores)">
                    Materiais Elétricos para Obra Bruta (Fios, Quadros, etc.)
                  </option>
                  <option value="Acabamentos Elétricos (Tomadas, Interruptores e Espelhos)">
                    Acabamentos Elétricos (Tomadas, Interruptores e Espelhos)
                  </option>
                  <option value="Instalações e Mão de Obra Elétrica">
                    Instalações e Mão de Obra Elétrica
                  </option>
                  <option value="Automação Residencial e Lâmpadas Inteligentes">
                    Automação Residencial e Lâmpadas Inteligentes
                  </option>
                </select>
              </div>
            </div>

            {/* 2. Checkboxes of Interest */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-3">
                Selecione os itens desejados:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {itemsOptions.map((item) => {
                  const isChecked = selectedItems.includes(item);
                  return (
                    <button
                      type="button"
                      key={item}
                      onClick={() => handleToggleItem(item)}
                      className={`p-3 rounded-xl text-xs font-medium border text-left flex items-start justify-between gap-2 transition-all cursor-pointer ${
                        isChecked
                          ? 'bg-blue-600/15 border-blue-500 text-white'
                          : 'bg-zinc-900/50 border-zinc-800 text-zinc-400 hover:text-zinc-200'
                      }`}
                    >
                      <span>{item}</span>
                      {isChecked ? (
                        <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                      ) : (
                        <span className="w-4 h-4 rounded-full border border-zinc-700 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Inputs: Name & Notes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="client-name"
                  className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2"
                >
                  Seu Nome ou Empresa (Opcional):
                </label>
                <input
                  id="client-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex: Carlos Oliveira ou Construtora Exemplo"
                  className="w-full p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 text-sm focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="urgency-select"
                  className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2"
                >
                  Previsão da Compra:
                </label>
                <select
                  id="urgency-select"
                  value={urgency}
                  onChange={(e) => setUrgency(e.target.value)}
                  className="w-full p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm focus:border-blue-500 focus:outline-none"
                >
                  <option value="urgente">Urgente (Obra em andamento)</option>
                  <option value="semana">Para esta semana</option>
                  <option value="planejando">Planejando para os próximos dias</option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="custom-notes"
                className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2"
              >
                Observações ou medidas aproximadas (Opcional):
              </label>
              <textarea
                id="custom-notes"
                rows={2}
                value={customNotes}
                onChange={(e) => setCustomNotes(e.target.value)}
                placeholder="Ex: Preciso de 20 metros de perfil de embutir no gesso, fita 4000K e 5 painéis 60x60..."
                className="w-full p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 text-sm focus:border-blue-500 focus:outline-none resize-none"
              />
            </div>

            {/* Submit CTA Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-zinc-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Atendimento humano rápido via WhatsApp ({STORE_INFO.phoneFormatted})</span>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-base transition-all duration-200 shadow-xl shadow-blue-600/30 hover:shadow-blue-500/50 hover:translate-y-[-1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 cursor-pointer"
                aria-label="Gerar e Enviar Orçamento para o WhatsApp"
              >
                <MessageCircle className="w-5 h-5 fill-white/20" />
                <span>Enviar Orçamento no WhatsApp</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
