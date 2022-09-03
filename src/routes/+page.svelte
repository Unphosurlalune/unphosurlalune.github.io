<script>
    import CategoryTiles from '$lib/categoryTiles.svelte';
    import HomeTitle from '$lib/homeTitle.svelte';
    
    /** @type {import('./$types').PageData} */
  export let data;
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
    {#each data.posts as post}
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