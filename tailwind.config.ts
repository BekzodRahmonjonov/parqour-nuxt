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
          700: '#191F2E',
        },
        white: {
          DEFAULT: '#ffffff',
        },
        gray: {
          DEFAULT: '#B8BABE',
          100: '#D1D2D5',
          200: '#919299',
          300: '#E5E7EE',
        },
      },
    },
  },
  plugins: [],
}
