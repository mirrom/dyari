module.exports = {
  purge: {
    enabled: false,
    content: ['./**/*.hbs'],
  },
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        'dyari-gray': {
          lightest: '#fafafb',
          'very-light': '#e8ebed',
          lighter: '#9197a1',
          light: '#80868e',
          DEFAULT: '#60666c',
          dark: '#212326',
          darker: '#1c1e21',
          darkest: '#151719',
        },
      },
      fontFamily: {
        'serif': ['Georgia', 'ui-serif', 'Cambria', 'Times New Roman', 'Times', 'serif'],
      },
    },
  },
  variants: {
    extend: {},
    typography: ['responsive', 'dark'],
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
