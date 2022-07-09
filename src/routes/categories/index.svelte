<script context="module">
	export const load = async ({ fetch }) => {
		const categories = await fetch('/api/categories.json');
		const allCategories = await categories.json()
		
		return {
			props: {
				categories: allCategories
			}
		};
	};
</script>

<script>
    import PageTitle from '$lib/pageTitle.svelte';
    import CategoryTiles from '$lib/categoryTiles.svelte';
    export let categories;
</script>

<PageTitle title="Categories" />
<p class="text-center my-5">Voici la liste de categories</p>
<ul class="text-center">
	{#each Object.values(categories) as category}
		<li>
			<CategoryTiles url="{category.path}" text="{category.name} [{category.posts.length}]" />
		</li>
	{/each}
</ul>
