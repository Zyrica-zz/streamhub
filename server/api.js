import { Router } from 'express'
import twitch from './twitch'
import youtube from './youtube'

const router =  new Router()

router.use('*', (req, res) => {
  const streams = youtube().concat(twitch()).sort((a,b) => {
    return b.viewers - a.viewers
  })
  res.send(streams)
})

export default router
