import { makeServer } from 'server'

jest.mock('expressServer', () => {
  return {
    use: jest.fn(() => {}),
    post: jest.fn(),
    get: jest.fn(),
    set: jest.fn(),
    listen: jest.fn()
  }
})

describe('server', () => {
  it('is defined', () => {
    expect(typeof makeServer).toBe('function')
  })

  it('takes options object and returns initialized server with common middleware', () => {
    let options = {
      logger: jest.fn()
    }
    let server = makeServer(options)
    expect(server.use).toBeCalled()

    expect(server.startServer).toBeDefined()
    expect(server.start).toBeDefined()
    expect(server.start).toEqual(server.startServer)

    let cb = jest.fn()
    server.start(3000, cb)
    expect(server.listen).toBeCalled()
  })
})
