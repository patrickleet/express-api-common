import handleNotFound from 'handleNotFound'

describe('handleNotFound', () => {
  it('exports a function', () => {
    expect(handleNotFound).toBeDefined()
    expect(typeof handleNotFound).toBe('function')
  })

  it('throws not Found Error', () => {
    const req = {}
    const res = {
      status: jest.fn(),
      end: jest.fn()
    }
    const next = jest.fn()

    handleNotFound(req, res, next)

    expect(res.status).toBeCalledWith(404)
    expect(res.end).toBeCalledWith('not found')
  })
})
