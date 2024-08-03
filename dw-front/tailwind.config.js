/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'navbar-bg': '#000003',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #A39BD6 0%, #69648A 100%)',
      },
    },
  },
  plugins: [],
}

