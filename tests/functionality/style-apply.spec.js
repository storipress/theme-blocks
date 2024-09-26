import { serve } from '../../scripts/server'
import { blocks } from '../helper/blocks'

let stop = () => {}

beforeAll(async () => {
  try {
    stop = await serve(true)
    const url = 'http://localhost:8080/#/example/demo-1'

    // warm up
    await page.goto(url)
    await page.reload()
  } catch (e) {
    console.log(require('pnpapi'))
    console.error(e)
  }
})

afterAll(async () => {
  try {
    await stop()
  } catch (e) {
    console.error(e)
  }
})

jest.setTimeout(120000)

const SHOULD_SKIP = new Set([
  // FIXME: timeout
  'Article Templates/NYTMag-1',

  // FIXME: unable to run
  'Article Templates/article-the-cut-one',
  'Desk Sections/aeon-one',
])

describe.each(blocks)('%s', (name, { url }) => {
  beforeEach(async () => {
    await page.goto(url)
    // make sure all the state reset
    await page.reload({ waitUntil: 'networkidle2' })
    await page.waitForSelector('#block-container', { visible: true, timeout: 60000 })
  })

  const t = SHOULD_SKIP.has(name) ? test.skip : test
  t('pass functionality test', async () => {
    const report = await page.evaluate(async (name) => {
      try {
        console.log(name)
        __BLOCK_INSPECTOR__.setTestMode(true)
        await TestUtils.nextTick()
        return await TestUtils.generateReport()
      } catch (e) {
        console.error(e)
        return [
          {
            message: 'Fail to generate report ' + e.message,
          },
        ]
      }
    }, name)

    if (report.length !== 0) {
      console.log(name)
      console.log(report)
    }
    expect(report.length).toBe(0)
  })
})
