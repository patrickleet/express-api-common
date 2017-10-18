import server from './expressServer'
import bodyParser from 'body-parser'
import getErrorHandler from './getErrorHandler'
import logRequests from './logRequests'
import handleNotFound from './handleNotFound'
import health from './health'
import debug from 'debug'

const log = debug('express-api-common')

const makeServer = (options) => {
  log('creating express server')
  const { logger, notFoundHandler } = options

  log('using middleware - logRequests and bodyParser')
  server.use(logRequests(logger))
  server.use(bodyParser.json())
  server.use(bodyParser.urlencoded({ extended: false }))

  log('setting up health check endpoint at /_health')
  server.use('/_health', health)

  log('setting up error handler')
  server.use(getErrorHandler(process.env.NODE_ENV))
  server.use(notFoundHandler || handleNotFound)

  return server
}

export default makeServer
