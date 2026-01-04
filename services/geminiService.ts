
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
 * Gemini 모델을 사용하여 프리미엄 디자인 인사이트를 생성합니다.
 */
export const generateDesignInsights = async (): Promise<BlogPost[]> => {
  // Ensure we check for API key selection state as per guidelines.
  if (typeof window !== 'undefined' && window.aistudio) {
    try {
      const hasKey = await window.aistudio.hasSelectedApiKey();
      if (!hasKey) {
        await handleKeyError();
      }
    } catch (e) {
      console.debug("API key selection check skipped", e);
    }
  }

  // Create a new instance right before making an API call to ensure it always uses the most up-to-date API key.
  // ALWAYS use process.env.API_KEY directly when initializing the GoogleGenAI client instance.
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

    // The text property returns the generated string output.
    const jsonStr = (response.text || '[]').trim();
    return JSON.parse(jsonStr);
  } catch (e: any) {
    console.error("Failed to generate insights", e);
    // If the request fails with an error message containing "Requested entity was not found.", 
    // reset the key selection state and prompt the user to select a key again via openSelectKey().
    if (e.message?.includes("Requested entity was not found.") || e.message?.includes("API_KEY")) {
      await handleKeyError();
    }
    return [];
  }
};
