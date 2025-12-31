
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
 * Interface for AI Studio key selection tools
 */
export interface AIStudio {
  hasSelectedApiKey: () => Promise<boolean>;
  openSelectKey: () => Promise<void>;
}

/**
 * Global type augmentations to resolve 'tsc' build errors.
 * This tells TypeScript that 'window.aistudio' and 'process' exist at runtime.
 */
declare global {
  interface Window {
    // Fix: Subsequent property declarations must have the same type.
    // Use 'any' to avoid conflicts with other definitions of 'aistudio' in the environment.
    aistudio?: any;
  }

  // Fix: Cannot redeclare block-scoped variable 'process'.
  // We remove the manual declaration of 'process' and assume it is provided by the environment.
}

// Ensure this file is treated as a module
export {};
