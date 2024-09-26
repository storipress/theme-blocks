module.exports = {
  content: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx', './src/**/*.tsx'],
  theme: {
    extend: {
      screens: {
        lg: '1070px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms')({ strategy: 'class' }),
  ],
}
