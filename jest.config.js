/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

module.exports = {
  projects: [
    {
      displayName: 'Functionality Test',
      preset: 'jest-puppeteer',
      testMatch: ['<rootDir>/tests/functionality/**/?(*.)+(spec|test).[tj]s?(x)'],
      transformIgnorePatterns: ['/node_modules/', '\\.pnp\\.[^\\/]+$', 'boilerplate/src/sdk/*.js$'],
      testRunner: 'jest-circus/runner',
      modulePathIgnorePatterns: ['<rootDir>/boilerplate/'],
    },
    {
      displayName: 'Smoke Test',
      clearMocks: true,
      testEnvironment: 'jsdom',
      testMatch: ['<rootDir>/tests/smoke/**/?(*.)+(spec|test).[tj]s?(x)'],
      transformIgnorePatterns: ['/node_modules/', '\\.pnp\\.[^\\/]+$', 'boilerplate/src/sdk/*.js$'],
      testRunner: 'jest-circus/runner',
      modulePathIgnorePatterns: ['<rootDir>/boilerplate/'],
      moduleNameMapper: {
        data: require.resolve('./scripts/template/data'),
        '@jraft/block': require.resolve('./boilerplate/src/sdk/block-sdk.js'),
        '@jraft/article': require.resolve('./boilerplate/src/sdk/article-sdk.js'),
        '@storipress/block': require.resolve('./boilerplate/src/sdk/block-sdk.js'),
        '@storipress/article': require.resolve('./boilerplate/src/sdk/article-sdk.js'),
      },
      transform: {
        '^.+\\.js$': 'babel-jest',
        '.*\\.(vue)$': 'vue-jest',
      },
    },
  ],

  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  transformIgnorePatterns: ['/node_modules/', '\\.pnp\\.[^\\/]+$', 'boilerplate/src/sdk/*.js$'],
  testRunner: 'jest-circus/runner',
}
