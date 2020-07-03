import { Router } from 'express'
import twitch from './providers/twitch'
import { getNow } from './util'

const router =  new Router()

function byViewers(a, b) {
  if (a.online === b.online) {
    return b.viewers - a.viewers
  } else {
    return a.online ? -1 : 1
  }
}

const exploreTime = 10*60*1000
let lastCall = 0
async function addNewStreams(streams) {
  const now = getNow()
  if (now - lastCall < exploreTime) return {}
  console.log('Looking for new streams')
  lastCall = now
  const topStreams = await twitch.getStreams()
  let newStreams = 0
  Object.keys(topStreams).forEach(name => {
    if (!streams[name]) {
      streasm[name]
      newStreams++
    }
  })
}

router.use('*', async (req, res) => {
  let streams = await twitch.redis.get()
  streams = await twitch.update(streams)
  const newStreams = await addNewStreams(streams)



  res.send(Object.values(streams).sort(byViewers))
})

export default router
