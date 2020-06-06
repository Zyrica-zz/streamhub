<script>
  import Top50 from './top50.svelte'
  import Player from './player.svelte'
  import Menu from './menu.svelte'
</script>

<div class="container">
  <Menu />
  <div class="content">
    <Top50 />
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
