import health from 'health'

jest.mock('express', () => {
  return {
    Router: jest.fn(() => {
      return {
        use: jest.fn()
      }
    })
  }
})

describe('health', () => {
  it('exports an object', () => {
    expect(health).toBeDefined()
    expect(typeof health).toBe('object')
  })

  it('registers / route', () => {
    let Router = require('express').Router
    expect(Router).toBeCalled()
  })
})
