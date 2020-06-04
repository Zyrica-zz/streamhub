<script>
  import { toggleFavourite, isFavourite } from './favourites-store'
  import { streams } from './streams-store'
  import Stream from './stream.svelte'

  function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1)
  }
</script>

<div class="container">
  <div class="streams">
    {#each $streams as {source, name, viewers, avatar, id}}
      <Stream
        isFavourite={$isFavourite(id)}
        source={source}
        name={name}
        viewers={viewers}
        avatar={avatar}
        on:click={toggleFavourite(id)}
      />
    {/each}
  </div>
</div>

<style>
  .container {
    min-width: 350px;
    display: block;
    position: relative;
    height: 100vh;
    overflow: auto;
  }
  .streams {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
  }
</style>
