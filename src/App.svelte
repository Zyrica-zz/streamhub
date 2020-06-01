<script>
  import { get } from 'axios'
  let streams = []
  const init = async () => {
    const { data } = await get('/api')
    streams = data
  }
  init()

  function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1)
  }

  let favourites = new Set()
  function toggleFavourite(name) {
    if (favourites.has(name)) {
      favourites.delete(name)
    } else {
      favourites.add(name)
    }
    favourites = favourites
  }
</script>

<div class="streams">
  {#each streams as {source, name, viewers, avatar}}
    <div
      class="stream"
      class:favourite="{favourites.has(name)}"
      on:click={toggleFavourite(name)}
    >
      <div class="source">
        <img class="logo" src={`logos/${source}.png`} alt={capitalize(source)} />
      </div>
      <div class="avatar">
        <img src={avatar} alt={`${name}'s avatar.`} />
      </div>
      <div class="name">
        {name}
      </div>
      <div class="viewers">
        <span>{viewers}</span>
      </div>
    </div>
  {/each}
</div>

<style>
  .streams {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .stream {
    display: flex;
    cursor: pointer;
    margin-bottom: 1px;
  }
  .stream:hover {
    background-color: rgb(42,42,48);
  }
  .favourite {
    background-color: rgb(28,28,32);

  }
  .stream > div {
    display: flex;
    align-items: center;
    overflow: hidden;
    padding: 5px;
  }
  .source {
    width: 30px;
    justify-content: center;
  }
  .logo {
    max-width: 30px;
    max-height: 30px;
  }
  .avatar > img {
    max-width: 64px;
    max-height: 64px;
  }
  .name {
    width: 300px;
  }
  .stream > .viewers > span{
    width: 60px;
    text-align: right;
  }

</style>
