const path = require('path')
const defaultTheme = require('tailwindcss/defaultTheme')
const base = require('./boilerplate/tailwind.config')
const _ = require('lodash')

function createThemeModifier(theme, value) {
  const mapper = process.env.STYLE_TEST ? _.constant(value) : _.identity
  return () => {
    return _.mapValues(theme, mapper)
  }
}

const directory = [
  'ArticleTemplates',
  'Footer',
  'Hero',
  'Mixed',
  'OneRow',
  'PageTemplates',
  'Single',
  'Text',
  'TwoRow',
  'SubscriptionBox',
  'boilerplate',
]

const content = [
  ...directory.map((dir) => path.join(__dirname, dir, '**/*.{vue,js,css,scss}')),
  path.join(__dirname, './boilerplate/inspector/inspector.js'),
]

module.exports = {
  presets: [base],
  content,
  important: !!process.env.STYLE_TEST,
  theme: {
    backgroundColor: defaultTheme.backgroundColor,
    // force disable transition for style test
    transitionProperty: createThemeModifier(defaultTheme.transitionProperty, 'none'),
    transitionDuration: createThemeModifier(defaultTheme.transitionDuration, '0ms'),
  },
}
