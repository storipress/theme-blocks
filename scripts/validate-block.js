import slugify from '@sindresorhus/slugify'
import execa from 'execa'
import { groupBy, mapValues } from 'lodash'
import puppeteer from 'puppeteer'
import readline from 'readline'
import { table } from 'table'
import webpack from 'webpack'
import Server from 'webpack-dev-server'

import webpackConfig from '../webpack.config.babel'
import { generate } from './generate-index'

function waitInput() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  return new Promise((resolve) =>
    rl.question('Press enter', (ans) => {
      rl.close()
      resolve(ans)
    })
  )
}

const INVALID_PATH = ['dist', 'scripts', 'boilerplate', 'Example', '.yarn', '.github']

async function guessBlockPath() {
  if (process.argv.length > 1) {
    return process.argv[2]
  }

  const { stdout } = await execa('git', ['show', '--name-only', '--format='])
  if (stdout.trim() === '') {
    return undefined
  }
  const lines = stdout.trim().split('\n')
  const [category, name] = lines[0].split('/')
  const path = `${slugify(category)}/${name}`
  if (INVALID_PATH.some((prefix) => path.startsWith(prefix))) {
    console.error(`get invalid path ${path}`)
    return undefined
  }
  return path
}

async function startServer() {
  // disable css transition & enable important
  process.env.STYLE_TEST = 'true'
  const compiler = webpack(webpackConfig)
  const server = new Server(compiler, { quiet: true, stats: false })
  await server.listen(8080)
  return server
}

function printReport(reports) {
  const kindReport = Array.from(Object.values(groupBy(reports, ({ kind }) => kind)))
  const stylesReport = kindReport.flatMap((report) =>
    Array.from(
      Object.values(
        mapValues(
          groupBy(report, ({ style }) => style),
          (list) =>
            list.reduce(
              (res, { values, ...report }) => {
                return {
                  ...report,
                  pairs: [...res.pairs, values],
                }
              },
              { pairs: [] }
            )
        )
      )
    )
  )
  console.error(
    table(
      stylesReport.map(({ kind, style, pairs }) => [
        kind,
        style,
        pairs.map(([expected, actual]) => `${expected}, ${actual}\n`).join(''),
      ])
    )
  )
  console.error(stylesReport.map(({ message }) => message).join('\n'))
}

async function main() {
  const path = await guessBlockPath()
  console.log('path:', JSON.stringify(path))
  if (!path) {
    console.error('abort because fail to get path')
    return
  }
  await generate()
  const serverProcess = await startServer()
  const browser = await puppeteer.launch({ devtools: Boolean(process.env.DEBUG_TEST) })
  try {
    const page = await browser.newPage()
    await page.goto(`http://localhost:8080/#/${path}`)
    const report = await page.evaluate(() => {
      try {
        return TestUtils.generateReport()
      } catch {
        return [
          {
            message: 'Fail to generate report',
          },
        ]
      }
    })
    console.log('========= Automatically Test Report ==========')
    if (report.length) {
      printReport(report)
      process.exitCode = 1
    } else {
      console.log('Great! No obvious error found by automatically test')
    }

    if (process.env.DEBUG_TEST) {
      await waitInput()
    }
  } finally {
    await browser.close()
    await serverProcess.close()
  }
}

main()
