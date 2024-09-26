function isBabelRegister(caller) {
  return !!(caller && caller.name === '@babel/register')
}

function isBabelLoader(caller) {
  return !!(caller && caller.name === 'babel-loader')
}

module.exports = (api) => {
  const isRegister = api.caller(isBabelRegister)
  const isWebpack = api.caller(isBabelLoader)
  api.cache.using(() => process.env.NODE_ENV === 'test' && isRegister)

  return {
    presets: [
      '@babel/preset-typescript',
      [
        '@babel/preset-env',
        {
          modules: api.env('test') || isRegister ? 'commonjs' : false,
          ...(isRegister
            ? {
                targets: {
                  node: 'current',
                },
              }
            : {}),
        },
      ],
    ],
    plugins: [
      ...(isWebpack
        ? ['@babel/plugin-proposal-optional-chaining', '@babel/plugin-proposal-nullish-coalescing-operator']
        : []),
    ],
  }
}
