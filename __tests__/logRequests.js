import logRequests from 'logRequests'

jest.mock('debug')

describe('logRequests', () => {
  it('exports a function', () => {
    expect(logRequests).toBeDefined()
    expect(typeof logRequests).toBe('function')
  })

  it(`doesn't log request if path is /_health`, () => {
    let healthReq = {
      method: 'GET',
      path: '/_health'
    }
    let res = {}
    let next = jest.fn()

    let logger = jest.fn()
    let fn = logRequests(logger)

    fn(healthReq, res, next)

    expect(next).toBeCalled()
  })

  it('logs requests', () => {
    let req = {
      method: 'GET',
      path: '/test'
    }
    let res = {}
    let next = jest.fn()
    let logger = jest.fn()
    let fn = logRequests(logger)

    fn(req, res, next)
    expect(next).toBeCalled()
  })

  it('logs requests', () => {
    let req = {
      method: 'GET',
      path: '/test'
    }
    let res = {}
    let next = jest.fn()
    let fn = logRequests()

    fn(req, res, next)
    expect(next).toBeCalled()
  })
})
