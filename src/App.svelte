<script>
/*
      const result = new Twitch.Embed(''+id, {
        width,
        height,
        channel: channel.name,
        layout: 'video',
      })
 */
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
</script>

<div class="streams">
  {#each streams as {source, name, viewers, avatar}}
    <div class="stream">
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
        {viewers}
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
  .viewers {
    width: 100px;
    justify-content: right;
    align-items: end;
    text-align: right;
  }
</style>
