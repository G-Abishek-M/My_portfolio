/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'Unbounded', 'sans-serif'],
        serif: ['Instrument Serif', 'Playfair Display', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Space Grotesk', 'monospace'],
      },
      colors: {
        primary: {
          DEFAULT: '#693bca',
          container: '#8257e5',
          light: '#e9ddff',
          dim: '#d0bcff',
        },
        ink: {
          DEFAULT: '#1b192c',
          deep: '#19172a',
          muted: '#494454',
        },
        slate: {
          muted: '#58536e',
          subtle: '#7a7485',
          border: '#cbc3d6',
        },
        canvas: {
          DEFAULT: '#fcf8ff',
          dim: '#dcd7f1',
          low: '#f6f1ff',
          container: '#f0ebff',
          high: '#eae5ff',
          highest: '#e4dffa',
        },
        aurora: {
          pink: '#ffb3cb',
          coral: '#ff5c79',
          peach: '#ffd2b5',
          lavender: '#b9a5ff',
          sky: '#80d8ff',
          cyan: '#8ce8f2',
          mint: '#a7f3d0',
        }
      },
      borderRadius: {
        'card': '2rem',
        'card-sm': '1.5rem',
      },
      boxShadow: {
        'soft': '0 8px 30px -4px rgba(27, 25, 44, 0.04), 0 2px 6px 0 rgba(27, 25, 44, 0.02)',
        'float': '0 20px 48px -8px rgba(25, 23, 42, 0.08), 0 4px 12px 0 rgba(130, 87, 229, 0.03)',
        'glow': '0 10px 24px -4px rgba(130, 87, 229, 0.35)',
      }
    },
  },
  plugins: [],
};
