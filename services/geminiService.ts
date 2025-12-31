
import { GoogleGenAI, Type } from "@google/genai";
import { BlogPost } from "../types";

/**
 * AI Studio 키 선택 대화상자를 여는 헬퍼 함수
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
 * Gemini API를 사용하여 디자인 인사이트(블로그 포스트)를 생성합니다.
 */
export const generateDesignInsights = async (): Promise<BlogPost[]> => {
  // 브라우저 환경에서 AI Studio 키 선택 여부 확인
  if (typeof window !== 'undefined' && window.aistudio) {
    try {
      const hasKey = await window.aistudio.hasSelectedApiKey();
      // 키가 없고 환경 변수에도 키가 없는 경우에만 팝업 호출
      if (!hasKey && !process.env.API_KEY) {
        await handleKeyError();
      }
    } catch (e) {
      console.debug("Optional API key check skipped", e);
    }
  }

  // GoogleGenAI 클라이언트 초기화
  // process.env.API_KEY는 index.html의 shim과 types.ts 선언 덕분에 타입 에러 없이 접근 가능합니다.
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

    // 결과 텍스트를 JSON으로 파싱
    const jsonStr = response.text || '[]';
    return JSON.parse(jsonStr);
  } catch (e: any) {
    console.error("Failed to generate insights", e);
    // API 키 관련 오류 발생 시 다시 키 선택 안내
    if (e.message?.includes("Requested entity was not found.") || e.message?.includes("API_KEY")) {
      await handleKeyError();
    }
    return [];
  }
};
