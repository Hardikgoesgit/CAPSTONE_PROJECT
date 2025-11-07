/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light mode colors
        light: {
          bg: '#F9FAFB',
          text: '#1E293B',
          'text-secondary': '#64748B',
          accent: '#FFD700',
          card: '#FFFFFF',
          border: '#E2E8F0',
          button: '#FACC15',
          hover: '#FFB84C'
        },
        // Dark mode colors
        dark: {
          bg: '#0D1117',
          text: '#E6EDF3',
          'text-secondary': '#8B949E',
          accent: '#FFD700',
          card: '#161B22',
          border: '#30363D',
          button: '#F1C232',
          hover: '#FFB84C'
        },
        // Social colors
        google: {
          DEFAULT: '#4285F4',
          hover: '#357ae8',
        },
        facebook: {
          DEFAULT: '#1877F2',
          hover: '#0d65d9',
        },
        // Accent color
        teal: {
          DEFAULT: '#00C9A7',
          hover: '#00b396',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        poppins: ['Poppins', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 10px rgba(0, 0, 0, 0.08)',
        'soft-dark': '0 2px 10px rgba(0, 0, 0, 0.3)',
        'glow': '0 0 15px rgba(255, 215, 0, 0.45)',
        'card': '0 2px 10px rgba(0, 0, 0, 0.1)',
        'card-dark': '0 2px 10px rgba(0, 0, 0, 0.3)',
      },
      transitionProperty: {
        'hover': 'box-shadow, transform',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
