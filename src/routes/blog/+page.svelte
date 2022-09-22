<script>
    import BlogTile from '$lib/BlogTile/index.svelte';
    import PageTitle from '$lib/pageTitle.svelte';
    
     /** @type {import('./$types').PageData} */
    export let data;
  </script>
  
  <PageTitle title='Blog' />
  <p>
    Articles du plus récent au plus ancien...
  </p>
  <ul>
    {#each data.posts as post}
    <li>
      <BlogTile post={post} />
    </li>
    {/each}
  </ul>

  

  <style>
    ul {
      list-style-type: none;
    }
  </style>