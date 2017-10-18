import devErrorHandler from './devErrorHandler'
import prodErrorHandler from './prodErrorHandler'

export default (env) => {
  if (env === 'development') {
    return devErrorHandler
  } else {
    return prodErrorHandler
  }
}
