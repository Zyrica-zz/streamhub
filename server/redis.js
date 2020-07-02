import redis from 'redis'
import dotenv from 'dotenv'
import { promisify } from 'util'

import { checkOnline } from './providers/twitch'
dotenv.config()

const url = process.env.redis_cloud_url
const client = redis.createClient(url)

// const get = promisify(client.get).bind(client)
// const set = promisify(client.set).bind(client)
// const flushall = promisify(client.flushall).bind(client)

const hmset = promisify(client.hmset).bind(client)
const hmget = promisify(client.hmget).bind(client)
const hgetall = promisify(client.hgetall).bind(client)

export default function(key) {
  const get = async keys => {
    const strings = await (keys ? hmget(key, keys) : hgetall(key))
    Object.keys(strings).forEach(name => {
      strings[name] = JSON.parse(strings[name])
    })
    return strings
  }
  const set = obj => {
    const array = []
    Object.keys(obj).forEach(field => {
      array.push(field)
      array.push(JSON.stringify(obj[field]))
    })
    hmset(key, array)
  }
  return { get, set }
}
