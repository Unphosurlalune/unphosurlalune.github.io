<script>
    import PageTitle from '$lib/pageTitle.svelte';
	import BlogTile from '$lib/BlogTile/index.svelte';
    export let data;
   console.log('category', data);
</script>

<svelte:head>
	<title>{data.category}</title>
</svelte:head>


<div class="text-center w-full">
	<PageTitle title={data.category} />
	{#if data.category.description}
	<p>{data.category?.description}</p>
	{/if}
	<ul>
		{#each data.posts as post}
			<li>
				<BlogTile {post} />
			</li>
		{/each}
	</ul>
</div>