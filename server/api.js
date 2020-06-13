import { Router } from 'express'
import createCache from './cache'
import twitch from './providers/twitch'
import youtube from './providers/youtube'
import mixer from './providers/mixer'
import medium from './providers/medium'

const router =  new Router()

const oneMinute = 60*1000

function byViewers(a, b) {
  return b.viewers - a.viewers
}

const cache = {
  getTwitch: createCache(twitch, oneMinute),
  getYoutube: createCache(youtube, 5*oneMinute),
  getMixer: createCache(mixer, oneMinute),
  getMedium: createCache(medium, oneMinute),
  getAllStreams: () => [
    ...cache.getTwitch(),
    ...cache.getYoutube(),
    ...cache.getMixer()
  ].sort(byViewers)
}

router.get('/editorial', (req, res) => {
  res.send(cache.getMedium())
})

router.use('*', (req, res) => {
  res.send(cache.getAllStreams())
})

export default router
