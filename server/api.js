import { Router } from 'express'
import createCache from './cache'
import twitch from './twitch'
import youtube from './youtube'

const router =  new Router()

const oneMinute = 60*1000

function byViewers(a, b) {
  return b.viewers - a.viewers
}

const cache = {
  getTwitch: createCache(twitch, oneMinute),
  get twitch() { return this.getTwitch() },
  getYoutube: createCache(youtube, 5*oneMinute),
  get youtube() { return this.getYoutube() },
  get all() {
    return [...this.twitch, ...this.youtube].sort(byViewers)
  }
}

router.use('*', (req, res) => {
  res.send(cache.all)
})

export default router
