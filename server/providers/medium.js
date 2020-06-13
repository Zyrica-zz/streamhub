import get from "axios"
import dotenv from 'dotenv'
import mediumJSONFeed from 'medium-json-feed'
dotenv.config()

const config = {
	'mediumUser': '@jojdal'
}

function parsePost(post) {
	return {
		id: post.id,
		title: post.title,
		tags: post.virtuals.tags,
		paragraphs: post.previewContent2.bodyModel.paragraphs,
		latestPublishedAt: post.latestPublishedAt
	}
}
function byLatest(postA, postB) {
	return postB.latestPublishedAt - postA.latestPublishedAt
}

export default async function getPosts() {
  console.log('Getting medium posts')
  const { response } = await mediumJSONFeed(config.mediumUser)
	return response.map(parsePost).sort(byLatest)
}


//.then(data => console.log(data))
