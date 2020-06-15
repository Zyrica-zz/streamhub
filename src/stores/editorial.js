import { derived, readable } from 'svelte/store'
import { get } from "axios";

const key = 'editorials'

const fav = loadFromLocalStorage()



async function getEditorials() {
  console.log("HERERER")
  const { data } = await get('/api/editorial')
  console.log('Editorials', data)
}
getEditorials()

let save
export const editorialIds = readable([...fav], set => {
  save = () => {
    saveToLocalStorage()
    set([...fav])
  }
})

export function toggleFavorite(id) {
  if (fav.has(id)) {
    fav.delete(id)
  } else {
    fav.add(id)
  }
  save()
}

function saveToLocalStorage() {
  localStorage.setItem(key, JSON.stringify([...fav]))
}
function loadFromLocalStorage() {
  let json = localStorage.getItem(key)
  return  new Set(json ? JSON.parse(json) : [])
}
