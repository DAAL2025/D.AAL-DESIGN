
import { GoogleGenAI, Type } from "@google/genai";
import { BlogPost } from "../types";

/**
 * Handles API key selection errors by triggering the AI Studio key selection dialog.
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
 * Generates blog posts using the Gemini 3 Flash model.
 * Always initializes a new client instance to ensure it uses the most current API key from the environment.
 */
export const generateDesignInsights = async (): Promise<BlogPost[]> => {
  // Check API key selection status if running in the browser with AI Studio tools available
  if (typeof window !== 'undefined' && window.aistudio) {
    try {
      const hasKey = await window.aistudio.hasSelectedApiKey();
      if (!hasKey && !process.env.API_KEY) {
        // If no key is present, prompt the user. Assume success after opening dialog as per guidelines.
        await handleKeyError();
      }
    } catch (e) {
      console.debug("Optional API key check skipped or failed", e);
    }
  }

  // Initialize the GoogleGenAI client with the API key from process.env.API_KEY directly.
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

    // Extract generated text directly from the response object's text property.
    const jsonStr = response.text?.trim() || '[]';
    return JSON.parse(jsonStr);
  } catch (e: any) {
    console.error("Failed to generate insights", e);
    // If the request fails with a "not found" error, reset key selection state and prompt user.
    if (e.message?.includes("Requested entity was not found.") || e.message?.includes("API_KEY")) {
      await handleKeyError();
    }
    return [];
  }
};
