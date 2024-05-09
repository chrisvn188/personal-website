/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-fill-10': 'repeat(auto-fill, minmax(10rem, 1fr))',
        'auto-fill-12': 'repeat(auto-fill, minmax(12rem, 1fr))',
        'auto-fit-12': 'repeat(auto-fit, minmax(12rem, 1fr))',
        'auto-fit-15': 'repeat(auto-fit, minmax(15rem, 1fr))',
        'auto-fit-20': 'repeat(auto-fit, minmax(20rem, 1fr))',
      },
    },
  },
  plugins: [],
}
