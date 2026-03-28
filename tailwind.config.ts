import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#2F5E9E',
          hover: '#274F86',
          active: '#1F4270',
          secondary: '#AFC4E3',
          soft: '#DCE7F5',
          accent: '#6F8FBD'
        },
        ink: '#171C24',
        body: '#374150',
        muted: '#6B7788',
        line: '#D7DEE8',
        paper: '#FBFCFE',
        shell: '#F5F7FA'
      },
      fontFamily: {
        sans: ['Satoshi', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'ui-serif', 'Georgia', 'serif']
      },
      maxWidth: {
        container: '1280px',
        text: '720px'
      },
      boxShadow: {
        soft: '0 6px 20px rgba(23, 28, 36, 0.04)',
        medium: '0 10px 30px rgba(23, 28, 36, 0.06)'
      },
      borderRadius: {
        xl2: '24px'
      }
    }
  },
  plugins: []
};

export default config;
