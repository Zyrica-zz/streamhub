import { Router } from 'express'
import twitch from './providers/twitch'

const router =  new Router()

function byViewers(a, b) {
  return b.viewers - a.viewers
}

const expireTime = 60*1000 // ms
const now = () => new Date().getTime()
const isOld = ({ updated }) => updated ? updated < now() - expireTime : true

let streamers = twitch.redis.get()
;(async () => {
  streamers = await streamers
  streamers = Object.values(streamers).sort(byViewers)
})()


router.use('*', async (req, res) => {
  const outdatedStreamers = streamers.filter(isOld)
  console.log(outdatedStreamers.length, streamers.length)
  // here
  res.send(streamers)
})

export default router
