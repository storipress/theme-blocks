import { render } from '@testing-library/vue'

import { blocks } from '../helper/blocks'

beforeAll(() => {
  // shim
  window.ResizeObserver = class {
    observe() {}
    unobserve() {}
  }
})

describe.each(blocks)('%s navbar', (name, { fullPath }) => {
  const block = require(fullPath)
  test('Hero should have Navbar', () => {
    if (name.includes('Hero')) {
      expect(block.Navbar).toBeDefined()
    } else {
      // dummy assertion
      expect(true).toBe(true)
    }
  })

  if (block.Navbar) {
    test('Navbar render standalone', () => {
      const spy = jest.spyOn(global.console, 'error')
      const { getAllByRole } = render(block.Navbar, { provide: { blockId: 'my-block' } })
      expect(getAllByRole('navigation').length).toBeGreaterThanOrEqual(1)
      const vueMessages = spy.mock.calls.filter(([msg]) => msg.includes('Vue warn'))
      expect(vueMessages).toHaveLength(0)
      spy.mockRestore()
    })
  } else {
    test('has no navbar', () => {
      expect(block.Navbar).not.toBeDefined()
    })
  }
})
