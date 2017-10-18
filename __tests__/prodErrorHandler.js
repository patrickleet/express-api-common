import prodErrorHandler from 'prodErrorHandler'

describe('prodErrorHandler', () => {
  it('exports a function', () => {
    expect(prodErrorHandler).toBeDefined()
    expect(typeof prodErrorHandler).toBe('function')
  })

  it('returns undefined error in json response with default code of 500', () => {
    const err = {
      status: undefined,
      message: 'my error message'
    }

    const req = {}

    const res = {
      status: jest.fn(),
      json: jest.fn()
    }

    prodErrorHandler(err, req, res)

    expect(res.status).toBeCalledWith(500)
    expect(res.json).toBeCalledWith({
      message: err.message,
      error: {}
    })
  })

  it('returns undefined error in json response', () => {
    const err = {
      status: 404,
      message: 'my error message'
    }

    const req = {}

    const res = {
      status: jest.fn(),
      json: jest.fn()
    }

    prodErrorHandler(err, req, res)

    expect(res.status).toBeCalledWith(404)
    expect(res.json).toBeCalledWith({
      message: err.message,
      error: {}
    })
  })
})
