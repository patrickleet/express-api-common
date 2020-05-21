# express-api-common
[![Build Status](https://travis-ci.org/patrickleet/express-api-common.svg?branch=master)](https://travis-ci.org/patrickleet/express-api-common)
[![codecov](https://codecov.io/gh/patrickleet/express-api-common/branch/master/graph/badge.svg)](https://codecov.io/gh/patrickleet/express-api-common)

express server configured with servicebus middleware, and prometheus exporters, and request (leveled optional) logging

## Usage

```
import log from 'llog'
import makeServer from 'express-api-common'

const options = {
  logger: log
}
const server = makeServer(options)
server.use('/', () => { 
  //... 
})
server.start(PORT, onServerListen)
```