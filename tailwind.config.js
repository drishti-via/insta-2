/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#eef6ff',
          100: '#d9eaff',
          200: '#b8d6ff',
          500: '#4da3ff',
          600: '#2b7fe0',
          700: '#1d5fb0',
        },
        accent: {
          500: '#7ef2c6',
          600: '#4fd9a8',
        },
        ember: {
          500: '#ffb86b',
          600: '#ff9a3d',
        },
        mist: {
          50: '#f4fbff',
          100: '#e8f5fb',
        },
        ink: {
          300: '#8fa3b8',
          400: '#6f8297',
          500: '#536476',
          700: '#203040',
          900: '#08131f',
        },
      },
    },
  },
  plugins: [],
}
