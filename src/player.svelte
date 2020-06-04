<script>
  import { favoriteIds, favorites } from './favourites-store'
  const ratio = 1920/1080
  const height = 300
  const width = height*ratio
</script>

<div>
  {#each $favorites as {source, id, name}}
    {#if source === 'twitch'}
      <iframe
        title={name}
        src="https://player.twitch.tv/?channel={name}&muted=true"
        height={height}
        width={width}
      />
    {:else if source === 'youtube'}
      <iframe
        title={name}
        src="https://www.youtube.com/embed/live_stream?channel={id}&autoplay=true&mute=true"
        height={height}
        width={width}
        allowfullscreen
      />
    {:else if source === 'mixer'}
      <iframe
        title={name}
        src="https://mixer.com/embed/player/{name}?muted=true"
        height={height}
        width={width}
      />
    {/if}
  {/each}
</div>

<style>
</style>
