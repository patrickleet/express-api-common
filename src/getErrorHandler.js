export default (env) => {
  if (env === 'development') {
    return require('./devErrorHandler').default
  } else {
    return require('./prodErrorHandler').default
  }
}
