<script>
	import { createEventDispatcher } from 'svelte';

  function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1)
  }

  const dispatch = createEventDispatcher();

  export let id
  export let title
  export let tags
  export let paragraphs
  export let lastPublishedAt
  export let paragraph_type
</script>

<div
  class="medium_post"
  on:click={() => dispatch('click')}
>  
  <div class="paragraphs">
    {#each paragraphs as paragraph}
      {#if paragraph.type == 3}
        <div class="title">
          {capitalize(paragraph.text)}
        </div>
      {:else if paragraph.type == 13}
        <div class="subtitle">
          {capitalize(paragraph.text)}
        </div>
      {:else if paragraph.type == 4}
        <div class="image">
          <img src="https://miro.medium.com/max/552/{paragraph.metadata.id}" />
          <div class="image_text">{paragraph.text}</div>
        </div>
      {:else}
        <div class="paragraph">
          <p>{paragraph.text}</p>
        </div>
      {/if}
      
    {/each}
  </div>
</div>

<style>

  .medium_post {
    width: 100%;
    display: block;
    justify-content: left;
    background-color: rgb(42,42,48);
    margin: 20px 20px;
    padding: 20px;
  }
  @media (hover: hover) {
    .medium_post:hover {
      background-color: rgb(42,42,48);
    }
  }
  

  .medium_post > div {
    align-items: center;
    padding: 5px;
  }
  .medium_post div.title {
    width: 90%;
    position: relative;
    justify-content: center;
    clear: both;
    display: block;
    font-size: 5vh;
    padding-bottom: 10px;
  }

  .medium_post div.subtitle {
    width: 90%;
    position: relative;
    justify-content: center;
    clear: both;
    display: block;
    font-size: 3vh;
    padding-bottom: 20px;
  }

  .medium_post div.paragraph {
    width: 90%;
    position: relative;
    justify-content: left; 
    display: block;
    clear: both;
  }

  .medium_post .image {
    width: 90%;
    position: relative;
    justify-content: center; 
    display: block;
    clear: both;
    padding-top: 20px;
  }

  .medium_post .image .image_text {
    font-style: italic;
    padding-bottom: 20px;
  }

  .medium_post div.paragraph p {
    padding: 5px 0;
  }

  
</style>
