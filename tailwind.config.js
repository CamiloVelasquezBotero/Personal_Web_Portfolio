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
      },
      keyframes: {
        typing: {
          from: { width: '0' },
          to: { width: '100%' },
        },
        blink: {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: '#00FF41' },
        }
      }
    },
  },
  plugins: [],
};
