import expressServer from 'expressServer'

describe('expressServer', () => {
  it('is an express server', () => {
    expect(expressServer.use).toBeDefined()
  })
})
