import { Router } from 'express'
import createCache from './cache'
import twitch from './providers/twitch'
import youtube from './providers/youtube'
import mixer from './providers/mixer'
import { getStreamers } from './db'

const router =  new Router()

const oneMinute = 60*1000

function byViewers(a, b) {
  return b.viewers - a.viewers
}

const cache = {
  getTwitch: createCache(twitch, oneMinute),
  getYoutube: createCache(youtube, 5*oneMinute),
  getMixer: createCache(mixer, oneMinute),
  getAll: () => [
    ...cache.getTwitch(),
    ...cache.getYoutube(),
    ...cache.getMixer()
  ].sort(byViewers)
};
(async () => {
  const streamers = await getStreamers()
  console.log({ streamers })
})()

router.use('*', async (req, res) => {
  res.send(cache.getAll())
})

export default router
