import redis from 'redis'
import dotenv from 'dotenv'
import { promisify } from 'util'

import { checkOnline } from './providers/twitch'
dotenv.config()

const url = process.env.redis_cloud_url
const client = redis.createClient(url)

// const get = promisify(client.get).bind(client)
// const set = promisify(client.set).bind(client)

const hmset = promisify(client.hmset).bind(client)
const hmget = promisify(client.hmget).bind(client)

/*
  check: timestamp
  viewers: int
  online: bool
 */

function update(outdated) {
  // change name
  checkOnline(outdated)
}

export async function setOnline(streamers) {
  const online = await hmget('streamers', streamers.map(s => ''+s._id))
  const outdated = []
  for (let i=0 ; i < streamers.length ; i++) {
    if (!online[i]) {
      outdated.push(streamers[i])
    }
  }
  update(outdated)
}