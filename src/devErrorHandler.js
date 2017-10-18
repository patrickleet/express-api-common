export default function(err, req, res) {
  res.status(err.status || 500)
  res.json({
    message: err.message,
    error: err
  })
}
