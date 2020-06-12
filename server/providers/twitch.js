import get from 'axios'
import dotenv from 'dotenv'
dotenv.config()

const config = {
  headers: {
    'Client-ID': process.env.twitch_client_id,
    'Accept': 'application/vnd.twitchtv.v5+json'
  }
}

let streams = []
export default async function getStreams() {
  console.log('Twitch', 'Get streams')
  const url = `https://api.twitch.tv/kraken/streams?limit=50`
  const { data }= await get(url, config)
  //console.log(data.streams)
  streams = data.streams.map(({channel, viewers})=> {
    return {
      source: 'twitch',
      name: channel.name,
      viewers,
      avatar: channel.logo,
      id: channel._id,
    }
  })
  return streams
}
