<script>
  import { selected } from './stores/menu-store'
  import { isFavourite } from './stores/favourites-store'
  import { streams } from './stores/streams-store'
  import Streams from './streams.svelte'
  import Player from './player.svelte'
  import Menu from './menu.svelte'

  $: filteredStreams = $streams.filter(({id}) => {
    let i = $selected !== 'favourites' || $isFavourite(id)
    return i
  })
</script>

<div class="container">
  <Menu />
  <div class="content">
    {#if $selected !== 'player'}
      <Streams streams={filteredStreams} />
    {/if}
    <Player />
  </div>
</div>


<style>
  .container {

  }
  .content {
    width: 100%;
    display: flex;
    overflow: hidden;
  }
</style>
