import get from 'axios'

const refreshRate = 60*1000 // ms

const config = {
  headers: {
    'Client-ID': 'shq37rasv1oaqfb1jnzvh12bilkjgj',
    'Accept': 'application/vnd.twitchtv.v5+json'
  }
}

async function getStreams() {
  const url = `https://api.twitch.tv/kraken/streams?limit=50`
  let streams
  try {
    const result = await get(url, config)
    streams = result.data.streams
  } catch(e) {
    console.error('errror getting streams from twitch', e)
  }
  return streams
}

let streamsPromise
let last = new Date().getTime()

export default async function() {
  const now = new Date().getTime()
  if (now - last > refreshRate) {
    streamsPromise = getStreams()
  }
  return await streamsPromise
}
