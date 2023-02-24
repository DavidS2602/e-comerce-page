/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx'],
  theme: {
    extend: {
      screens: {
        'm': {'max': '640px'},
        'mobile': {'min' :'300px', 'max':'640px'},
        'tablet': {'min' :'640px', 'max':'1024px'},
        'laptop': {'min' :'1024px', 'max':'1280px'},
        'desktop': {'min' :'1280px', 'max' :'1920px'},
      },
      divideWidth: {
        DEFAULT: '1px',
      },
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
