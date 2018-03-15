# express-api-common
[![Build Status](https://travis-ci.org/patrickleet/express-api-common.svg?branch=master)](https://travis-ci.org/patrickleet/express-api-common)
[![codecov](https://codecov.io/gh/patrickleet/express-api-common/branch/master/graph/badge.svg)](https://codecov.io/gh/patrickleet/express-api-common)
[![Greenkeeper badge](https://badges.greenkeeper.io/patrickleet/express-api-common.svg)](https://greenkeeper.io/)

express api configured with commonly used middleware

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