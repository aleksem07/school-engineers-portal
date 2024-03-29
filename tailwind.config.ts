import type { Config } from 'tailwindcss';
const defaultTheme = require('tailwindcss/defaultTheme');

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      gridTemplateRows: {
        dashboard: 'auto 1fr auto',
      },
      gridTemplateColumns: {
        logo: 'auto 1fr',
      },
    },
    screens: {
      desktop: '1280px',
      laptop: '1024px',
      tablet: '640px',
      mobile: { max: '639px' },
      ...defaultTheme.screens,
    },
    colors: {
      'color-black': '#242424',
      'color-dark': '#4e5464',
      'color-dark--light': '#8c899b',
      'color-dark--light-300': 'rgba(140, 137, 155, 0.3)',
      'color-grey': '#c5c4cb',
      'color-light': '#f5f5f1',
      'color-white': '#ffffff',
      'color-additional': '#d4d8e6',
      'color-contrast': '#305165',
    },
  },
  plugins: [],
};

export default config;
