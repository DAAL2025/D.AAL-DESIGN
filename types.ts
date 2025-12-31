
export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
}

export interface BlogPost {
  id: number;
  date: string;
  category: string;
  title: string;
  summary: string;
  image: string;
}

export interface Service {
  id: number;
  title: string;
  krTitle: string;
  description: string;
  icon: string;
}

export interface DesignStrategy {
  headline: string;
  approach: string;
  visualKeywords: string[];
}

// Define the required interface for AI Studio tools to resolve type mismatch errors
export interface AIStudio {
  hasSelectedApiKey: () => Promise<boolean>;
  openSelectKey: () => Promise<void>;
}

// TypeScript가 window 객체의 커스텀 속성을 인식하도록 선언
declare global {
  interface Window {
    // Use the explicit AIStudio type to match global environment definitions
    aistudio: AIStudio;
  }
  // Declare process globally as required for accessing environment variables like API_KEY
  var process: {
    env: {
      API_KEY: string;
    };
  };
}

export {};
