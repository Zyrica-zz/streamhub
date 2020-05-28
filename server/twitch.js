import get from 'axios'

const url = `https://api.twitch.tv/kraken/streams`
const config = {
  headers: {
    'Client-ID': 'shq37rasv1oaqfb1jnzvh12bilkjgj',
    'Accept': 'application/vnd.twitchtv.v5+json'
  }
}

export default async function() {
  let streams
  try {
    const result = await get(url, config)
    streams = result.data.streams
  } catch(e) {
    console.error('errror getting streams from twitch', e)
  }
  return streams
}
