import pDefer from 'p-defer'
import path from 'path'
import webpack from 'webpack'
import Server from 'webpack-dev-server'
import VirtualModules from 'webpack-virtual-modules'

import config from '../webpack.config.babel.js'
import { generate } from './generate-index'

export async function serve(quiet = false) {
  const ready = pDefer()
  const entry = await generate()
  const entryPath = path.resolve(__dirname, '.tmp/virtual-entry.js')

  const virtualModules = new VirtualModules({
    [entryPath]: entry,
  })
  const compiler = webpack({
    ...config,
    entry: entryPath,
    plugins: [...config.plugins, virtualModules],
    stats: quiet ? undefined : 'none',
  })
  compiler.hooks.done.tap('WaitFirstBundle', () => ready.resolve())
  const server = new Server({}, compiler)
  await server.start()
  await ready.promise
  return () => {
    return new Promise((resolve) => {
      server.close(() => resolve())
    })
  }
}

if (require.main === module) {
  serve()
}
