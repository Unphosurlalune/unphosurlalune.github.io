<script context="module">
    import BlogTile from '$lib/BlogTile/index.svelte';
import CategoryTiles from '$lib/categoryTiles.svelte';
    import HomeTitle from '$lib/homeTitle.svelte';
    export const load = async ({ fetch }) => {
    const posts = await fetch('/api/posts.json')
    const allPosts = await posts.json()

    return {
      props: {
        posts: allPosts.slice(0,2)
      }
    }
  }
  </script>
  
  <script>
    export let posts
  </script>
  


 <HomeTitle title='UnPhoSurLaLune' />
  <p>Bonjour et bienvenue sur notre blog.</p>
  <p>
    Vous trouverez ici un peut de tout mais surtout du nous...
    L'idée c'est d'etre authentique, sincère et de partager.
    C'est pourquoi nous avons créé ce blog.
  </p>
  <br>

  2 Dernier articles
  <ul>
    {#each posts as post}
    <li>
      <CategoryTiles text={post.meta.title} url={post.path} />
    </li>
    {/each}
  </ul>


  <style>
    ul {
      list-style-type: none;
      padding-inline-start: 0px;
    }
  </style>