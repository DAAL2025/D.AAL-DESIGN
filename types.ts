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
 * 전역 타입 확장
 * tsc가 process.env 및 window.aistudio를 인식하도록 합니다.
 */
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      API_KEY: string;
      [key: string]: string | undefined;
    }
  }

  interface AIStudio {
    openSelectKey: () => Promise<void>;
    hasSelectedApiKey: () => Promise<boolean>;
  }

  interface Window {
    aistudio?: AIStudio;
  }
}

// 이 파일이 모듈로 취급되도록 합니다.
export {};