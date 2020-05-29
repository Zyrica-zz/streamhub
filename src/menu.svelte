<script>
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()

  let query = ''
  $: dispatch('change', query)
</script>

<div class="menu">
  <input placeholder="Search" bind:value={query} />
  <button>
    <img src="/search.png" alt="Search" width="18px" />
  </button>
</div>

<style>
  .menu {
    display: flex;
    padding: 0.5em;
    background-color: rgb(24,24,27);
    justify-content: center;
    border-bottom: 2px solid black;
  }
  input {
    background-color: rgb(58,58,61);
    color: rgb(108,108,110);
    padding: 0.5em;
    font-size: 1em;
    font-weight: bold;
    font-family: Roobert, "Helvetica Neue", Helvetica, Arial, sans-serif;
    border: 1px solid black;
    border-top-left-radius: 0.5em;
    border-bottom-left-radius: 0.5em;
  }
  input:focus {
    border-color: lime;
    outline: none
  }
  button {
    background-color: rgb(41,41,44);
    border: 1px solid black;
    border-left: none;
    border-top-right-radius: 0.5em;
    border-bottom-right-radius: 0.5em;
    padding: 0.5em;
    padding-right: 0.75em;
  }
</style>
