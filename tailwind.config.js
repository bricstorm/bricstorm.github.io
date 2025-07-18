/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brics-gold': '#D4AF37',
        'blood-red': '#8B0000',
        'deep-blue': '#000080',
        'storm-dark': '#0a0a0a',
        'storm-gray': '#1a1a1a',
        'storm-light': '#2a2a2a',
        'accent-orange': '#ff6b35',
        'accent-green': '#4ade80',
        'accent-purple': '#a855f7',
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'monospace'],
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-custom': 'pulse-custom 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          'from': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.4)' },
          'to': { boxShadow: '0 0 40px rgba(212, 175, 55, 0.8)' },
        },
        'pulse-custom': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
      backgroundImage: {
        'storm-pattern': 'radial-gradient(circle at 20% 80%, rgba(212, 175, 55, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 107, 53, 0.1) 0%, transparent 50%)',
      },
    },
  },
  plugins: [],
}