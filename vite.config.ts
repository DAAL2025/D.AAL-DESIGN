
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // 현재 작업 디렉토리에서 환경 변수를 로드합니다. (세 번째 인자는 모든 접두사를 허용하기 위해 '' 사용)
  const env = loadEnv(mode, '.', '');
  
  return {
    plugins: [react()],
    define: {
      // process.env.API_KEY를 명시적으로 주입하여 클라이언트 코드에서 사용 가능하게 함
      'process.env.API_KEY': JSON.stringify(env.API_KEY || ''),
      // 라이브러리 호환성을 위한 process.env 폴리필 (객체 속성 접근 충돌 방지)
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
  };
});
