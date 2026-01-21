interface AIStudio {
  openSelectKey: () => Promise<void>;
  hasSelectedApiKey: () => Promise<boolean>;
}

interface Window {
  aistudio?: AIStudio;
}

declare namespace NodeJS {
  interface ProcessEnv {
    API_KEY: string;
    [key: string]: string | undefined;
  }
}
