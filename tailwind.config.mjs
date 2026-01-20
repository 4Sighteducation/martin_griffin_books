/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f7f9',
          100: '#b3e8ed',
          200: '#80d9e1',
          300: '#62d1d2',
          400: '#00e5db',
          500: '#079baa',
          600: '#2f8dcb',
          700: '#23356f',
          800: '#2a3c7a',
          900: '#1a2545',
        },
        accent: {
          light: '#7bd8d0',
          DEFAULT: '#5899a8',
          dark: '#23356f',
        }
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
