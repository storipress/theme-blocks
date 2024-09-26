module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    process.env.STYLE_TEST && require('./scripts/remove-transition.js'),
  ].filter(Boolean),
}
