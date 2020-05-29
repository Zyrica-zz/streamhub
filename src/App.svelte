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
  import getTwitchStreams from '../server/twitch'
  import Menu from './menu.svelte'

  let twitchStreams = []
  $: streams = twitchStreams.map(stream => ({
    source: 'twitch',
    name: stream.channel.name,
    viewers: stream.viewers,
  }))

  let query = ''
  let isSearching = false
  let searchAgain = false

  async function search() {
    if (isSearching) {
      searchAgain = true
    } else {
      isSearching = true
      twitchStreams = await getTwitchStreams(query)
      isSearching = false
      if (searchAgain) {
        searchAgain = false
        search()
      }
    }
  }

  function onMenuChange({ detail }) {
    query = detail
    search()
  }
  search()
</script>

<Menu on:change={onMenuChange} />
<table>
  {#each streams as {source, name, viewers}}
      <tr>
        <td>{source}</td>
        <td>{name}</td>
        <td>{viewers}</td>
      </tr>
  {/each}
</table>

<style>
  td {
    padding: 5px;
  }
</style>
