module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        light: { raw: 'light' },
        dark: { raw: 'dark' },
      },
      fontFamily: {
        eesti: ['GT-Eesti', 'system-ui'],
      },
      backgroundColor: {
        transparent: 'transparent',
        primary: '#101720',
        secondary: '#faf8ff',
        white: '#fff',
      },
    },
    fontFamily: {
      eesti: ['GT-Eesti', 'system-ui'],
    },
    colors: {
      white: {
        DEFAULT: '#fff',
      },
      primary: {
        100: '#a273ff',
        200: '#935bff',
        300: '#8344ff',
        400: '#742cff',
        500: '#6415FF',
        600: '#5a13e6',
        700: '#5011cc',
        800: '#460fb3',
        900: '#3c0d99',
      },
      secondary: {
        100: '#7c8ba1',
        200: '#667892',
        300: '#506582',
        400: '#3a5173',
        500: '#243E63',
        600: '#203859',
        700: '#1d324f',
        800: '#192b45',
        900: '#16253b',
      },
      green: {
        lightest: '#bbebe1',
        100: '#1cbc9b',
        200: '#19a98c',
        300: '#16967c',
        400: '#14846d',
        500: '#11715d',
        600: '#0e5e4e',
        700: '#0b4b3e',
        800: '#06261f',
        900: '#03130f',
      },
    },
    textColor: {
      accent: '#707479',
      primary: '#101720',
      secondary: '#faf8ff',
      white: '#ffffff',
      green: {
        lightest: '#bbebe1',
        100: '#1cbc9b',
        200: '#19a98c',
        300: '#16967c',
        400: '#14846d',
        500: '#11715d',
        600: '#0e5e4e',
        700: '#0b4b3e',
        800: '#06261f',
        900: '#03130f',
      },
    },
  },
  variants: {
    extend: {
      textOpacity: ['dark'],
      textColor: ['dark'],
      backgroundColor: ['dark'],
    },
  },
  plugins: [],
};
