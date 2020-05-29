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
  import getYoutubeStreams from '../server/youtube'
  import Menu from './menu.svelte'

  let twitchStreams = []
  let youtubeStreams = []
  $: streams = (twitchStreams.map(stream => ({
    source: 'twitch',
    name: stream.channel.name,
    viewers: stream.viewers,
  })).concat(youtubeStreams.map(stream => ({
    source: 'youtube',
    name: stream.snippet.channelTitle,
    viewers: Number(stream.liveStreamingDetails.concurrentViewers),
  })))).sort((a, b) => {
    return b.viewers-a.viewers
  })

  let query = ''
  let isSearching = false
  let searchAgain = false

  async function search() {
    if (isSearching) {
      searchAgain = true
    } else {
      isSearching = true
      const twitchPromise = getTwitchStreams(query)
      const youtubePromise = getYoutubeStreams(query)
      youtubeStreams = await youtubePromise
      twitchStreams = await twitchPromise
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
