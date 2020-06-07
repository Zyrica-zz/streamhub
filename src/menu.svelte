<script>
	import { selected } from 'stores/menu'

  const menu = {
    top: 'Top 50',
    favorites: 'Favorites',
    player: 'Player',
  }
</script>

<div class="menu">
  <img src="logo.png" alt="www.streamhub.gg" height="32px" />
  {#each Object.keys(menu) as key}
    <div
      class="item"
      class:selected={key === $selected}
      on:click={() => $selected = key}
    >
      {menu[key]}
    </div>
  {/each}
</div>

<style>
  .menu {
    display: flex;
    padding: 5px;
    padding-bottom: 0;
    background-color: rgb(24,24,27);
    border-bottom: 2px solid black;
  }
  .item {
    padding: 10px;
    padding-bottom: 7px;
    border-bottom: 3px solid transparent;
  }
  .item:hover {
    cursor: pointer;
    color: #6CAA61;
  }
  .selected {
    color: #6CAA61;
    border-bottom: 3px solid #6CAA61;
  }
</style>
