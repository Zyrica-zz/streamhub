import get from 'axios'

const url = 'https://mixer.com/api/v1/delve/topStreams'

export default async function() {
  const { data }= await get(url)
  const streams = data.map(({token, viewersCurrent, id}) => ({
    source: 'mixer',
    name: token,
    viewers: viewersCurrent,
    logo: `https://mixer.com/api/v1/users/${id}/avatar?w=64&h=64`,
  }))
  return streams
}

