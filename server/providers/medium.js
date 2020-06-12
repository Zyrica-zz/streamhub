import get from "axios";
import dotenv from 'dotenv'
dotenv.config()

const config = {
	'mediumUser': '@jojdal'
}

const mediumJSONFeed = require('medium-json-feed');

let posts = []
let fixedPosts = []
function parsePosts(response) {
	for(var i=0;i<response.length;i++) {
		var post = {}
		post.id = response[i].id;
		post.title = response[i].title;
		post.tags = response[i].virtuals.tags;
		post.paragraphs = response[i].previewContent2.bodyModel.paragraphs
		post.latestPublishedAt = response[i].latestPublishedAt;
  		posts.push(post);

  		console.log(post)

  	}; 
	//console.log(response[0].previewContent2.bodyModel.paragraphs)
	//console.log(posts);
}


function getFixedPosts() {
	return posts;
}


export default async function getPosts() {
  console.log('Getting medium posts')
  let result

  mediumJSONFeed(config.mediumUser)
  	.then(data => fixedPosts = parsePosts(data.response))
  	
 	return getFixedPosts();
}


//.then(data => console.log(data))
