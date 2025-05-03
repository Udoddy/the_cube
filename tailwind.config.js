/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        playfair: ['"Playfair Display"', 'serif'],
      },
      colors: {
        primary: {
          50: '#f0f7fc',
          100: '#e1eff9',
          200: '#b8ddf2',
          300: '#8fcaeb',
          400: '#6db8e7', // Brand blue
          500: '#6db8e7', // Brand blue
          600: '#3a93d5',
          700: '#2576b8',
          800: '#1d5c91',
          900: '#194b76',
        },
        secondary: {
          50: '#f5f5f5',
          100: '#ebebeb',
          200: '#dedede',
          300: '#c8c8c8',
          400: '#58595a', // Brand gray
          500: '#58595a', // Brand gray
          600: '#4a4b4c',
          700: '#3d3e3f',
          800: '#2f3031',
          900: '#242526',
        }
      },
      backgroundImage: {
        'swahili-pattern': "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%236db8e7\" fill-opacity=\"0.1\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
      },
    },
  },
  plugins: [],
};