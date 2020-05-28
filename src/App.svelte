<script>
  import { get } from 'axios'
  import Menu from './menu.svelte'
  let streams = []

  const minWidth = 400

  const aspectRatio = 1920/1080

  let columns
  let width
  let height

  function onResize() {
    const ele = document.getElementById('streams')
    if (!ele) {
      requestAnimationFrame(onResize)
      return;
    }
    const containerWidth = ele.offsetWidth

    columns = Math.floor(containerWidth/minWidth)
    if (columns < 0) columns = 1
    if (columns > 4) columns = 4
    width = containerWidth / columns
    height = width / aspectRatio
  }
  window.addEventListener('resize', onResize)
  onResize()

  function activate(id) {
    if (!document.getElementById(''+id)) {
      requestAnimationFrame(() => {
        activate(id);
      })
    } else {
      const { channel } = streams.find(stream => stream._id === id)
      const result = new Twitch.Embed(''+id, {
        width,
        height,
        channel: channel.name,
        layout: 'video',
      })
      result.setMuted(true)
    }
  }

  async function init() {
    const { data } = await get('/api')
    streams = data.splice(0, 12)
    streams.forEach(stream => activate(stream._id))
  }
  init()

</script>

<Menu />
<div id="streams">
  {#each streams as { _id, preview, channel }, i}
    <div id={_id} style="
      width: {width}px;
      height: {height}px;
    ">
    </div>
  {/each}
</div>

<style>
  #streams {
    display: flex;
    flex-wrap: wrap;
  }
</style>
