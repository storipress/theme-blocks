module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-css-modules'],
  plugins: ['@storipress/stylelint-plugin-block'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen', 'use', 'extend', 'include'],
      },
    ],
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep'],
      },
    ],
    'declaration-block-trailing-semicolon': null,
    'no-descending-specificity': null,
    'property-disallowed-list': ['background-color'],
    'storipress/conflict-classes': [true, { severity: 'warning' }],

    'storipress/custom-media-query-match-spec': true,
  },
  ignoreFiles: ['node_modules', 'src/assets/fonts.css', 'inspector/inspector.css'],
}
