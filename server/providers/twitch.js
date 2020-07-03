import get from 'axios'
import dotenv from 'dotenv'
import redis from '../redis'
import { getNow } from '../util'
dotenv.config()

const config = {
  headers: {
    'Client-ID': process.env.twitch_client_id,
    'Accept': 'application/vnd.twitchtv.v5+json'
  }
}

const limit = 100
const url = `https://api.twitch.tv/kraken/streams?limit=${limit}`

const twitchRedis = redis('twitch')

const isTwitch = s => s.source === 'twitch'

function parseStream(stream) {
  const { channel, viewers } = stream
  return {
    source: 'twitch',
    name: channel.name,
    viewers,
    avatar: channel.logo,
    id: channel._id,
    online: true,
    updated:
  }
}

const expireTime = 60*1000 // ms
const isOld = ({ updated }) => updated ? updated < getNow() - expireTime : true

async function getOnlineStreams(streams) {
  const ids = [...streams.map(s => s.id)]
  const promises = []
  while(ids.length) {
    const channels = ids.splice(0, limit).join()
    promises.push(get(url+'&channel='+channels, config))
  }
  const chunks = await Promise.all(promises)
  let onlineStreams = {}
  chunks.forEach(chunk => {
    chunk.data.streams.forEach(s => {
      const stream = parseStream(s)
      onlineStreams[stream.name] = stream
    })
  })
  return onlineStreams
}

async function update(streams) {
  const now = getNow()
  const outdatedStreams = Object.values(streams).filter(isOld)
  const onlineStreams = await getOnlineStreams(outdatedStreams)
  const updatedStreams = {}
  outdatedStreams.forEach(s => {
    const online = onlineStreams[s.name]
    if (!online) {
      s.online = false
      s.updated = now
      updatedStreams[s.name] = s
    } else {
      online.updated = now
      updatedStreams[s.name] = online
    }
  })

  if (outdatedStreams.length) {
    twitchRedis.set(updatedStreams)
  }

  console.log(`Updated ${outdatedStreams.length} streams.`)

  return { ...streams, ...updatedStreams }
}

async function getStreams() {
  console.log('Twitch', 'Get streams')
  const { data } = await get(url, config)
  const streams = {}
  data.streams.forEach(s => {
    const stream = parseStream(s)
    streams[s.name] = s
  })
  return streams
}

export default {
  redis: twitchRedis,
  update,
  getStreams
}
