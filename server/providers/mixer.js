import get from 'axios'

const url = 'https://mixer.com/api/v1/delve/topStreams'

export default async function() {
  console.log('Mixer', 'Get streams')
  const { data }= await get(url)
  const streams = data.map(({token, viewersCurrent, userId}) => ({
    source: 'mixer',
    name: token,
    viewers: viewersCurrent,
    avatar: `https://mixer.com/api/v1/users/${userId}/avatar?w=64&h=64`,
    id: userId
  }))
  return streams
}

