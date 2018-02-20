import server from './expressServer'
import bodyParser from 'body-parser'
import getErrorHandler from './getErrorHandler'
import logRequests from './logRequests'
import handleNotFound from './handleNotFound'
import health from './health'
import debug from 'debug'
import promBundle from 'express-prom-bundle'

const log = debug('express-api-common')

const makeServer = (options) => {
  log('creating express server')
  const { logger, notFoundHandler } = options
  const metricsMiddleware = promBundle({includeMethod: true})

  log('setting up health check endpoint at /_health')
  server.use('/_health', health)

  // we do not want to include healthcheck in metrics
  // so use the metrics middleware below health
  log('setting up prometheus metrics at /metrics')
  server.use(metricsMiddleware)

  log('using middleware - logRequests and bodyParser')
  server.use(logRequests(logger))
  server.use(bodyParser.json())
  server.use(bodyParser.urlencoded({ extended: false }))

  log('setting up error handler')
  server.use(getErrorHandler(process.env.NODE_ENV))

  server.start = server.startServer = (port, onListen) => {
    server.use(notFoundHandler || handleNotFound)
    server.listen(port, onListen)
  }

  return server
}

export default makeServer
