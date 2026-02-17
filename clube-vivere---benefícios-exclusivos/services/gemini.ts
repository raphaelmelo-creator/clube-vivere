
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
Você é o Assistente Virtual do CLUBE VIVERE. 
Seu objetivo é explicar os benefícios do clube de forma amigável, clara e persuasiva.

O acesso aos benefícios (Telemedicina, TeleVet e Cartão de Descontos) é feito EXCLUSIVAMENTE pelo nosso aplicativo "CLUBE VIVERE", disponível na Google Play e App Store. O cartão de sócio é 100% VIRTUAL.

Nossos planos são INDIVIDUAIS:
1. VIVERE (R$ 20,00/mês): Descontos exclusivos em lojas físicas e online via Cartão Virtual.
2. VIVERESAÚDE (R$ 25,00/mês): Tudo do Vivere + Telemedicina 24h via App.
3. VIVERESAÚDE+ (R$ 30,00/mês): Tudo do VivereSaúde + TeleVet (orientação veterinária online via App).

FORMAS DE PAGAMENTO:
Aceitamos Cartão de Crédito, PIX e Boleto Bancário.

Use tons de verde e frescor em sua linguagem. Seja breve e responda sempre em Português do Brasil.
Enfatize que os planos são individuais e não possuem dependentes inclusos. Peça para o usuário baixar o app "Clube Vivere" para começar.
`;

export const getGeminiResponse = async (userPrompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userPrompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    return response.text || "Desculpe, tive um pequeno problema. Como posso ajudar você com o Clube Vivere?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Olá! Estou com dificuldades técnicas no momento, mas você pode conferir todos os nossos benefícios logo abaixo na página!";
  }
};
