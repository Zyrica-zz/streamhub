<script>
  import { get } from 'axios'

  import { toggleFavourite, isFavourite } from './favourites-store'

  let streams = []
  async function getStreams() {
    const { data } = await get('/api')
    streams = data
  }

  getStreams()
  setInterval(getStreams, 30*1000)

  function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1)
  }
</script>

<div class="streams">
  {#each streams as {source, name, viewers, avatar, id}}
    <div
      class="stream"
      class:favourite="{$isFavourite(id)}"
      on:click={toggleFavourite(id)}
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
    width: 100%;
    display: flex;
    cursor: pointer;
    justify-content: center;
    margin-bottom: 1px;
  }
  @media (hover: hover) {
    .stream:hover {
      background-color: rgb(42,42,48);
    }
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
    max-width: 300px;
    flex: 1;
  }
  .stream > .viewers > span{
    width: 60px;
    text-align: right;
  }

</style>
