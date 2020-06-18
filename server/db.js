import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'
dotenv.config()

const user = {
  name: process.env.mongodb_user,
  password: process.env.mongodb_password,
  cluster: process.env.mongodb_cluster
}

const url = `mongodb+srv://${user.name}:${user.password}@${user.cluster}.mongodb.net/test?retryWrites=true&w=majority`

const options = { useNewUrlParser: true, useUnifiedTopology: true }
const client = new MongoClient(url, options)

let db

// Init
(async () => {
  await client.connect()
  db = client.db(process.env.mongodb_database)
})()

export function collection(collection) {
  return db.collection(collection)
}
