import get from 'axios'

const url = 'https://mixer.com/api/v1/delve/topStreams'

export default async function() {
  const { data }= await get(url)
  const streams = data.map(({token, viewersCurrent}) => ({
    source: 'mixer',
    name: token,
    viewers: viewersCurrent,
  }))
  return streams
}

