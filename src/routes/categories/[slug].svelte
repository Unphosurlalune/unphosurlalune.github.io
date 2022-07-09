<script context="module">
	export const load = async ({ params, fetch }) => {
		const currentCategory = params.slug;
		console.log(params);
		const response = await fetch('/api/posts.json');
		const posts = await response.json();

		const matchingPosts = posts.filter((post) => post.meta.categories.includes(currentCategory));

		return {
			props: {
				category: currentCategory,
				posts: matchingPosts
			}
		};
	};

	import PageTitle from '$lib/pageTitle.svelte';
	import BlogTile from '$lib/BlogTile/index.svelte';
</script>

<script>
	export let posts;
	export let category;
</script>


<svelte:head>
	<title>{category}</title>
</svelte:head>


<div class="text-center w-full">
	<PageTitle title={category} />
	{#if category.description}
	<p>{category?.description}</p>
	{/if}
	<ul>
		{#each posts as post}
			<li>
				<BlogTile {post} />
			</li>
		{/each}
	</ul>
</div>