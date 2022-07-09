<script context="module">
    import BlogTile from '$lib/BlogTile/index.svelte';
    import PageTitle from '$lib/pageTitle.svelte';
    
    export const load = async ({ fetch }) => {
    const posts = await fetch('/api/posts.json')
    const allPosts = await posts.json()

  return {
    props: {
      posts: allPosts
    }
  }
}
  </script>
  
  <script>
    export let posts
  </script>
  
  <PageTitle title='Blog' />
  <p>
    Articles du plus recent au plus ancien...
  </p>
  <ul>
    {#each posts as post}
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