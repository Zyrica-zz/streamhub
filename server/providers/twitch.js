import get from 'axios'
import redis from '../redis'
import dotenv from 'dotenv'
dotenv.config()

const config = {
  headers: {
    'Client-ID': process.env.twitch_client_id,
    'Accept': 'application/vnd.twitchtv.v5+json'
  }
}

const url = `https://api.twitch.tv/kraken/streams?limit=100`

export const isTwitch = s => s.source === 'twitch'

function parseStream(stream) {
  const { channel, viewers } = stream
  return {
    source: 'twitch',
    name: channel.name,
    viewers,
    avatar: channel.logo,
    id: channel._id,
  }
}

const limit = 100
// change name
export async function checkOnline(streamers) {
  const twitchStreamers = streamers.filter(isTwitch)
  const ids = [...twitchStreamers.map(s => s.id)]
  const promises = []
  while(ids.length) {
    const channels = ids.splice(0, limit).join()
    promises.push(get(url+'&channel='+channels, config))
  }
  const chunks = await Promise.all(promises)
  let streams = []
  chunks.forEach(chunk => {
    streams = streams.concat(chunk.data.streams.map(parseStream))
  })
  return streams
}

let streams = []
export async function getStreams() {
  console.log('Twitch', 'Get streams')
  const { data } = await get(url, config)
  streams = data.streams.map(parseStream)
  return streams
}

export default {
  redis: redis('twitch')
}
