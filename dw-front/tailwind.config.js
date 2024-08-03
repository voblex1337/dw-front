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
        'custom-gradient2': 'radial-gradient(100% 100% at 50.43% 100%, rgba(212, 205, 255, 0.3) 0%, rgba(212, 205, 255, 0) 100%)'
      },
    },
  },
  plugins: [],
}

