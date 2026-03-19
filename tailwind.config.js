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
          50: '#fff1f8',
          100: '#ffd9ec',
          200: '#ffb0d8',
          500: '#ff4fa3',
          600: '#f0328d',
          700: '#c81f72',
        },
        accent: {
          500: '#7c5cff',
          600: '#6547e8',
        },
        sunset: {
          500: '#ff8a5b',
          600: '#ff6b4a',
        },
        blush: {
          50: '#fff5f8',
          100: '#ffe7ef',
        },
        ink: {
          400: '#8b7f92',
          500: '#6d6274',
          700: '#342b3d',
          900: '#1b1422',
        },
      },
    },
  },
  plugins: [],
}
