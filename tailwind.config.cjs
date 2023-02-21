/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx'],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        black: '#000000',
        very_light_pink: '#c7c7c7',
        text_input_field: '#f7f7f7',
        hospital_green: '#acd9b2'
      },
      fontFamily: {
        'Quicksand': ['Quicksand', 'sans-serif'],
      },
      fontSize: {
        sm: '14px',
        md: '16px',
        lg: '18px',
      }
    },
  },
  plugins: [],
}
