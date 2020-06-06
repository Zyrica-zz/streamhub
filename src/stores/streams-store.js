import { derived, readable } from 'svelte/store'
import { get } from 'axios'
import ga from '../google-analytics'

let setStreams
export const streams = readable([], set => {
  setStreams = set
})

async function getStreams() {
  ga('list', 'streams', 'top-50')
  const { data } = await get('/api')
  setStreams(data)
}

getStreams()
setInterval(getStreams, 30*1000)
