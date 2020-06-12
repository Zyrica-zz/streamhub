<script>
	import { onMount, afterUpdate, tick } from 'svelte'
  import { favoriteIds, favorites } from 'stores/favorites'
  import { selected } from 'stores/menu'


  const domainName = window.location.hostname;

  const ratio = 1920/1080
  let minHeight = 300
  let minWidth = minHeight*ratio

   let width = minWidth
  $: height = width/ratio

  let container
  async function setWidth() {
	  if (!container) return
    await tick()
    let { clientWidth } = container
    let columns = Math.floor(clientWidth/minWidth)
    if (columns < 1) columns = 1
    width = Math.floor(clientWidth / columns) - 1
  }
  selected.subscribe(setWidth)
  onMount(setWidth)
  afterUpdate(setWidth)
  window.addEventListener('resize', setWidth)

</script>

<div class="container" bind:this={container}>
  {#each $favorites as {source, id, name}}
    <div
      class="stream"
      style="height: {height}px; width: {width}px"
    >
      {#if source === 'twitch'}
        <iframe
          title={name}
          src="https://player.twitch.tv/?channel={name}&muted=true&parent={domainName}"
          height={height}
          width={width}
          allowfullscreen=true
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
    </div>
  {/each}
</div>

<style>

.container {
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
  overflow-x: hidden;
  height: 100vh;
}
.stream {
  overflow: hidden;
}
</style>
