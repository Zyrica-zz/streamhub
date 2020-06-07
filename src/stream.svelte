<script>
	import { createEventDispatcher } from 'svelte';

  function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1)
  }

  const dispatch = createEventDispatcher();

  export let isFavorite = false
  export let source
  export let avatar
  export let name
  export let viewers
</script>

<div
  class="stream"
  class:favorite="{isFavorite}"
  on:click={() => dispatch('click')}
>
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
    <span>{viewers}</span>
  </div>
</div>

<style>

  .stream {
    width: 100%;
    display: flex;
    cursor: pointer;
    justify-content: center;
    margin-bottom: 1px;
  }
  @media (hover: hover) {
    .stream:hover {
      background-color: rgb(42,42,48);
    }
  }
  .favorite {
    background-color: rgb(28,28,32);
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
    max-width: 300px;
    flex: 1;
  }
  .stream > .viewers > span{
    width: 60px;
    text-align: right;
  }
</style>
