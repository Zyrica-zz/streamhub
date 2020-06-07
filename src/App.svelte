<script>
  import { selected } from 'stores/menu'
  import { isFavorite } from 'stores/favorites'
  import { streams } from 'stores/streams'
  import Streams from './streams.svelte'
  import Player from './player.svelte'
  import Menu from './menu.svelte'

  $: filteredStreams = $streams.filter(({id}) => {
    let i = $selected !== 'favorites' || $isFavorite(id)
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
