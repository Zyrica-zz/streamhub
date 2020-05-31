import get from 'axios'
import dotenv from 'dotenv'
dotenv.config()

const refreshRate = 60*1000 // ms
const config = {
  headers: {
    'Client-ID': process.env.twitch_client_id,
    'Accept': 'application/vnd.twitchtv.v5+json'
  }
}

let streams = []
async function getStreams() {
  const url = `https://api.twitch.tv/kraken/streams?limit=50`
  const { data }= await get(url, config)
  streams = data.streams.map(({channel, viewers})=> {
    return {
      source: 'twitch',
      name: channel.name,
      viewers,
    }
  })
}

let last = new Date().getTime()
getStreams()
export default () => {
  const now = new Date().getTime()
  if (now - last > refreshRate) {
    last = now
    getStreams()
  }
  return streams
}
