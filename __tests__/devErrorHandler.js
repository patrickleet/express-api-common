import devErrorHandler from 'devErrorHandler'

describe('devErrorHandler', () => {
  it('exports a function', () => {
    expect(devErrorHandler).toBeDefined()
    expect(typeof devErrorHandler).toBe('function')
  })

  it('returns error in json response with default code of 500', () => {
    const err = {
      status: undefined,
      message: 'my error message'
    }

    const req = {}

    const res = {
      status: jest.fn(),
      json: jest.fn()
    }

    devErrorHandler(err, req, res)

    expect(res.status).toBeCalledWith(500)
    expect(res.json).toBeCalledWith({
      message: err.message,
      error: err
    })
  })

  it('returns error in json response', () => {
    const err = {
      status: 404,
      message: 'my error message'
    }

    const req = {}

    const res = {
      status: jest.fn(),
      json: jest.fn()
    }

    devErrorHandler(err, req, res)

    expect(res.status).toBeCalledWith(404)
    expect(res.json).toBeCalledWith({
      message: err.message,
      error: err
    })
  })
})
