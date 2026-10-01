/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Warm Ivory — primary background / light surface
        ivory: {
          DEFAULT: '#F4F0E8',
          soft: '#EAE3D3',
        },
        card: '#F8F5EE',
        // Soft Stone — secondary neutral, borders, atmosphere
        stone: {
          DEFAULT: '#C9C2B6',
          light: '#E2DDD1',
          border: '#DBD5C7',
          line: '#E6E1D5',
        },
        // Muted Olive — secondary accent, quiet depth
        olive: {
          DEFAULT: '#737A63',
          dark: '#5C6350',
        },
        // Wine Burgundy — dominant accent for impact
        burgundy: {
          DEFAULT: '#641C28',
          dark: '#4A141D',
        },
        // Deep Charcoal — primary ink
        charcoal: {
          DEFAULT: '#171717',
          soft: '#3A3733',
          muted: '#5C594F',
          muted2: '#79766A',
        },
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'Arial', 'sans-serif'],
        serif: ['"Lora"', 'Georgia', '"Times New Roman"', 'serif'],
      },
      boxShadow: {
        card: '0 24px 50px -28px rgba(23,23,23,.35)',
        soft: '0 30px 60px -30px rgba(23,23,23,.3)',
      },
      transitionTimingFunction: {
        depth: 'cubic-bezier(.19,1,.22,1)',
        'depth-soft': 'cubic-bezier(.25,.46,.45,.94)',
      },
    },
  },
  plugins: [],
};
