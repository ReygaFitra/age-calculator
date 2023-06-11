/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(259, 100%, 65%)',
        warning: 'hsl(0, 100%, 67%)',
        neutralWhite: 'hsl(0, 0%, 100%)',
        neutralOffWhite: 'hsl(0, 0%, 94%)',
        neutralLightGrey: 'hsl(0, 0%, 86%)',
        neutralSmokeyGrey: 'hsl(0, 1%, 44%)',
        neutralOffBlack: 'hsl(0, 0%, 8%)',
      },
    },
  },
  plugins: [],
};
