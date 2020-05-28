import { Router } from 'express'
import twitch from './twitch'

const router =  new Router()

router.use('*', async (req, res) => {
  const { data } = await twitch()
  res.send(data)
})

export default router
