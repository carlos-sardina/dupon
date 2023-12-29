/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      purple: '#6c80d1',
      purpleStrong: '#3b4874',
      purpleStronger: '#222944',
      white: '#ffffff',
      gray: '#eeeff3',
      grayLight: '#dddcdc',
      grayStrong: '#8e8e8e',
    },
  },
  plugins: [],
};
