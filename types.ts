
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

/**
 * AI Studio에서 제공하는 키 선택 도구 인터페이스
 */
export interface AIStudio {
  hasSelectedApiKey: () => Promise<boolean>;
  openSelectKey: () => Promise<void>;
}

/**
 * 전역 타입 확장
 * tsc가 window.aistudio 및 process.env를 인식하도록 합니다.
 */
declare global {
  // Fix: Declare AIStudio globally and augment Window to avoid "Subsequent property declarations must have the same type" errors.
  interface AIStudio {
    hasSelectedApiKey: () => Promise<boolean>;
    openSelectKey: () => Promise<void>;
  }

  interface Window {
    aistudio: AIStudio;
  }

  namespace NodeJS {
    interface ProcessEnv {
      API_KEY: string;
      [key: string]: string | undefined;
    }
  }

  // Fix: Removed 'var process' declaration to fix "Cannot redeclare block-scoped variable 'process'" error.
  // The global 'process' is provided by the environment or build shims (e.g., via vite.config.ts).
}

// 이 파일이 모듈로 취급되도록 합니다.
export {};
