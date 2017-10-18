export default function (log = console.log) {
  return function (req, res, next) {
    const method = req.method
    const path = req.path

    if (path !== '/_health') {
      if (typeof log === 'function') {
        log(`${method}: ${path}`)
      } else if (typeof log === 'object' && typeof log.info === 'function') {
        log.info(`${method}: ${path}`)
      }
    }
    next()
  }
}
