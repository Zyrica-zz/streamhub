import { derived, readable } from 'svelte/store'

const favourites = new Set()

let save
const readableFavorites = readable(favourites, set => {
  save = () => {
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
