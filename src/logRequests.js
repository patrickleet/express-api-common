export default function (log = console.log) {
  return function (req, res, next) {
    const method = req.method
    const path = req.path

    if (path !== '/_health') {
      log('%s: %s', method, path)
    }

    next()
  }
}
