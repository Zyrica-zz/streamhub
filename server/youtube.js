import get from "axios";

const config = {
  headers: {
    Accept: 'application/json'
  }
}
const key = 'AIzaSyCXQ0ol1Kg_WWdtrprVnxKEUk6Ask426vM'
const baseUrl = 'https://www.googleapis.com/youtube/v3/search'
  + '?part=snippet'
  + '&eventType=live'
  + '&type=video'
  + `&key=${key}`
  + '&maxResults=50'


const searchUrl = 'https://www.googleapis.com/youtube/v3/videos'
  + '?part=liveStreamingDetails'
  + `&key=${key}`


export default async function(query) {
  query = encodeURIComponent(query)
  let url = `${baseUrl}&q=${query}`
  let streams
  try {
    let result = await get(url, config)
    streams = result.data.items

    const ids = streams.map(stream => stream.id.videoId).join()
    url = `${searchUrl}&id=${ids}`
    result = await get(url, config)
    result.data.items.forEach(({ id, liveStreamingDetails }) => {
      const stream = streams.find(stream => stream.id.videoId === id)
      stream.liveStreamingDetails = liveStreamingDetails
    })
  } catch(e) {
    console.error('errror getting streams from twitch', e)
  }
  return streams
}
