/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        noise: 'url(../public/noise.png)',
      },
      colors: { dark: { 100: '#1C1C1C' }, dust: { 100: '#CFCFCF' } },
      maxWidth: {
        container: '1150px',
      },
    },
  },

  plugins: [],
};
