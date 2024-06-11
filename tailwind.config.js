/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      darkMode: {
        colors: {
          bordo: {
            10: '#E6B8AF',
            20: '#E29EA6',
            30: '#DE849D',
            40: '#DA6B94',
            50: '#D6518B',
            60: '#D23882',
            70: '#CE1F79',
            80: '#CA0570',
            90: '#C5006E',
            100: '#BF006B',
            200: '#AC005F',
            300: '#990053',
            400: '#860047',
            500: '#73003B',
            600: '#600030',
            700: '#4D0024',
            800: '#3A0019',
            900: '#27000D',
            950: '#800020',
          },
          golden: {
            10: '#FFF7E0',
            20: '#FFF3CC',
            30: '#FFEFB8',
            40: '#FFEB99',
            50: '#FFE87F',
            60: '#FFE466',
            70: '#FFE04C',
            80: '#FFDC32',
            90: '#FFD719',
            100: '#FFD300',
            200: '#E6BC00',
            300: '#CCA600',
            400: '#B29100',
            500: '#997C00',
            600: '#806700',
            700: '#665200',
            800: '#4D3D00',
            900: '#332800',
            950: '#261D00',
          },
        },
      },
      colors: {
        red: {
          10: '#FFCCCC',
          20: '#FFC2C2',
          30: '#FFB8B8',
          40: '#FFADAD',
          50: '#FFA3A3',
          60: '#FF9999',
          70: '#FF8F8F',
          80: '#FF8585',
          90: '#FF7A7A',
          100: '#FF7070',
          200: '#FF4747',
          300: '#FF1F1F',
          400: '#FF1515',
          500: '#FF0A0A',
          600: '#FF0000',
          700: '#E60000',
          800: '#CC0000',
          900: '#B20000',
          950: '#990000',
        },
        cream: {
          10: '#FFF9EC',
          20: '#FFF7E5',
          30: '#FFF5DE',
          40: '#FFF3D7',
          50: '#FFF1D0',
          60: '#FFEFCA',
          70: '#FFEDC3',
          80: '#FFEBBC',
          90: '#FFE9B5',
          100: '#FFE7AE',
          200: '#FFDD8E',
          300: '#FFD46F',
          400: '#FFCB4F',
          500: '#FFC230',
          600: '#FFB910',
          700: '#E6A60E',
          800: '#CC940C',
          900: '#B3820A',
          950: '#996F08',
        },
      },
    },
  },
  plugins: [],
};
