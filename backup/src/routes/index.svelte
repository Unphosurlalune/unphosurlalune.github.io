<script context="module">
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
    Vous trouverez ici un peu de tout mais surtout du nous...
    L'idée c'est d'être authentique, sincère et de partager.
    C'est pourquoi nous avons créé ce blog.
  </p>
  <br>
  <h2>2 Dernier blogs</h2>
  <ul>
    {#each posts as post}
    <li>
      <CategoryTiles text={post.meta.title} url={post.path} />
    </li>
    {/each}
  </ul>
  <br>
  <p>
    Pour en lire d'autre ? >>> <CategoryTiles url='/blog' text='Tous les blogs' />
  </p>
<br>
  <h2>Flux RSS de podcast</h2>
  <p>Des flux RSS à utiliser, à écouter ! C'est par là >>> <CategoryTiles url="/rss" text="flux rss" /></p>
  <style>
    ul {
      list-style-type: none;
      padding-inline-start: 0px;
    }
  </style>