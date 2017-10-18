export default function(req, res, next) {
  res.status(404)
  res.end('not found')
}
