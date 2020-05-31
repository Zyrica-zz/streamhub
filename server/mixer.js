import get from 'axios'

export default async function(query) {
  query = encodeURIComponent(query)
  const url = query
    ? `https://mixer.com/api/v1/delve/topStreams`
    : 'https://mixer.com/api/v1/channels'
      + '?scope=all'
      + '&fields=name,viewersCurrent'
      + '&order=viewersCurrent:DESC'
      + '&limit=100'
  let streams
  try {
    const result = await get(url)
    console.log(result)
  } catch(e) {
    console.error('errror getting streams from twitch', e)
  }
  return streams
}
