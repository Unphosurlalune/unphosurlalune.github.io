<script>
    import PageTitle from '$lib/pageTitle.svelte';
    import CategoryTiles from '$lib/categoryTiles.svelte';
    export let data;
</script>

<PageTitle title="Categories" />
<p class="text-center my-5">Voici la liste des catégories</p>
<ul class="text-center">
	{#each Object.values(data.categories) as category}
		<li>
			<CategoryTiles url="{category.path}" text="{category.name} [{category.posts.length}]" />
		</li>
	{/each}
</ul>
