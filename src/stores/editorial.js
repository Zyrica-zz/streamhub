import { derived, readable } from 'svelte/store'
import { get } from "axios";

const key = 'editorials'

let setMediumPosts
export const mediumPosts = readable([], set => {
  setMediumPosts = set
})
mediumPosts.subscribe(() => {})

/*function setMediumPosts(data) {
	mediumPosts = data;
}
*/
async function getMediumPosts() {
  const { data } = await get('/api/editorial')
  console.log('Editorials', data)
  setMediumPosts(data)	
}


getMediumPosts()
setInterval(getMediumPosts, 300*1000)
