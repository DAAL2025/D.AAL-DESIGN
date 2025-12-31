
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

// AI Studio 도구의 인터페이스 정의
export interface AIStudio {
  hasSelectedApiKey: () => Promise<boolean>;
  openSelectKey: () => Promise<void>;
}

// 전역 타입 확장을 통해 tsc 빌드 에러 해결
// Note: window.aistudio 및 process 객체는 이미 환경(AI Studio Sandbox 등)에서 정의되어 있을 수 있습니다.
// 동일한 이름으로 중복 선언할 경우 "Subsequent property declarations" 또는 "Cannot redeclare block-scoped variable" 에러가 발생합니다.
declare global {
  interface Window {
    // 만약 환경에서 aistudio가 이미 정의되어 있다면 아래 선언은 제거하거나 호환 가능한 타입으로 선언해야 합니다.
    // 에러 메시지에 따라 이미 AIStudio 타입으로 존재하므로 중복 선언을 피하기 위해 주석 처리하거나 제거합니다.
    // aistudio?: AIStudio;
  }
  
  // process 역시 환경에서 이미 선언되어 있는 경우 var로 재선언할 수 없습니다.
  // 에러 발생 시 환경의 선언을 따르도록 해당 선언을 제거합니다.
}

// 이 파일이 모듈로 인식되어 declare global이 유효하도록 함
export {};
