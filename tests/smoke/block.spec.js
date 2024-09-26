import { render } from '@testing-library/vue'

import { blocks } from '../helper/blocks'

beforeAll(() => {
  // shim
  window.ResizeObserver = class {
    observe() {}
    unobserve() {}
  }
})

describe.each(blocks)('%s block', (name, { fullPath }) => {
  const block = require(fullPath)
  test('render without warning', () => {
    const spy = jest.spyOn(global.console, 'error')
    expect(block.default).toBeDefined()
    render(block.default, { props: { block: {} }, provide: { blockId: 'my-block' } })
    const vueMessages = spy.mock.calls.filter(([msg]) => msg.includes('Vue warn'))
    expect(vueMessages).toHaveLength(0)
    spy.mockRestore()
  })
})
