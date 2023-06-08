/** @type {import('tailwindcss').Config} */
import { Config } from 'tailwindcss'

export default <Partial<Config>>{
  mode: 'jit',
  darkMode: 'class',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          100: '#A2BCDE',
          200: '#52618F',
          600: '#2C3752',
          700: '#191F2E',
        },
        white: {
          DEFAULT: '#ffffff',
          100: '#F5F6F9',
          200: '#D9D9D9',
          400: '#F5F6F9',
        },
        gray: {
          DEFAULT: '#B8BABE',
          100: '#D1D2D5',
          200: '#919299',
          300: '#E5E7EE',
          400: '#a2bcde29',
        },
        green: {
          DEFAULT: '#51B334',
        },
      },
    },
    lineHeight: {
      136: '136%',
      130: '130%',
      120: '120%',
      126: '126%',
      14: '14px',
      20: '20px',
    },
    boxShadow: {
      sm: '0px 2px 24px rgba(25, 31, 46, 0.24)',
    },
  },
  plugins: [],
}
