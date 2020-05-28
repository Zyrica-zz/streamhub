<script>
  import { get } from 'axios'
  let streams = []
  async function init() {
    const { data } = await get('/api')
    streams = data
    console.log(streams[0].channel)
  }
  init()

</script>

<style>
  .streams {
    display: flex;
    flex-direction: column;
  }
  .stream {
    display: flex;
  }
</style>

<div class="streams">
  {#each streams as { preview, channel }}
    <div class="stream">
      <img alt="" src={preview.medium} />
      <div>
        <h2>{channel.display_name}</h2>
        <h3>{channel.description}</h3>
      </div>
    </div>
  {/each}
</div>
