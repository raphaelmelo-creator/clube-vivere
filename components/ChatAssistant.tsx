
import React, { useState, useRef, useEffect } from 'react';
import { getGeminiResponse } from '../services/gemini';

const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const INITIAL_MESSAGE = { role: 'assistant' as const, content: 'Olá! Sou o assistente do Clube Vivere. Como posso ajudar você a economizar hoje?' };
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant', content: string }[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Limite de segurança para manter a performance (limpa as mais antigas se passar de 50)
  useEffect(() => {
    if (messages.length > 50) {
      setMessages(prev => [INITIAL_MESSAGE, ...prev.slice(-20)]);
    }
  }, [messages]);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (isOpen) {
      const timeout = setTimeout(scrollToBottom, 100);
      return () => clearTimeout(timeout);
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    const response = await getGeminiResponse(userMsg);
    
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setIsLoading(false);
  };

  const clearHistory = () => {
    if (window.confirm("Deseja realmente limpar todo o histórico da conversa?")) {
      setMessages([{ 
        role: 'assistant', 
        content: 'Histórico limpo com sucesso! Como posso ajudar você agora? ✨' 
      }]);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {isOpen ? (
        <div className="w-[90vw] sm:w-[380px] h-[550px] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-emerald-100 animate-in slide-in-from-bottom-8 duration-300">
          {/* Header Principal */}
          <div className="bg-emerald-500 p-4 flex items-center justify-between text-white shadow-md relative z-20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-2xl flex items-center justify-center font-black text-xl">V</div>
              <div>
                <p className="font-bold text-sm">Assistente Vivere</p>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-green-300 rounded-full animate-pulse"></span>
                  <span className="text-[10px] opacity-80 uppercase tracking-tighter font-bold">Ativo e pronto</span>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="hover:bg-white/10 p-2 rounded-xl transition-colors active:scale-90"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          {/* Barra de Ação Rápida - LIMPAR HISTÓRICO EM DESTAQUE */}
          <div className="bg-emerald-50/80 backdrop-blur-sm px-4 py-3 border-b border-emerald-100 flex justify-between items-center relative z-10">
            <button 
              onClick={clearHistory}
              className="flex items-center gap-2 px-4 py-2 bg-white border-2 border-red-100 text-red-500 rounded-xl text-xs font-black hover:bg-red-50 hover:border-red-200 transition-all shadow-sm active:scale-95 w-full justify-center group"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:rotate-12 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              APAGAR TODAS AS MENSAGENS
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/30">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2 duration-300`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${
                  m.role === 'user' 
                    ? 'bg-emerald-500 text-white rounded-tr-none' 
                    : 'bg-white border border-emerald-100 text-emerald-950 rounded-tl-none'
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-emerald-100 p-4 rounded-2xl animate-pulse flex gap-1.5 shadow-sm">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-slate-100 bg-white">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Pergunte sobre planos ou descontos..."
                className="flex-1 bg-slate-100 border-2 border-transparent rounded-2xl px-5 py-3 text-sm focus:outline-none focus:border-emerald-500/30 focus:bg-white transition-all placeholder:text-slate-400 font-medium"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="bg-emerald-500 text-white p-3.5 rounded-2xl hover:bg-emerald-600 transition-all shadow-lg active:scale-95 disabled:opacity-50 disabled:grayscale disabled:pointer-events-none"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-emerald-500 text-white p-4 rounded-full shadow-2xl shadow-emerald-400/50 hover:bg-emerald-600 transition-all hover:scale-105 active:scale-95 flex items-center gap-3 group border-4 border-white"
        >
          <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
          </div>
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap font-black text-sm uppercase tracking-wider">
            Assistente Online
          </span>
        </button>
      )}
    </div>
  );
};

export default ChatAssistant;
