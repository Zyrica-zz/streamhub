import { derived, readable } from 'svelte/store'
import { streams } from 'stores/streams'

const key = 'favorites'

const fav = loadFromLocalStorage()

let save
export const favoriteIds = readable([...fav], set => {
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

export const favorites = derived(
  [streams, favoriteIds],
  ([$streams, $favoriteIds]) => $favoriteIds
    .map(id => $streams.find(stream => stream.id === id))
    .filter(fav => fav)
)

export const isFavorite = derived(
  favoriteIds,
  () => id => fav.has(id)
)

function saveToLocalStorage() {
  localStorage.setItem(key, JSON.stringify([...fav]))
}
function loadFromLocalStorage() {
  let json = localStorage.getItem(key)
  return  new Set(json ? JSON.parse(json) : [])
}
