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
    streams = data.map(({channel, viewers})=> {
      return {
        source: 'twitch',
        name: channel.name,
        viewers,
      }
    })
    console.log(data[0])
  }
  init()
</script>

<div class="streams">
  <table>
    {#each streams as {source, name, viewers}}
        <tr>
          <td>{source}</td>
          <td>{name}</td>
          <td>{viewers}</td>
        </tr>
    {/each}
  </table>
</div>

<style>
  .streams {
    display: flex;
    justify-content: center;
  }
  td {
    padding: 5px;
  }
</style>
