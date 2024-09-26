function isBabelRegister(caller) {
  return !!(caller && caller.name === '@babel/register')
}

module.exports = (api) => {
  const isRegister = api.caller(isBabelRegister)

  return {
    presets: [
      '@babel/preset-typescript',
      [
        '@babel/preset-env',
        isRegister
          ? {
              targets: {
                node: 'current',
              },
            }
          : {},
      ],
    ],
    overrides: [
      {
        test: '*.vue',
        presets: [['@babel/preset-typescript'], { ignoreExtensions: true }],
      },
    ],
  }
}
