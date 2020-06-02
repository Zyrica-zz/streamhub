import { derived, readable } from 'svelte/store'

const key = 'favourites'

const favourites = loadFromLocalStorage()

let save
const readableFavorites = readable(favourites, set => {
  save = () => {
    saveToLocalStorage()
    set(favourites)
  }
})

export function toggleFavourite(id) {
  if (favourites.has(id)) {
    favourites.delete(id)
  } else {
    favourites.add(id)
  }
  save()
}

export const isFavourite = derived(
  readableFavorites,
  favourites => id => favourites.has(id)
)

function saveToLocalStorage() {
  localStorage.setItem(key, JSON.stringify([...favourites]))
}
function loadFromLocalStorage() {
  let json = localStorage.getItem(key)
  return  new Set(json ? JSON.parse(json) : [])
}
