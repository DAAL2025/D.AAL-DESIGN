
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    // process.env를 빈 객체로 정의하여 런타임 에러를 방지하고, 
    // 실제 API_KEY는 AI Studio 환경에서 주입받도록 설정합니다.
    'process.env': {}
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', '@google/genai', 'lucide-react']
        }
      }
    }
  }
});
