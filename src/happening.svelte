<script>
  import { onMount, afterUpdate, tick } from 'svelte'
  //import { mediumPosts } from 'stores/editorial'
  
  export let mediumPosts = []
</script>

<div class="container">
    hola
    {#each mediumPosts as mp}
      hej
    {/each}

</div>

<style>
  .container {
    min-width: 350px;
    display: block;
    position: relative;
    height: 100vh;
    overflow: auto;
    color: red;
  }

  
</style>
