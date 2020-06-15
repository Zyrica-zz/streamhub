<script>
  import { onMount, afterUpdate, tick } from 'svelte'
  import { mediumPosts } from 'stores/editorial'
  import MediumPost from './medium_post.svelte'

</script>

<div class="container">
  <div class="medium_posts">
    {#each $mediumPosts as {id, title, tags, paragraphs, lastPublishedAt}}
      <MediumPost
        id={id}
        title={title}
        tags={tags}
        paragraphs={paragraphs}
        lastPublishedAt={lastPublishedAt}
      />
    {/each}
  </div>
</div>

<style>
  .container {
    width: 90%;
    padding-left: 5%;
    display: block;
    position: relative;
    height: 100vh;
    overflow: auto;
    clear: both;
  }
  
</style>
