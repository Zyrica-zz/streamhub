import { Router } from 'express'
import twitch from './twitch'

const router =  new Router()

router.use('*', async (req, res) => {
  const streams = await twitch()
  res.send(streams)
})

export default router
