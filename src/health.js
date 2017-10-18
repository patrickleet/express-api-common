import { Router } from 'express'
import healthcheck from 'healthcheck-middleware'

var router = Router()

router.use('/', healthcheck())

export default router
