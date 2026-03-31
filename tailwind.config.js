/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0a0a0a',
          black: '#000000',
          green: '#00FF41',
          greenDark: '#008F11',
          gray: '#1a1a1a'
        }
      },
      fontFamily: {
        mono: ['var(--font-fira-code)', 'monospace'],
      },
      animation: {
        'typing': 'typing 3s steps(40, end), blink .75s step-end infinite',
        'blink': 'blink .75s step-end infinite',
        'bounce-short': 'bounce-short 1s infinite',
        'pulse-neon': 'pulse-neon 2s ease-in-out infinite',
      },
      keyframes: {
        'typing': {
          from: { width: '0' },
          to: { width: '100%' },
        },
        'blink': {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: '#00FF41' },
        },
        'bounce-short': {
          '0%, 100%': { transform: 'translateY(-10%)', animationTimingFunction: 'cubic-bezier(0.8,0,1,1)' },
          '50%': { transform: 'none', animationTimingFunction: 'cubic-bezier(0,0,0.2,1)' },
        },
        'pulse-neon': {
          '0%, 100%': { textShadow: '0 0 5px #00FF41, 0 0 10px #00FF41' },
          '50%': { textShadow: '0 0 15px #00FF41, 0 0 25px #00FF41' },
        }
      }
    },
  },
  plugins: [],
};
