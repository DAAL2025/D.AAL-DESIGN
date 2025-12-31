
import { GoogleGenAI, Type } from "@google/genai";
import { BlogPost } from "../types";

/**
 * API 키가 없거나 만료된 경우 사용자에게 키 선택 창을 띄웁니다.
 */
const handleKeyError = async () => {
  if (typeof window !== 'undefined' && window.aistudio) {
    try {
      await window.aistudio.openSelectKey();
    } catch (e) {
      console.error("Failed to open key dialog", e);
    }
  }
};

/**
 * Gemini 3 Flash 모델을 사용하여 프리미엄 디자인 인사이트를 생성합니다.
 */
export const generateDesignInsights = async (): Promise<BlogPost[]> => {
  // 런타임에 API 키 선택 여부를 확인합니다.
  if (typeof window !== 'undefined' && window.aistudio) {
    try {
      const hasKey = await window.aistudio.hasSelectedApiKey();
      // 환경 변수에도 키가 없고, 사용자가 키를 선택하지 않은 경우 팝업을 띄웁니다.
      if (!hasKey && !process.env.API_KEY) {
        await handleKeyError();
      }
    } catch (e) {
      console.debug("API key selection check skipped", e);
    }
  }

  // 매 호출 시 최신 API 키를 사용하도록 인스턴스를 생성합니다.
  const ai = new GoogleGenAI({ 
    apiKey: process.env.API_KEY 
  });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: "Generate 3 premium design trend blog posts for a luxury design agency in 2025. Include title, short summary, and category. Language: Korean.",
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              id: { type: Type.INTEGER },
              date: { type: Type.STRING },
              category: { type: Type.STRING },
              title: { type: Type.STRING },
              summary: { type: Type.STRING },
              image: { type: Type.STRING }
            },
            required: ["id", "date", "category", "title", "summary", "image"]
          }
        }
      }
    });

    // .text 프로퍼티를 통해 직접 텍스트 결과를 가져옵니다.
    const jsonStr = response.text || '[]';
    return JSON.parse(jsonStr);
  } catch (e: any) {
    console.error("Failed to generate insights", e);
    // API 키 관련 오류(404 등) 발생 시 키 선택 대화상자를 다시 호출합니다.
    if (e.message?.includes("Requested entity was not found.") || e.message?.includes("API_KEY")) {
      await handleKeyError();
    }
    return [];
  }
};
