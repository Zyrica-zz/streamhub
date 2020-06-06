<script>
	import { createEventDispatcher } from 'svelte';
  import Logo from './logo.svelte'

  const dispatch = createEventDispatcher();
  function select(name) {
    dispatch('select', name)
  }

  export let selected = ''
</script>

<div class="menu">
  <img src="logo.png" alt="www.streamhub.gg" height="32px" />
  <div on:click={() => dispatch('select', name)}>Top 50</div>
  <div>Favourites</div>
  <div>Player</div>
</div>

<style>
  .menu {
    display: flex;
    background-color: rgb(24,24,27);
    border-bottom: 2px solid black;
  }
  .menu > div {
    padding: 10px;
    padding-bottom: 7px;
    border-bottom: 3px solid transparent;
  }
  .menu > div:hover {
    cursor: pointer;
    color: green;
  }
  .selected {
    color: green;
    border-bottom: 3px solid green;
  }
</style>
