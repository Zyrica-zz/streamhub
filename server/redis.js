import redis from 'redis'
import dotenv from 'dotenv'
import { promisify } from 'util'
dotenv.config()

const url = process.env.redis_cloud_url
const client = redis.createClient(url)
const get = promisify(client.get).bind(client)
const set = promisify(client.set).bind(client)

;(async () => {
  const test = await get('test')
  console.log(test)
})()