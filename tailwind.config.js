
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Brand Identity Colors
        'brand-black': '#0B0B0E',   // Main Black (Ink Black)
        'brand-gray': '#1A1A1F',    // Deep Gray (Sub)
        'brand-gold': '#C8A24A',    // Main Gold (Metal/Point)
        'brand-gold-light': '#E3D3A6', // Light Gold (Highlight)
        
        // Paper / Landing Page Colors
        'paper': '#F6F2E9',         // Main Background (Off-white)
        'paper-card': '#FFFCF6',    // Card Background
        'border-beige': '#E7E0D2',  // Borders
        'text-muted': '#6D6E76',    // Body Text
        
        // Compatibility aliases (Legacy support)
        black: '#0B0B0E',
        dark: '#1A1A1F',
        gold: '#C8A24A',
        grayText: '#6D6E76'
      },
      fontFamily: {
        sans: ['"Inter"', '"Pretendard"', 'sans-serif'],
        serif: ['"Playfair Display"', '"Apple SD Gothic Neo"', 'serif'],
      },
      animation: {
        'ken-burns': 'kenburns 40s ease-in-out infinite alternate',
        'fade-in-up': 'fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        kenburns: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    }
  },
  plugins: [],
}
