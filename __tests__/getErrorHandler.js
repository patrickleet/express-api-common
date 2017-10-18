import getErrorHandler from 'getErrorHandler'
import devErrorHandler from 'devErrorHandler'
import prodErrorHandler from 'prodErrorHandler'

describe('api/lib/getErrorHandler', () => {
  it('exists', () => {
    expect(getErrorHandler).toBeDefined()
  })

  it('returns devErrorHandler when env is development', () => {
    let eh = getErrorHandler('development')
    expect(eh).toEqual(devErrorHandler)
  })

  it('returns prodErrorHandler when env is development', () => {
    let eh = getErrorHandler()
    expect(eh).toEqual(prodErrorHandler)
  })
})
