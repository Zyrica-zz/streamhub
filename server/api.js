import { Router } from 'express'

const router =  new Router()

router.use('*', (req, res) => {
  res.send('hello from api')
})

export default router
