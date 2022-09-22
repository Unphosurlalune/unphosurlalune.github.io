<!-- _post.svelte -->
<script>
	export let data;
	import BlogHeading from '../blogHeading.svelte';
</script>

<svelte:head>
	<title>{data?.meta.title} | UnphoSurLaLune</title>
</svelte:head>

<BlogHeading title={data.meta.title} author={data.meta.author} date={data.meta.date} />

<div class="text-center w-full">
	{@html data.body}
</div>
<br />


{#if data.meta.categories.length}
<aside>
	<h2>Categories:</h2>
	<ul>
		{#each data.meta.categories as category}
			<li>
				<a href="/categories/{category}">
					#{category}
				</a>
			</li>
		{/each}
	</ul>
</aside>
{/if}

