import get from 'axios'

const config = {
  headers: {
    'Client-ID': 'shq37rasv1oaqfb1jnzvh12bilkjgj',
    'Accept': 'application/vnd.twitchtv.v5+json'
  }
}

export default async function(query) {
  query = encodeURIComponent(query)
  const url = query
    ? `https://api.twitch.tv/kraken/search/streams?query=${query}&limit=100`
    : `https://api.twitch.tv/kraken/streams?limit=100`
  let streams
  try {
    const result = await get(url, config)
    streams = result.data.streams
  } catch(e) {
    console.error('errror getting streams from twitch', e)
  }
  return streams
}
