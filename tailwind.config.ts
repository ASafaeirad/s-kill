import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        title: ['var(--font-kranky)'],
      },
      colors: {
        secondary: '#353535',
        primary: '#541204',
      },
    },
  },
  plugins: [],
};
export default config;
